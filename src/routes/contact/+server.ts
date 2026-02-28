import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

const getTextField = (value: FormDataEntryValue | string | null | undefined): string =>
	typeof value === 'string' ? value.trim() : '';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const formData = await request.formData();

	const name = getTextField(formData.get('name'));
	const email = getTextField(formData.get('email'));
	const mobile = getTextField(formData.get('mobile'));
	const message = getTextField(formData.get('message'));

	if (!name || !email || !mobile || !message) {
		return json({ error: 'Please complete all fields before sending.' }, { status: 400 });
	}

	const provider = getTextField(env.TRIAL_PROVIDER).toLowerCase();
	const apiKey = getTextField(env.RESEND_API_KEY);
	const fromEmail = getTextField(env.TRIAL_FROM_EMAIL);
	const toEmail = getTextField(env.TRIAL_TO_EMAIL);

	if (provider !== 'resend') {
		return json({ error: 'Email provider is not configured.' }, { status: 500 });
	}

	if (!apiKey || !fromEmail || !toEmail) {
		return json({ error: 'Email environment variables are missing.' }, { status: 500 });
	}

	const resendResponse = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: fromEmail,
			to: [toEmail],
			reply_to: email,
			subject: `New Contact Form Message from ${name}`,
			text: `Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}`
		})
	});

	if (!resendResponse.ok) {
		const resendError = await resendResponse.text();
		console.error('Resend request failed:', resendResponse.status, resendError);
		return json({ error: 'Email delivery failed. Please try again shortly.' }, { status: 502 });
	}

	return json({ success: true });
};

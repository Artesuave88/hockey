import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

const getTextField = (value: FormDataEntryValue | string | null | undefined): string =>
	typeof value === 'string' ? value.trim() : '';

const escapeHtml = (value: string): string =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');

export const POST: RequestHandler = async ({ request, fetch, url }) => {
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

	const siteUrl = getTextField(env.TRIAL_SITE_URL) || url.origin;
	const normalizedSiteUrl = siteUrl.replace(/\/+$/, '');
	const logoUrl = `${normalizedSiteUrl}/logo.png`;

	const submittedAt = new Date().toLocaleString('en-GB', {
		dateStyle: 'medium',
		timeStyle: 'short',
		timeZone: 'UTC'
	});
	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeMobile = escapeHtml(mobile);
	const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');
	const safeLogoUrl = escapeHtml(logoUrl);

	const html = `<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>New Contact Message</title>
</head>
<body style="margin:0;padding:24px;background:#1f2937;font-family:Outfit,Segoe UI,Arial,sans-serif;color:#f1f5f9;">
	<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;margin:0 auto;background:linear-gradient(165deg,#1e3a8a 0%,#1f2937 100%);border:1px solid rgba(255,255,255,0.2);border-radius:14px;overflow:hidden;">
		<tr>
			<td style="padding:24px 24px 14px 24px;border-bottom:1px solid rgba(255,255,255,0.15);">
				<img src="${safeLogoUrl}" alt="Nottingham Phantoms IHC logo" width="64" height="64" style="display:block;width:64px;height:64px;border-radius:10px;object-fit:cover;border:1px solid rgba(255,255,255,0.25);" />
				<div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#ff4500;font-weight:700;">Nottingham Phantoms IHC</div>
				<h1 style="margin:8px 0 0 0;font-family:'Barlow Condensed',Segoe UI,Arial,sans-serif;font-size:32px;line-height:1.1;color:#f1f5f9;">New Contact Form Message</h1>
				<p style="margin:10px 0 0 0;font-size:13px;color:#e2e8f0;">Submitted ${escapeHtml(submittedAt)} (UTC)</p>
			</td>
		</tr>
		<tr>
			<td style="padding:18px 24px;">
				<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 10px;">
					<tr>
						<td style="width:120px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#e2e8f0;font-weight:700;">Name</td>
						<td style="font-size:15px;color:#f1f5f9;">${safeName}</td>
					</tr>
					<tr>
						<td style="width:120px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#e2e8f0;font-weight:700;">Email</td>
						<td style="font-size:15px;color:#f1f5f9;"><a href="mailto:${safeEmail}" style="color:#ff4500;text-decoration:none;">${safeEmail}</a></td>
					</tr>
					<tr>
						<td style="width:120px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#e2e8f0;font-weight:700;">Mobile</td>
						<td style="font-size:15px;color:#f1f5f9;"><a href="tel:${safeMobile}" style="color:#ff4500;text-decoration:none;">${safeMobile}</a></td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding:0 24px 24px 24px;">
				<div style="border:1px solid rgba(255,255,255,0.2);background:rgba(71,92,114,0.72);border-radius:10px;padding:16px;">
					<div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#e2e8f0;font-weight:700;margin-bottom:8px;">Message</div>
					<p style="margin:0;font-size:15px;line-height:1.55;color:#f1f5f9;">${safeMessage}</p>
				</div>
			</td>
		</tr>
	</table>
</body>
</html>`;

	const text = `Nottingham Phantoms IHC - New Contact Form Message
Submitted ${submittedAt} (UTC)

Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}`;

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
			html,
			text
		})
	});

	if (!resendResponse.ok) {
		const resendError = await resendResponse.text();
		console.error('Resend request failed:', resendResponse.status, resendError);
		return json({ error: 'Email delivery failed. Please try again shortly.' }, { status: 502 });
	}

	return json({ success: true });
};

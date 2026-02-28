<script lang="ts">
	import { resolve } from '$app/paths';
	import Card from '$lib/components/card.svelte';
	import { Instagram, Mail, Twitter } from 'lucide-svelte';

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		try {
			const response = await fetch(resolve('/contact'), {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				const body = (await response.json().catch(() => ({}))) as { error?: string };
				alert(body.error ?? 'Unable to send your message right now.');
				return;
			}

			alert('Message sent!');
			form.reset();
		} catch (error) {
			console.error('Contact form submission failed:', error);
			alert('Unable to send your message right now.');
		}
	};
</script>

<section class="grid gap-6 lg:grid-cols-5">
	<Card className="lg:col-span-2">
		<p class="text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
			Contact
		</p>
		<h1 class="mt-1 text-4xl font-bold text-[var(--text-primary)]">Get In Touch</h1>
		<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
			Interested in skating with the Phantoms? Send us a note and we will reply with training and
			registration details.
		</p>

		<div class="mt-5 space-y-3 text-sm">
			<a
				href="mailto:nottinghamphantoms@example.com"
				class="inline-flex items-center gap-2 text-[var(--text-primary)] transition duration-300 hover:text-[var(--color-accent)]"
			>
				<Mail size={16} />
				nottinghamphantoms@example.com
			</a>
			<a
				href="https://x.com/NottmPhantoms"
				target="_blank"
				rel="noreferrer"
				class="block text-[var(--text-primary)] transition duration-300 hover:text-[var(--color-accent)]"
			>
				<span class="inline-flex items-center gap-2"><Twitter size={16} /> @NottmPhantoms</span>
			</a>
			<a
				href="https://www.instagram.com/nottingham_phantoms/"
				target="_blank"
				rel="noreferrer"
				class="block text-[var(--text-primary)] transition duration-300 hover:text-[var(--color-accent)]"
			>
				<span class="inline-flex items-center gap-2">
					<Instagram size={16} />
					@nottingham_phantoms
				</span>
			</a>
		</div>
	</Card>

	<Card className="lg:col-span-3">
		<form class="space-y-4" onsubmit={handleSubmit}>
			<div>
				<label
					for="name"
					class="mb-1 block text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase"
					>Name</label
				>
				<input
					id="name"
					name="name"
					required
					class="w-full rounded-md border border-white/20 bg-[rgb(51_65_85_/_0.68)] px-3 py-2 text-sm text-[var(--text-primary)] transition outline-none focus:border-[var(--color-accent)]"
				/>
			</div>

			<div>
				<label
					for="email"
					class="mb-1 block text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase"
					>Email</label
				>
				<input
					id="email"
					name="email"
					type="email"
					required
					class="w-full rounded-md border border-white/20 bg-[rgb(51_65_85_/_0.68)] px-3 py-2 text-sm text-[var(--text-primary)] transition outline-none focus:border-[var(--color-accent)]"
				/>
			</div>

			<div>
				<label
					for="mobile"
					class="mb-1 block text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase"
					>Mobile Number</label
				>
				<input
					id="mobile"
					name="mobile"
					type="tel"
					autocomplete="tel"
					required
					class="w-full rounded-md border border-white/20 bg-[rgb(51_65_85_/_0.68)] px-3 py-2 text-sm text-[var(--text-primary)] transition outline-none focus:border-[var(--color-accent)]"
				/>
			</div>

			<div>
				<label
					for="message"
					class="mb-1 block text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase"
					>Message</label
				>
				<textarea
					id="message"
					name="message"
					required
					rows="5"
					class="w-full rounded-md border border-white/20 bg-[rgb(51_65_85_/_0.68)] px-3 py-2 text-sm text-[var(--text-primary)] transition outline-none focus:border-[var(--color-accent)]"
				></textarea>
			</div>

			<button
				type="submit"
				class="cta-glow inline-flex rounded-md border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[var(--color-accent-strong)]"
			>
				Send Message
			</button>
		</form>
	</Card>
</section>

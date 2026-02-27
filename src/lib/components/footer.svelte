<script lang="ts">
	import { resolve } from '$app/paths';
	import { Mail, Twitter } from 'lucide-svelte';

	import Logo from '$lib/components/logo.svelte';
</script>

<footer class="mt-12 border-t border-white/10 py-8">
	<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
		<div class="flex items-center gap-3">
			<a
				href={resolve('/')}
				class="transition duration-300 hover:scale-105"
				aria-label="Go to homepage"
			>
				<Logo size="sm" className="rounded-md" />
			</a>
			<div>
				<p class="text-sm font-semibold text-[var(--text-primary)]">
					Nottingham Phantoms IHC • Recreational Ice Hockey • Est. 2009
				</p>
				<p class="text-xs text-[var(--text-muted)]">© 2026 Nottingham Phantoms IHC</p>
			</div>
		</div>

		<div class="flex items-center gap-2">
			<a
				href="https://x.com/NottmPhantoms"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-[var(--text-primary)] transition duration-300 hover:scale-105 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
			>
				<Twitter size={14} />
				<span>@NottmPhantoms</span>
			</a>
			<a
				href="mailto:nottinghamphantoms@example.com"
				class="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-[var(--text-primary)] transition duration-300 hover:scale-105 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
			>
				<Mail size={14} />
				<span>Email</span>
			</a>
		</div>
	</div>
</footer>

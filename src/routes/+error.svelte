<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Logo from '$lib/components/logo.svelte';
	import { CalendarDays, Home } from 'lucide-svelte';
</script>

<section
	class="relative overflow-hidden rounded-3xl border border-white/15 bg-[rgb(51_65_85_/_0.58)] p-6 text-center shadow-2xl sm:p-10"
>
	<div
		class="pointer-events-none absolute inset-0"
		style="background: radial-gradient(circle at 20% 18%, rgb(59 130 246 / 0.25), transparent 42%), radial-gradient(circle at 85% 12%, rgb(255 69 0 / 0.3), transparent 40%);"
	></div>
	<div
		class="pointer-events-none absolute -top-12 -right-10 h-40 w-40 rounded-full border border-white/20"
	></div>
	<div
		class="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full border border-white/15"
	></div>

	<div class="relative mx-auto flex max-w-2xl flex-col items-center gap-4">
		<Logo size="lg" className="rounded-xl" />
		<p
			class="rounded-full border border-[var(--color-accent)]/55 bg-[rgb(255_69_0_/_0.14)] px-3 py-1 text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase"
		>
			{page.status} • {page.status === 404 ? 'Lost Puck' : 'Rink Glitch'}
		</p>
		<h1 class="text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
			{page.status === 404 ? 'This page skated off early.' : 'That play did not go to plan.'}
		</h1>
		<p class="max-w-xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
			{page.status === 404
				? 'We checked the bench, the penalty box, and behind the zamboni. Nothing here yet.'
				: 'Something unexpected happened. Give it another shift or head back to the main site.'}
		</p>

		<div class="mt-2 flex flex-wrap items-center justify-center gap-3">
			<a
				href={resolve('/')}
				class="cta-glow inline-flex items-center gap-2 rounded-md border border-[var(--color-accent)] bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[var(--color-accent-strong)]"
			>
				<Home size={16} />
				Back Home
			</a>
			<a
				href={resolve('/fixtures')}
				class="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/8 px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition duration-300 hover:scale-105 hover:border-[var(--ice-blue)] hover:bg-[rgb(59_130_246_/_0.16)]"
			>
				<CalendarDays size={16} />
				Check Fixtures
			</a>
		</div>
	</div>
</section>

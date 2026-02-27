<script lang="ts">
	import type { Snippet } from 'svelte';

	import HockeyStickIcon from '$lib/components/hockey-stick-icon.svelte';
	import Logo from '$lib/components/logo.svelte';

	let {
		title,
		tagline,
		description,
		actions
	}: {
		title: string;
		tagline: string;
		description: string;
		actions?: Snippet;
	} = $props();
</script>

<section
	class="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(15_23_42_/_0.78)] px-6 py-14 text-center shadow-2xl sm:px-10 sm:py-18"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-70"
		style="background: radial-gradient(circle at 20% 22%, rgb(59 130 246 / 0.22), transparent 42%), radial-gradient(circle at 84% 12%, rgb(255 69 0 / 0.28), transparent 45%), repeating-linear-gradient(90deg, transparent 0, transparent 116px, rgb(148 163 184 / 0.15) 116px, rgb(148 163 184 / 0.15) 118px), linear-gradient(160deg, rgb(15 23 42 / 0.98), rgb(17 24 39 / 0.92));"
	></div>

	<div
		class="hero-pulse pointer-events-none absolute -top-24 right-[-5rem] h-56 w-56 rounded-full border border-white/16"
	></div>
	<div
		class="hero-pulse pointer-events-none absolute -bottom-22 left-[-4rem] h-44 w-44 rounded-full border border-white/12 [animation-delay:1.8s]"
	></div>

	<div class="relative mx-auto flex max-w-4xl flex-col items-center gap-5">
		<Logo size="lg" className="transition duration-300 hover:scale-105" />
		<div
			class="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/60 bg-[rgb(255_69_0_/_0.14)] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase"
		>
			<HockeyStickIcon class="size-4" />
			<span>Nottingham, UK</span>
		</div>
		<h1 class="text-3xl font-bold tracking-wide text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
			{title}
		</h1>
		<p class="max-w-3xl text-base font-medium text-[var(--text-muted)] sm:text-lg">{tagline}</p>
		<p class="max-w-3xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
			{description}
		</p>
		<div class="flex flex-wrap items-center justify-center gap-3 pt-1">
			{@render actions?.()}
		</div>
	</div>
</section>

<style>
	.hero-pulse {
		animation: pulse-ring 6s ease-in-out infinite;
	}

	@keyframes pulse-ring {
		0% {
			transform: scale(0.94);
			opacity: 0.32;
		}

		50% {
			transform: scale(1.08);
			opacity: 0.5;
		}

		100% {
			transform: scale(0.94);
			opacity: 0.32;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-pulse {
			animation: none;
		}
	}
</style>

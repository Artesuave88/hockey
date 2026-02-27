<script lang="ts">
	import { onMount } from 'svelte';
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

	let heroEl: HTMLElement | null = null;
	let puckX = $state(0);
	let puckY = $state(0);
	let puckVisible = $state(false);
	let puckActive = $state(false);
	let reducedMotion = false;
	let canTrack = false;

	let targetX = 0;
	let targetY = 0;
	let currentX = 0;
	let currentY = 0;
	let animationFrameId = 0;

	const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

	const centerPuck = () => {
		if (!heroEl) return;

		const rect = heroEl.getBoundingClientRect();
		targetX = rect.width / 2;
		targetY = rect.height / 2;

		if (!puckActive) {
			currentX = targetX;
			currentY = targetY;
			puckX = targetX;
			puckY = targetY;
		}
	};

	const handlePointerEnter = () => {
		if (!canTrack) return;
		puckVisible = true;
		puckActive = true;
	};

	const handlePointerMove = (event: MouseEvent) => {
		if (!heroEl || !canTrack) return;

		const rect = heroEl.getBoundingClientRect();
		const padding = 16;
		targetX = clamp(event.clientX - rect.left, padding, rect.width - padding);
		targetY = clamp(event.clientY - rect.top, padding, rect.height - padding);
	};

	const handlePointerLeave = () => {
		puckActive = false;
		puckVisible = false;
		centerPuck();
	};

	onMount(() => {
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const pointerQuery = window.matchMedia('(pointer: fine)');

		const syncPuckMode = () => {
			reducedMotion = motionQuery.matches;
			canTrack = pointerQuery.matches;
			if (!canTrack) {
				puckVisible = false;
				puckActive = false;
			}
			if (!canTrack) centerPuck();
		};

		const handleMotionPrefChange = () => syncPuckMode();

		const addMediaListener = (
			query: MediaQueryList,
			handler: (event: MediaQueryListEvent) => void
		) => {
			if (typeof query.addEventListener === 'function') {
				query.addEventListener('change', handler);
			} else {
				query.addListener(handler);
			}
		};

		const removeMediaListener = (
			query: MediaQueryList,
			handler: (event: MediaQueryListEvent) => void
		) => {
			if (typeof query.removeEventListener === 'function') {
				query.removeEventListener('change', handler);
			} else {
				query.removeListener(handler);
			}
		};

		addMediaListener(motionQuery, handleMotionPrefChange);
		addMediaListener(pointerQuery, handleMotionPrefChange);
		window.addEventListener('resize', centerPuck);
		heroEl?.addEventListener('mouseenter', handlePointerEnter);
		heroEl?.addEventListener('mousemove', handlePointerMove);
		heroEl?.addEventListener('mouseleave', handlePointerLeave);
		syncPuckMode();
		centerPuck();

		const animatePuck = () => {
			const easing = reducedMotion ? 1 : 0.15;
			currentX += (targetX - currentX) * easing;
			currentY += (targetY - currentY) * easing;
			puckX = currentX;
			puckY = currentY;
			animationFrameId = window.requestAnimationFrame(animatePuck);
		};

		animationFrameId = window.requestAnimationFrame(animatePuck);

		return () => {
			window.cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', centerPuck);
			heroEl?.removeEventListener('mouseenter', handlePointerEnter);
			heroEl?.removeEventListener('mousemove', handlePointerMove);
			heroEl?.removeEventListener('mouseleave', handlePointerLeave);
			removeMediaListener(motionQuery, handleMotionPrefChange);
			removeMediaListener(pointerQuery, handleMotionPrefChange);
		};
	});
</script>

<section
	bind:this={heroEl}
	class="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(51_65_85_/_0.58)] px-6 py-14 text-center shadow-2xl sm:px-10 sm:py-18"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-70"
		style="background: radial-gradient(circle at 20% 22%, rgb(147 197 253 / 0.28), transparent 44%), radial-gradient(circle at 84% 12%, rgb(255 69 0 / 0.3), transparent 47%), repeating-linear-gradient(90deg, transparent 0, transparent 116px, rgb(226 232 240 / 0.14) 116px, rgb(226 232 240 / 0.14) 118px), linear-gradient(160deg, rgb(59 130 246 / 0.36), rgb(71 85 105 / 0.42));"
	></div>

	<div
		class="hero-pulse pointer-events-none absolute -top-24 right-[-5rem] h-56 w-56 rounded-full border border-white/16"
	></div>
	<div
		class="hero-pulse pointer-events-none absolute -bottom-22 left-[-4rem] h-44 w-44 rounded-full border border-white/12 [animation-delay:1.8s]"
	></div>
	<div
		class={`cursor-puck pointer-events-none absolute top-0 left-0 ${
			puckVisible ? (puckActive ? 'opacity-100' : 'opacity-80') : 'opacity-0'
		}`}
		style={`transform: translate3d(${puckX - 12}px, ${puckY - 12}px, 0);`}
		aria-hidden="true"
	>
		<div class="cursor-puck-disc"></div>
		<div class="cursor-puck-trail"></div>
	</div>

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
		<p class="text-xs tracking-wide text-[var(--text-muted)]/85 sm:text-sm">
			Website created by
			<a
				class="font-semibold text-[var(--color-accent)] underline decoration-transparent transition hover:decoration-current"
				href="https://mds-web-beta.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Michael Stevenson
			</a>
		</p>
	</div>
</section>

<style>
	.hero-pulse {
		animation: pulse-ring 6s ease-in-out infinite;
	}

	.cursor-puck {
		z-index: 30;
		transition: opacity 180ms ease;
		will-change: transform;
	}

	.cursor-puck-disc {
		width: 24px;
		height: 24px;
		border: 1px solid rgb(241 245 249 / 0.72);
		border-radius: 9999px;
		background: rgb(2 6 23 / 0.95);
		box-shadow:
			0 0 0 2px rgb(15 23 42 / 0.55),
			0 0 14px rgb(147 197 253 / 0.45);
	}

	.cursor-puck-trail {
		position: absolute;
		top: 10px;
		left: -24px;
		width: 52px;
		height: 4px;
		border-radius: 9999px;
		background: linear-gradient(90deg, rgb(148 163 184 / 0), rgb(226 232 240 / 0.76));
		filter: blur(0.6px);
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

		.cursor-puck {
			transition: none;
		}
	}

	@media (pointer: coarse) {
		.cursor-puck {
			display: none;
		}
	}
</style>

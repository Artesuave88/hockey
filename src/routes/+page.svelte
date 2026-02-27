<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgb(10_20_40_/_0.7)] px-6 py-12 shadow-xl sm:px-10"
>
	<div
		class="absolute -top-16 -right-14 h-40 w-40 rounded-full bg-[var(--color-accent)]/20 blur-3xl"
	></div>
	<div
		class="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-[var(--color-danger)]/20 blur-3xl"
	></div>

	<div class="relative max-w-2xl space-y-5">
		<p class="text-sm font-semibold tracking-[0.22em] text-[var(--color-accent)]">HOME ICE</p>
		<h1 class="text-4xl font-bold tracking-wide text-white uppercase sm:text-5xl">
			Blizzard Hockey Hub
		</h1>
		<p class="text-base leading-relaxed text-white/80 sm:text-lg">
			Everything fans need in one place: team roster updates, full season schedule, game-night
			galleries, and breaking news.
		</p>
		<div class="flex flex-wrap gap-3">
			<a
				href={resolve('/schedule')}
				class="rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-background)] transition-colors hover:bg-white"
				>View Schedule</a
			>
			<a
				href={resolve('/tickets')}
				class="rounded-md border border-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/10"
				>Get Tickets</a
			>
		</div>
	</div>
</section>

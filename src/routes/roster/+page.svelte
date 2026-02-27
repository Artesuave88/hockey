<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import { UserRound } from 'lucide-svelte';

	const placeholderSlots = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<section class="rounded-3xl border border-white/10 bg-[rgb(30_41_59_/_0.72)] p-6 sm:p-8">
	<div class="text-center">
		<p class="text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
			Squad
		</p>
		<h1 class="mt-1 text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">Roster</h1>
		<p class="mt-2 text-sm text-[var(--text-muted)]">
			No roster is published yet. Once players opt in, profiles will appear here.
		</p>
	</div>

	<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each placeholderSlots as slot (slot)}
			<Card className="group hover:scale-105">
				<div class="flex items-start gap-3">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[rgb(15_23_42_/_0.88)] text-[var(--text-primary)]"
					>
						<UserRound size={20} />
					</div>
					<div>
						<p class="text-lg font-semibold text-[var(--text-primary)]">Player spot coming soon</p>
						<p class="text-xs text-[var(--text-muted)] uppercase">Locker slot {slot}</p>
					</div>
				</div>
				<p class="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
					Skates laced, profile pending.
				</p>
			</Card>
		{/each}
	</div>
</section>

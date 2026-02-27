<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import { CalendarDays, MapPin } from 'lucide-svelte';
</script>

<section class="rounded-3xl border border-white/10 bg-[rgb(51_65_85_/_0.6)] p-6 sm:p-8">
	<div class="text-center">
		<p class="text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
			Schedule
		</p>
		<h1 class="mt-1 text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">Fixtures</h1>
		<p class="mt-2 text-sm text-[var(--text-muted)]">
			No official fixtures posted yet. We will list dates here as soon as they are confirmed.
		</p>
	</div>

	<div class="mt-8 space-y-4">
		<Card className="border-[var(--color-accent)] bg-[rgb(255_69_0_/_0.12)]">
			<div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<div class="flex items-center gap-2 text-[var(--color-accent)]">
						<CalendarDays size={16} />
						<p class="text-xs font-semibold tracking-[0.12em] uppercase">Next puck drop</p>
					</div>
					<h2 class="mt-1 text-xl font-semibold text-[var(--text-primary)]">
						Date and opponent TBD
					</h2>
					<p class="mt-1 text-sm text-[var(--text-muted)]">
						As soon as match nights are confirmed, this board goes live.
					</p>
				</div>
				<div
					class="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[rgb(51_65_85_/_0.62)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)]"
				>
					<MapPin size={12} />
					Check back soon
				</div>
			</div>
		</Card>
		<Card>
			<p class="text-sm leading-relaxed text-[var(--text-muted)]">
				Fixture feed currently on the bench. Once dates are real, they replace every placeholder.
			</p>
		</Card>
	</div>
</section>

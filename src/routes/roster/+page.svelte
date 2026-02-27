<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import { Shield, UserRound } from 'lucide-svelte';

	const players = [
		{
			name: 'Alex Burton',
			position: 'Goalie',
			number: 31,
			bio: 'Loud in the crease, calm under pressure.'
		},
		{
			name: 'Mark Fielding',
			position: 'Defence',
			number: 4,
			bio: 'Reliable blue-line presence every shift.'
		},
		{
			name: 'Tom Halley',
			position: 'Defence',
			number: 7,
			bio: 'Smart reads and quick breakout passes.'
		},
		{
			name: 'Nathan Cross',
			position: 'Forward',
			number: 12,
			bio: 'Faceoff specialist and penalty killer.'
		},
		{
			name: 'Jamie Locke',
			position: 'Forward',
			number: 14,
			bio: 'Fast wing with strong net drives.'
		},
		{
			name: 'Liam Waller',
			position: 'Forward',
			number: 16,
			bio: 'High-motor skater who never quits.'
		},
		{
			name: 'Chris Dobson',
			position: 'Forward',
			number: 19,
			bio: 'Creative playmaker through the middle.'
		},
		{
			name: 'Owen Brigg',
			position: 'Defence',
			number: 22,
			bio: 'Shot-blocking machine on tough nights.'
		},
		{
			name: 'Daniel Kerr',
			position: 'Forward',
			number: 27,
			bio: 'Quick release and constant forecheck.'
		},
		{
			name: 'Sam Broadhurst',
			position: 'Goalie',
			number: 35,
			bio: 'Athletic backup ready for big starts.'
		},
		{
			name: 'Will Mercer',
			position: 'Defence',
			number: 44,
			bio: 'Physical board play and clean exits.'
		},
		{
			name: 'Ben Sutton',
			position: 'Forward',
			number: 88,
			bio: 'Brings pace, smiles, and late energy.'
		}
	];
</script>

<section class="rounded-3xl border border-white/10 bg-[rgb(30_41_59_/_0.72)] p-6 sm:p-8">
	<div class="text-center">
		<p class="text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
			Squad
		</p>
		<h1 class="mt-1 text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">Roster</h1>
		<p class="mt-2 text-sm text-[var(--text-muted)]">
			Placeholder lineup while photos and profiles are being refreshed.
		</p>
	</div>

	<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each players as player (player.number)}
			<Card className="group hover:scale-105">
				<div class="flex items-start justify-between gap-3">
					<div class="flex items-center gap-3">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[rgb(15_23_42_/_0.88)] text-[var(--text-primary)]"
						>
							<UserRound size={20} />
						</div>
						<div>
							<p class="text-lg font-semibold text-[var(--text-primary)]">{player.name}</p>
							<p class="text-xs text-[var(--text-muted)] uppercase">{player.position}</p>
						</div>
					</div>
					<div
						class="inline-flex items-center gap-1 rounded-full border border-[var(--color-accent)]/45 bg-[rgb(255_69_0_/_0.14)] px-2 py-0.5 text-xs font-semibold text-[var(--color-accent)]"
					>
						<Shield size={12} />
						#{player.number}
					</div>
				</div>
				<p class="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{player.bio}</p>
			</Card>
		{/each}
	</div>
</section>

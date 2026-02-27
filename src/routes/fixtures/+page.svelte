<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import { CalendarDays, MapPin } from 'lucide-svelte';

	const fixtures = [
		{
			date: '12 Mar 2026',
			opponent: 'Friendly vs Derby Polar Bears',
			homeAway: 'Home',
			details: '20:15 • National Ice Centre, Nottingham',
			status: 'Upcoming',
			next: true
		},
		{
			date: '26 Mar 2026',
			opponent: 'Friendly vs Leicester Foxes Rec',
			homeAway: 'Away',
			details: 'TBA • Leicester Ice Arena',
			status: 'Upcoming'
		},
		{
			date: '09 Apr 2026',
			opponent: 'Friendly vs Nottingham Mavericks',
			homeAway: 'Home',
			details: 'TBA • National Ice Centre, Nottingham',
			status: 'Upcoming'
		},
		{
			date: '23 Apr 2026',
			opponent: 'Friendly vs Sheffield Squeelers',
			homeAway: 'Away',
			details: 'TBA • IceSheffield',
			status: 'Upcoming'
		},
		{
			date: '14 Nov 2025',
			opponent: 'Scrimmage vs Coventry Night Owls',
			homeAway: 'Home',
			details: 'National Ice Centre, Nottingham',
			status: 'Result TBA'
		},
		{
			date: '30 Oct 2025',
			opponent: 'Friendly vs Hull Hawks Rec',
			homeAway: 'Away',
			details: 'Hull Arena',
			status: 'L 3-4'
		},
		{
			date: '18 Sep 2025',
			opponent: 'Friendly vs Lincoln Lynx',
			homeAway: 'Home',
			details: 'National Ice Centre, Nottingham',
			status: 'W 5-2'
		},
		{
			date: '29 Aug 2025',
			opponent: 'Pre-season vs Leeds Knights Rec',
			homeAway: 'Away',
			details: 'Planet Ice Leeds',
			status: 'Result TBA'
		}
	];
</script>

<section class="rounded-3xl border border-white/10 bg-[rgb(30_41_59_/_0.72)] p-6 sm:p-8">
	<div class="text-center">
		<p class="text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
			Schedule
		</p>
		<h1 class="mt-1 text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">Fixtures</h1>
		<p class="mt-2 text-sm text-[var(--text-muted)]">
			Placeholder fixture board for the 2026 club cycle.
		</p>
	</div>

	<div class="mt-8 space-y-4">
		{#each fixtures as fixture (fixture.date + fixture.opponent)}
			<Card
				className={fixture.next ? 'border-[var(--color-accent)] bg-[rgb(255_69_0_/_0.12)]' : ''}
			>
				<div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
					<div>
						<div class="flex items-center gap-2 text-[var(--color-accent)]">
							<CalendarDays size={16} />
							<p class="text-xs font-semibold tracking-[0.12em] uppercase">{fixture.date}</p>
						</div>
						<h2 class="mt-1 text-xl font-semibold text-[var(--text-primary)]">
							{fixture.opponent}
						</h2>
						<p class="mt-1 text-sm text-[var(--text-muted)]">
							{fixture.homeAway} • {fixture.details}
						</p>
					</div>
					<div
						class="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[rgb(15_23_42_/_0.8)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)]"
					>
						<MapPin size={12} />
						{fixture.status}
					</div>
				</div>
				{#if fixture.next}
					<p
						class="mt-3 text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase"
					>
						Next fixture highlight
					</p>
				{/if}
			</Card>
		{/each}
	</div>
</section>

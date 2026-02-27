<script lang="ts">
	const sections = [
		{
			id: 'about',
			title: 'About',
			copy: 'Friendly, inclusive recreational hockey in Nottingham.'
		},
		{
			id: 'roster',
			title: 'Roster',
			copy: 'Current squad list and player profiles coming soon.'
		},
		{
			id: 'fixtures-results',
			title: 'Fixtures & Results',
			copy: 'Upcoming games, scorelines, and match reports placeholder.'
		},
		{
			id: 'news',
			title: 'News',
			copy: 'Club announcements, recaps, and updates will appear here.'
		},
		{
			id: 'stats',
			title: 'Stats',
			copy: 'Season and player statistics section placeholder.'
		},
		{
			id: 'sponsors',
			title: 'Sponsors',
			copy: 'Partner logos and sponsor acknowledgements coming soon.'
		},
		{
			id: 'contact',
			title: 'Contact',
			copy: 'Contact form and team email details placeholder.'
		},
		{
			id: 'training',
			title: 'Training',
			copy: 'Training times, location, and joining information placeholder.'
		}
	];
</script>

<section
	id="home"
	class="ice-rink-hero relative overflow-hidden rounded-2xl border border-white/10 px-6 py-12 shadow-xl sm:px-10"
>
	<div class="relative max-w-3xl space-y-4">
		<p class="text-sm font-semibold tracking-[0.22em] text-[var(--color-accent)]">
			NOTTINGHAM PHANTOMS IHC
		</p>
		<h1 class="text-4xl font-bold tracking-wide text-white uppercase sm:text-5xl">
			Recreational Ice Hockey Club
		</h1>
		<p class="text-base leading-relaxed text-white/80 sm:text-lg">
			This is the new home-page placeholder for Nottingham Phantoms IHC. Full content for fixtures,
			roster, stats, and news will be added next.
		</p>
	</div>
</section>

<section class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each sections as section (section.id)}
		<article
			id={section.id}
			class="scroll-mt-24 rounded-xl border border-white/10 bg-[rgb(248_250_252_/_0.04)] p-5"
		>
			<h2 class="text-xl font-semibold text-white">{section.title}</h2>
			<p class="mt-2 text-sm leading-relaxed text-white/75">{section.copy}</p>
		</article>
	{/each}
</section>

<script lang="ts">
	import { resolve } from '$app/paths';
	import Card from '$lib/components/card.svelte';
	import Hero from '$lib/components/hero.svelte';
	import { CalendarDays, Mail, Newspaper, Users } from 'lucide-svelte';

	const quickLinks = [
		{ label: 'About The Club', route: '/about', icon: Users },
		{ label: 'Roster', route: '/roster', icon: Users },
		{ label: 'Fixtures', route: '/fixtures', icon: CalendarDays },
		{ label: 'Contact', route: '/contact', icon: Mail }
	] as const;
</script>

<Hero
	title="Nottingham Phantoms IHC"
	tagline="Nottingham Phantoms IHC – Local Recreational Ice Hockey"
	description="Amateur fun on the ice since 2009. Training sessions, friendlies & community vibes in Nottingham. Always looking for new players!"
>
	{#snippet actions()}
		<a
			href="#contact-home"
			class="cta-glow inline-flex items-center rounded-md border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[var(--color-accent-strong)]"
		>
			Join / Get in Touch
		</a>
		<a
			href={resolve('/roster')}
			class="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition duration-300 hover:scale-105 hover:border-[var(--ice-blue)] hover:bg-[rgb(59_130_246_/_0.16)]"
		>
			See the Team
		</a>
	{/snippet}
</Hero>

<section class="mt-8 grid gap-5 lg:grid-cols-3">
	<Card className="lg:col-span-1">
		<div class="flex items-center gap-2 text-[var(--color-accent)]">
			<CalendarDays size={18} />
			<p class="text-xs font-semibold tracking-[0.14em] uppercase">Next Game</p>
		</div>
		<h2 class="mt-2 text-2xl font-semibold text-[var(--text-primary)]">TBA</h2>
		<p class="mt-1 text-sm text-[var(--text-muted)]">
			Check back soon for confirmed date, opponent, and venue.
		</p>
		<a
			href={resolve('/fixtures')}
			class="mt-4 inline-flex rounded-md border border-white/20 px-3 py-2 text-xs font-semibold text-[var(--text-primary)] transition duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
		>
			View fixture list
		</a>
	</Card>

	<div class="grid gap-4 sm:grid-cols-2 lg:col-span-2">
		<Card className="sm:col-span-2">
			<div class="flex items-center gap-2 text-[var(--color-accent)]">
				<Newspaper size={16} />
				<p class="text-[11px] font-semibold tracking-[0.12em] uppercase">Latest News</p>
			</div>
			<h3 class="mt-2 text-lg font-semibold text-[var(--text-primary)]">Newsboard warming up</h3>
			<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
				No published posts yet. First updates land here once the next skate cycle is announced.
			</p>
		</Card>
		<Card>
			<p class="text-[11px] font-semibold tracking-[0.12em] text-[var(--ice-blue)] uppercase">
				Roster Feed
			</p>
			<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
				Player cards are intentionally hidden until the squad list is confirmed.
			</p>
		</Card>
		<Card>
			<p class="text-[11px] font-semibold tracking-[0.12em] text-[var(--ice-blue)] uppercase">
				Fixture Feed
			</p>
			<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
				Fixtures will appear when dates are locked and posted by the club.
			</p>
		</Card>
	</div>
</section>

<section class="mt-8 rounded-2xl border border-white/10 bg-[rgb(51_65_85_/_0.6)] p-5 sm:p-6">
	<p class="text-xs font-semibold tracking-[0.15em] text-[var(--color-accent)] uppercase">
		Quick Links
	</p>
	<h2 class="section-title mt-1">Club Sections</h2>
	<div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each quickLinks as link (link.label)}
			<a href={resolve(link.route)} class="block">
				<Card className="h-full">
					<div class="flex items-center gap-2 text-[var(--ice-blue)]">
						<link.icon size={16} />
						<p class="text-sm font-semibold text-[var(--text-primary)]">{link.label}</p>
					</div>
					<p class="mt-2 text-sm text-[var(--text-muted)]">
						Open {link.label.toLowerCase()} details.
					</p>
				</Card>
			</a>
		{/each}
	</div>
</section>

<section
	id="contact-home"
	class="mt-8 rounded-2xl border border-[var(--color-accent)]/55 bg-[rgb(255_69_0_/_0.12)] p-6 text-center"
>
	<p class="text-sm font-semibold text-[var(--text-primary)]">Ready to join a skate?</p>
	<p class="mt-1 text-sm text-[var(--text-muted)]">
		Drop us a message and we will get you into the next beginner-friendly session.
	</p>
	<a
		href={resolve('/contact')}
		class="cta-glow mt-4 inline-flex rounded-md border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[var(--color-accent-strong)]"
	>
		Open Contact Page
	</a>
</section>

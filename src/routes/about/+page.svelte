<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import Card from '$lib/components/card.svelte';
</script>

<section class="rounded-3xl border border-white/10 bg-[rgb(30_41_59_/_0.72)] p-6 sm:p-8">
	<div class="flex flex-col items-center text-center">
		<Logo size="lg" className="rounded-xl" />
		<p class="mt-4 text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
			About
		</p>
		<h1 class="mt-1 text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">Who We Are</h1>
	</div>

	<div class="mt-8 grid gap-4 lg:grid-cols-2">
		<Card>
			<h2 class="text-2xl font-semibold text-[var(--text-primary)]">Our Story</h2>
			<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
				Nottingham Phantoms IHC was formed in 2009 as a friendly recreational ice hockey team. The
				club is built around fun, teamwork, and a positive on-ice culture where everyone gets
				involved.
			</p>
		</Card>

		<Card>
			<h2 class="text-2xl font-semibold text-[var(--text-primary)]">Level & Eligibility</h2>
			<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
				We play at recreational level and welcome all abilities. Players are typically 18+, skating
				in full kit, and EIHA rec registered. New skaters and returners are both welcome.
			</p>
		</Card>

		<Card className="lg:col-span-2">
			<h2 class="text-2xl font-semibold text-[var(--text-primary)]">Where We Skate</h2>
			<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
				The team is based around the National Ice Centre area in Nottingham. Sessions focus on skill
				building, game awareness, and keeping the atmosphere welcoming, social, and competitive in
				the right way.
			</p>
		</Card>
	</div>
</section>

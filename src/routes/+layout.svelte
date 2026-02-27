<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import Footer from '$lib/components/footer.svelte';
	import Logo from '$lib/components/logo.svelte';
	import { CalendarDays, Home, Info, Mail, Menu, Users, X } from 'lucide-svelte';

	let { children } = $props();

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ label: 'Home', route: '/' as const, icon: Home },
		{ label: 'About', route: '/about' as const, icon: Info },
		{ label: 'Roster', route: '/roster' as const, icon: Users },
		{ label: 'Fixtures', route: '/fixtures' as const, icon: CalendarDays },
		{ label: 'Contact', route: '/contact' as const, icon: Mail }
	] as const;

	const siteTitle = 'Nottingham Phantoms IHC | Rec Ice Hockey Nottingham';
	const siteDescription =
		'Friendly amateur ice hockey team based in Nottingham, UK. New players welcome!';
	const siteUrl = 'https://nottingham-phantoms-ihc.vercel.app';
	const ogImage = `${siteUrl}${logo}`;

	afterNavigate(() => {
		mobileMenuOpen = false;
	});
</script>

<svelte:head>
	<link rel="icon" type="image/jpeg" href={logo} />
	<!-- TODO: generate favicon.ico from src/lib/assets/logo.png for wider browser support -->
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta name="theme-color" content="#0F172A" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Nottingham Phantoms IHC team logo" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="relative min-h-screen text-[var(--text-primary)]">
	<div
		class="pointer-events-none fixed inset-0 -z-10 opacity-60"
		style="background-image: linear-gradient(to right, rgb(148 163 184 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.08) 1px, transparent 1px); background-size: 44px 44px;"
	></div>

	<header
		class="sticky top-0 z-40 border-b border-white/10 bg-[rgb(51_65_85_/_0.68)] backdrop-blur-md"
	>
		<nav class="mx-auto flex h-22 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
			<a
				href={resolve('/')}
				class="group inline-flex items-center gap-3 rounded-lg px-1 py-1 transition duration-300 hover:scale-[1.02]"
				aria-label="Nottingham Phantoms homepage"
			>
				<Logo size="md" className="rounded-lg" />
				<div class="hidden sm:block">
					<p class="text-lg font-bold tracking-wide text-[var(--text-primary)]">
						Nottingham Phantoms
					</p>
					<p class="text-xs tracking-[0.14em] text-[var(--text-muted)] uppercase">
						Recreational IHC
					</p>
				</div>
			</a>

			<ul class="hidden items-center gap-5 md:flex">
				{#each navLinks as link (link.label)}
					<li>
						<a
							href={resolve(link.route)}
							class="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)] transition duration-300 hover:text-[var(--color-accent)]"
						>
							<link.icon size={15} />
							<span>{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>

			<button
				type="button"
				class="rounded-md border border-white/20 p-2 text-[var(--text-primary)] transition duration-300 hover:border-[var(--color-accent)] md:hidden"
				aria-label="Open navigation menu"
				aria-expanded={mobileMenuOpen}
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				{#if mobileMenuOpen}
					<X size={20} />
				{:else}
					<Menu size={20} />
				{/if}
			</button>
		</nav>
	</header>

	<button
		type="button"
		class={`fixed inset-0 z-40 bg-black/65 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
		onclick={() => (mobileMenuOpen = false)}
		aria-label="Close mobile menu"
	></button>

	<aside
		class={`fixed top-0 right-0 z-50 h-full w-[82%] max-w-sm border-l border-white/10 bg-[rgb(51_65_85_/_0.84)] p-6 shadow-2xl transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
	>
		<div class="mb-8 flex items-center justify-between">
			<a
				href={resolve('/')}
				class="inline-flex items-center gap-2"
				onclick={() => (mobileMenuOpen = false)}
			>
				<Logo size="sm" className="rounded-md" />
				<span class="text-sm font-semibold tracking-wide text-[var(--text-primary)]">PHANTOMS</span>
			</a>
			<button
				type="button"
				class="rounded-md border border-white/20 p-2 text-[var(--text-primary)]"
				onclick={() => (mobileMenuOpen = false)}
				aria-label="Close menu"
			>
				<X size={18} />
			</button>
		</div>

		<ul class="space-y-3">
			{#each navLinks as link (link.label)}
				<li>
					<a
						href={resolve(link.route)}
						onclick={() => (mobileMenuOpen = false)}
						class="inline-flex w-full items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition duration-300 hover:border-[var(--color-accent)] hover:bg-[rgb(255_69_0_/_0.12)]"
					>
						<link.icon size={16} />
						<span>{link.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</aside>

	<div class="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col px-4 sm:px-6">
		<main class="flex-1 py-8 sm:py-10">{@render children()}</main>
		<Footer />
	</div>
</div>

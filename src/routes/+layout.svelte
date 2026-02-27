<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import HockeyStickIcon from '$lib/components/hockey-stick-icon.svelte';
	import { format } from 'date-fns';
	import { Instagram, Mail, Menu, Twitter, X } from 'lucide-svelte';

	let { children } = $props();

	const socialLinks = [
		{ label: '@NottmPhantoms on X', href: 'https://x.com/NottmPhantoms', icon: Twitter },
		{ label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
		{ label: 'Contact Email', href: 'mailto:info@nottinghamphantoms.co.uk', icon: Mail }
	];

	const siteTitle = 'Nottingham Phantoms IHC – Recreational Ice Hockey Club';
	const siteDescription =
		'Nottingham Phantoms IHC is a recreational ice hockey club. Follow club updates, fixtures, results, training, and community news.';
	const siteUrl = 'https://nottingham-phantoms-ihc.vercel.app';
	const ogImage = `${siteUrl}/og-nottingham-phantoms-rink.svg`;
	const currentYear = format(new Date(), 'yyyy');

	let mobileMenuOpen = $state(false);

	afterNavigate(() => {
		mobileMenuOpen = false;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta name="theme-color" content="#0F172A" />
	<meta name="vercel-deployment-url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Nottingham Phantoms IHC rink placeholder image" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="relative min-h-screen text-[var(--color-text)]">
	<div
		class="pointer-events-none fixed inset-0 -z-10 opacity-50"
		style="background-image: linear-gradient(to right, rgb(248 250 252 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(248 250 252 / 0.04) 1px, transparent 1px); background-size: 36px 36px;"
	></div>

	<header
		class="sticky top-0 z-40 border-b border-white/10 bg-[rgb(15_23_42_/_0.88)] backdrop-blur-md"
	>
		<nav class="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
			<a href="#home" class="flex items-center gap-2.5 text-xl font-bold tracking-wide text-white">
				<HockeyStickIcon class="size-6 text-[var(--color-accent)]" />
				<span class="[font-family:var(--font-heading)]">Nottingham Phantoms</span>
			</a>

			<ul class="hidden items-center gap-4 lg:flex">
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#home">Home</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#about">About</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#roster">Roster</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#fixtures-results">Fixtures & Results</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#news">News</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#stats">Stats</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#sponsors">Sponsors</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#contact">Contact</a
					>
				</li>
				<li>
					<a
						class="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
						href="#training">Training</a
					>
				</li>
			</ul>

			<button
				type="button"
				class="rounded-md border border-white/15 p-2 text-white transition-colors hover:border-[var(--color-accent)] md:hidden"
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
		aria-label="Close mobile menu"
		class={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
		onclick={() => (mobileMenuOpen = false)}
	></button>

	<aside
		class={`fixed top-0 right-0 z-50 h-full w-80 border-l border-white/10 bg-[var(--color-background-dark)] p-6 shadow-2xl transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
	>
		<div class="mb-6 flex items-center justify-between">
			<span class="[font-family:var(--font-heading)] text-lg font-semibold tracking-wide text-white"
				>MENU</span
			>
			<button
				type="button"
				class="rounded-md border border-white/15 p-2 hover:border-[var(--color-accent)]"
				aria-label="Close menu"
				onclick={() => (mobileMenuOpen = false)}
			>
				<X size={18} />
			</button>
		</div>
		<ul class="space-y-4">
			<li>
				<a
					href="#home"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>Home</a
				>
			</li>
			<li>
				<a
					href="#about"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>About</a
				>
			</li>
			<li>
				<a
					href="#roster"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>Roster</a
				>
			</li>
			<li>
				<a
					href="#fixtures-results"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>Fixtures & Results</a
				>
			</li>
			<li>
				<a
					href="#news"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>News</a
				>
			</li>
			<li>
				<a
					href="#stats"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>Stats</a
				>
			</li>
			<li>
				<a
					href="#sponsors"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>Sponsors</a
				>
			</li>
			<li>
				<a
					href="#contact"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>Contact</a
				>
			</li>
			<li>
				<a
					href="#training"
					class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
					onclick={() => (mobileMenuOpen = false)}>Training</a
				>
			</li>
		</ul>
	</aside>

	<div class="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl flex-col px-4 sm:px-6">
		<main class="flex-1 py-10">
			{@render children()}
		</main>

		<footer class="border-t border-white/10 py-6">
			<div
				class="flex flex-col gap-5 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between"
			>
				<div>
					<p>© {currentYear} Nottingham Phantoms IHC. All rights reserved.</p>
					<p class="mt-1 text-xs text-white/65">Recreational Ice Hockey since 2009</p>
				</div>
				<div class="flex flex-wrap items-center gap-3">
					{#each socialLinks as social (social.label)}
						<a
							href={social.href}
							class="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1.5 text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
							target="_blank"
							rel="external noreferrer"
							aria-label={social.label}
						>
							<social.icon size={14} />
							<span class="text-xs">{social.label}</span>
						</a>
					{/each}
				</div>
			</div>
		</footer>
	</div>
</div>

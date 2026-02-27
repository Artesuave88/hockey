<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import { format } from 'date-fns';
	import { Instagram, Menu, Snowflake, Twitter, X, Youtube } from 'lucide-svelte';

	let { children } = $props();

	type NavPath = '/' | '/roster' | '/schedule' | '/news' | '/gallery' | '/tickets';
	type NavLink = { label: string; href: NavPath };

	const navLinks: NavLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Roster', href: '/roster' },
		{ label: 'Schedule', href: '/schedule' },
		{ label: 'News', href: '/news' },
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Tickets', href: '/tickets' }
	];

	const socialLinks = [
		{ label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
		{ label: 'Twitter', href: 'https://x.com', icon: Twitter },
		{ label: 'YouTube', href: 'https://youtube.com', icon: Youtube }
	];

	const siteTitle = 'Blizzard Hockey | Team HQ';
	const siteDescription =
		'Follow Blizzard Hockey for roster moves, game schedules, latest news, and ticket updates.';
	const siteUrl = 'https://blizzard-hockey.vercel.app';
	const ogImage = `${siteUrl}/og-hockey-placeholder.svg`;
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
	<meta name="theme-color" content="#05080F" />
	<meta name="vercel-deployment-url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Blizzard Hockey Open Graph image placeholder" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="relative min-h-screen text-[var(--color-text)]">
	<div
		class="pointer-events-none fixed inset-0 -z-10 opacity-50"
		style="background-image: linear-gradient(to right, rgb(0 212 255 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 212 255 / 0.06) 1px, transparent 1px); background-size: 32px 32px;"
	></div>

	<header
		class="sticky top-0 z-40 border-b border-white/10 bg-[rgb(10_20_40_/_0.86)] backdrop-blur-md"
	>
		<nav class="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
			<a
				href={resolve('/')}
				class="flex items-center gap-2 text-xl font-bold tracking-wide text-white"
			>
				<Snowflake size={22} class="text-[var(--color-accent)]" />
				<span class="[font-family:var(--font-heading)]">BLIZZARD HOCKEY</span>
			</a>

			<ul class="hidden items-center gap-6 md:flex">
				{#each navLinks as link (link.href)}
					<li>
						<a
							class="font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
							href={resolve(link.href)}>{link.label}</a
						>
					</li>
				{/each}
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
		class={`fixed top-0 right-0 z-50 h-full w-72 border-l border-white/10 bg-[var(--color-primary)] p-6 shadow-2xl transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
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
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={resolve(link.href)}
						class="block rounded-md px-2 py-1 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[var(--color-accent)]"
						onclick={() => (mobileMenuOpen = false)}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</aside>

	<div class="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl flex-col px-4 sm:px-6">
		<main class="flex-1 py-10">
			{@render children()}
		</main>

		<footer class="border-t border-white/10 py-6">
			<div
				class="flex flex-col gap-4 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between"
			>
				<p>© {currentYear} Blizzard Hockey. All rights reserved.</p>
				<div class="flex items-center gap-3">
					{#each socialLinks as social (social.label)}
						<a
							href={social.href}
							class="rounded-md border border-white/15 p-2 text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
							target="_blank"
							rel="external noreferrer"
							aria-label={social.label}
						>
							<social.icon size={16} />
						</a>
					{/each}
				</div>
			</div>
		</footer>
	</div>
</div>

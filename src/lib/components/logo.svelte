<script lang="ts">
	import logoSrc from '$lib/assets/logo.png';

	let {
		size = 'md',
		className = '',
		alt = 'Nottingham Phantoms IHC logo'
	}: {
		size?: 'sm' | 'md' | 'lg';
		className?: string;
		alt?: string;
	} = $props();

	const sizeClasses = {
		sm: 'h-10 w-10 sm:h-11 sm:w-11',
		md: 'h-14 w-14 sm:h-16 sm:w-16',
		lg: 'h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52'
	} as const;

	// TODO: Replace with the final exported logo asset when a newer version is available.
</script>

<img
	src={logoSrc}
	{alt}
	class={`logo-glow object-cover ${sizeClasses[size]} ${className}`}
	loading="eager"
/>

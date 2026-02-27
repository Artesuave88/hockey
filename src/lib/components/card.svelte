<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		className = '',
		children
	}: {
		className?: string;
		children?: Snippet;
	} = $props();
</script>

<div
	class={`hover-card rounded-2xl border border-white/12 bg-[var(--card-bg)] p-5 transition duration-300 hover:scale-[1.02] ${className}`}
>
	{@render children?.()}
</div>

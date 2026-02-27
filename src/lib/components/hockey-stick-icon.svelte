<script lang="ts">
	let { class: className = '' } = $props<{ class?: string }>();
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	aria-hidden="true"
	class={className}
	stroke="currentColor"
	stroke-linecap="round"
	stroke-linejoin="round"
	stroke-width="1.8"
>
	<path d="M5.5 4.5L12 11l-1.9 1.9-6.5-6.5z" />
	<path d="M10.1 12.9L6.3 16.7a2.5 2.5 0 00-.7 1.8v1.9h2a2.5 2.5 0 001.8-.7l3.8-3.8" />
	<circle cx="18.1" cy="17.9" r="2.1" />
</svg>

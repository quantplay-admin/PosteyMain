<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface BackdropProps extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	let { children, class: className }: BackdropProps = $props();
</script>

<div class={['backdrop', className]}>
	{@render children()}
</div>

<style>
	:global(.backdrop) {
		position: relative;
		display: inline-block;
		overflow: hidden;
	}

	:global(.backdrop img) {
		display: block;
		border-radius: 0.75rem; /* match style */
	}

	:global(.backdrop::after) {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
		pointer-events: none;
	}
</style>

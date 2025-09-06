<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
		value?: {
			level?: number;
			style?: string;
		};
		level?: number;
	};

	let { children, value, level = 1 }: Props = $props();

	const actualLevel = value?.level || level;
</script>

{#if actualLevel === 1}
	<h1>{@render children()}</h1>
{:else if actualLevel === 2}
	<h2>{@render children()}</h2>
{:else if actualLevel === 3}
	<h3>{@render children()}</h3>
{:else if actualLevel === 4}
	<h4>{@render children()}</h4>
{:else if actualLevel === 5}
	<h5>{@render children()}</h5>
{:else if actualLevel === 6}
	<h6>{@render children()}</h6>
{:else}
	<h1>{@render children()}</h1>
{/if}

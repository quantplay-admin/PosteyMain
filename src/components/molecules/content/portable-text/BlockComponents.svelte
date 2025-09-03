<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
		value?: {
			style?: string;
		};
	};

	let { children, value }: Props = $props();

	const style = value?.style || 'normal';
</script>

{#if style === 'h1'}
	<h1>{@render children()}</h1>
{:else if style === 'h2'}
	<h2>{@render children()}</h2>
{:else if style === 'h3'}
	<h3>{@render children()}</h3>
{:else if style === 'h4'}
	<h4>{@render children()}</h4>
{:else if style === 'h5'}
	<h5>{@render children()}</h5>
{:else if style === 'h6'}
	<h6>{@render children()}</h6>
{:else if style === 'blockquote'}
	<blockquote>{@render children()}</blockquote>
{:else}
	<p>{@render children()}</p>
{/if}

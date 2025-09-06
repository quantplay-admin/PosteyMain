<script lang="ts">
	import '../app.css';
	import '$lib/icons/icons.css';
	import { onMount } from 'svelte';
	import { loadPostHog } from '$lib/core/posthog/load.svelte';

	let { children } = $props();

	onMount(loadPostHog);
</script>

{@render children?.()}

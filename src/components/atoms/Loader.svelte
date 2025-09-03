<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Icon from './Icon.svelte';

	interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
		variant: 'three-dots' | 'spinner';
	}

	const variantMap: Record<LoaderProps['variant'], [string, string]> = {
		spinner: ['loading-loop', 'line-md'],
		'three-dots': ['three-dots-loading', 'eos-icons']
	};

	let { variant, ...props }: LoaderProps = $props();
</script>

<Icon name={variantMap[variant][0]} family={variantMap[variant][1]} {...props} />

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
		bg?: string;
		width?: number;
		height?: number;
	}

	let {
		bg = '[#1D4ED8]',
		width = 600,
		height = 350,
		class: className,
		...props
	}: OverlayProps = $props();
</script>

<div
	class={[
		`pointer-events-none absolute z-100 bg-${bg} w-[${width}px] h-[${height}px] opacity-25 blur-[162px]`,
		className
	]}
	{...props}
></div>

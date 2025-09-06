<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
		bg?: string;
		width?: number;
		height?: number;
	}

	let {
		bg = '#1D4ED8',
		width = 600,
		height = 350,
		class: className = '',
		...props
	}: OverlayProps = $props();

	// Create inline styles for dynamic values
	let dynamicStyles = `
		background-color: ${bg};
		width: ${width}px;
		height: ${height}px;
	`;
</script>

<div
	class={`pointer-events-none absolute z-[100] opacity-25 bg-blend-multiply blur-[162px] ${className}`.trim()}
	style={dynamicStyles}
	{...props}
></div>

<div
	class={`overlay ${className}`.trim()}
	style="--bg: {bg}; --width: {width}px; --height: {height}px;"
	{...props}
></div>

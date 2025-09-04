<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CardTProps {
		width?: number;
		height?: number;
		children: Snippet;
		containerClass?: string;
		shadow?: boolean;
	}

	let {
		width = 300,
		height = 400,
		children,
		containerClass,
		shadow = false
	}: CardTProps = $props();
</script>

<div
	style={`height: ${height}px; width: ${width}px`}
	class={` rounded-2xl bg-gradient-to-bl from-[#b5b5b5] to-[#222222] p-[1px] ${containerClass}`}
>
	<div
		class="flex h-full w-full items-start rounded-2xl bg-[#000000] p-10"
		style={`
		${shadow ? 'box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.08);' : ''}`}
	>
		{@render children()}
	</div>
</div>

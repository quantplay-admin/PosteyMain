<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CardTProps {
		width?: number;
		height?: number;
		children: Snippet;
		gradient1?: string;
		gradient2?: string;
		containerClass?: string;
		gradientDirection?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'; // ⬅️ Tailwind directions
		shadow?: boolean;
	}

	let {
		width = 300,
		height = 300,
		children,
		gradient1 = '#141414',
		gradient2 = '#1E1E1E',
		containerClass,
		gradientDirection = 'bl',
		shadow = false
	}: CardTProps = $props();
</script>

<div
	style={`height: ${height}px; width: ${width}px`}
	class={` rounded-md bg-gradient-to-bl from-[#8a8a8a] to-[#222222] p-[1px] ${containerClass}`}
>
	<div
		class="flex h-full w-full items-start rounded-md bg-gradient-to-{gradientDirection ||
			'bl'} p-10"
		style={`background-image: linear-gradient(to right, ${gradient1}, ${gradient2});
		${shadow ? 'box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.08);' : ''}`}
	>
		{@render children()}
	</div>
</div>

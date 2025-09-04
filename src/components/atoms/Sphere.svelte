<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Overlay from './Overlay.svelte';

	let { class: className = '' }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<Overlay class={className} />
<div
	class={`animate-pulse-float absolute h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,#444444,#000000)] opacity-100 ${className || ''}`}
></div>

<style>
	@keyframes float-slow {
		0%,
		100% {
			transform: translateY(0px) translateX(0px);
		}
		33% {
			transform: translateY(-20px) translateX(10px);
		}
		66% {
			transform: translateY(10px) translateX(-15px);
		}
	}

	/* Reverse floating animation */
	@keyframes float-reverse {
		0%,
		100% {
			transform: translateY(0px) translateX(0px);
		}
		33% {
			transform: translateY(15px) translateX(-10px);
		}
		66% {
			transform: translateY(-10px) translateX(20px);
		}
	}

	/* Pulse and float combination */
	@keyframes pulse-float {
		0%,
		100% {
			transform: translateY(0px) translateX(0px) scale(1);
			opacity: 0.65;
		}
		25% {
			transform: translateY(-15px) translateX(15px) scale(1.05);
			opacity: 0.8;
		}
		50% {
			transform: translateY(0px) translateX(25px) scale(1);
			opacity: 0.5;
		}
		75% {
			transform: translateY(20px) translateX(-10px) scale(0.95);
			opacity: 0.7;
		}
	}
	:global(.animate-float-slow) {
		animation: float-slow 12s ease-in-out infinite;
	}

	:global(.animate-float-reverse) {
		animation: float-reverse 15s ease-in-out infinite;
	}

	:global(.animate-pulse-float) {
		animation: pulse-float 18s ease-in-out infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.animate-float-slow),
		:global(.animate-float-reverse),
		:global(.animate-pulse-float) {
			animation: none !important;
		}
	}
</style>

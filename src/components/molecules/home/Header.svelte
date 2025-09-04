<script>
	import { goto } from '$app/navigation';
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<header class="flex h-20 w-full items-center justify-end bg-[#000000] px-10 text-[#FFFFFF]">
	<div class="flex items-center gap-20">
		<div class="flex gap-8 font-medium text-[#FFFFFF]">
			<a
				in:fly={{ y: -20, delay: 200, easing: cubicInOut }}
				class="transition-colors hover:text-blue-500"
				href="#aa">Product</a
			>
			<a
				in:fly={{ y: -40, delay: 300, easing: cubicInOut }}
				class="transition-colors hover:text-blue-500"
				href="/docs">Resources</a
			>
			<a
				in:fly={{ y: -60, delay: 400, easing: cubicInOut }}
				class="transition-colors hover:text-blue-500"
				href="/pricing">Pricing</a
			>
			<a
				in:fly={{ y: -80, delay: 500, easing: cubicInOut }}
				class="transition-colors hover:text-blue-500"
				href="mailto:notification@postey.ai">Contact</a
			>
		</div>

		<button
			in:fly={{ y: -100, delay: 600, easing: cubicInOut }}
			onclick={() => goto('/waitlist')}
			class="cursor-pointer rounded-xl bg-[#1D4ED8] px-4 py-2 text-sm font-medium hover:bg-blue-600"
			>Get Started</button
		>
	</div>
</header>

<script>
	import { goto } from '$app/navigation';
	import Overlay from '../../atoms/Overlay.svelte';
	import GettingStarted from './GettingStarted.svelte';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<div
	class="relative flex flex-col items-center justify-center gap-10 overflow-hidden py-24 text-[#FFFFFF]"
>
	<Overlay class="top-0 -left-46" width={600} />
	<Overlay class="top-0 -right-46" width={600} />
	<h1 class="heading max-w-2xl text-center text-3xl leading-12 font-medium md:text-5xl">
		All your content. One powerful workspace.
	</h1>
	<button
		type="button"
		onclick={() => goto('/waitlist')}
		class="cursor-pointer rounded-xl border border-blue-500 bg-[#1D4ED8] px-4 py-2 text-sm font-medium hover:bg-blue-600"
		>Get Started</button
	>
	<GettingStarted />
</div>

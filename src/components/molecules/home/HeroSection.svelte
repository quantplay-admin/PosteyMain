<script lang="ts">
	import { goto } from '$app/navigation';
	import Backdrop from '../../atoms/Backdrop.svelte';
	import TextReveal from '../../atoms/TextReveal.svelte';
	import GettingStarted from './GettingStarted.svelte';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section class="mt-10 py-10 text-white">
	<main class="mx-auto flex max-w-2xl flex-col items-center justify-center gap-10 text-center">
		<TextReveal
			class="heading text-4xl leading-10 md:text-6xl md:leading-20"
			text="Create, collaborate, publish posts with AI"
		/>
		<TextReveal
			class="description fonr-thin max-w-md text-lg text-gray-400 md:text-2xl"
			text="AI-powered workspace to create viral posts across X, LinkedIn, and Instagram."
		/>

		<button
			type="button"
			onclick={() => goto('/waitlist')}
			class="w-fit cursor-pointer rounded-xl border border-blue-500 bg-[#1D4ED8] px-4 py-2 font-medium hover:bg-blue-600"
			>Get Started</button
		>

		<GettingStarted />
	</main>
	<Backdrop class="w-full">
		<img class="mx-auto w-10/12" src="/Hero-Section.png" alt="Banner" />
	</Backdrop>
</section>

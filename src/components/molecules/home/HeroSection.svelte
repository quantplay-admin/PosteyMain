<script lang="ts">
	import { fly } from 'svelte/transition';
	import Backdrop from '../../atoms/Backdrop.svelte';
	import GettingStarted from './GettingStarted.svelte';
	import { cubicInOut } from 'svelte/easing';
</script>

<section class="mt-10 py-10 text-white">
	<div in:fly={{ y: -20, delay: 200, easing: cubicInOut }} class="flex items-center justify-center">
		<img src="/apple-touch-transparent-icon.png" alt="Postey.ai" class="h-24 w-24" />
		<h1 class="text-6xl">Postey</h1>
	</div>
	<main class="mx-auto flex max-w-2xl flex-col items-center justify-center gap-8 text-center">
		<h1 in:fly={{ y: -40, delay: 300, easing: cubicInOut }} class="text-6xl leading-20">
			Create, collaborate, publish posts with AI
		</h1>

		<p
			in:fly={{ y: -60, delay: 400, easing: cubicInOut }}
			id="desc"
			class="max-w-4xl text-2xl text-gray-400"
		>
			AI-powered workspace to create viral posts across X, LinkedIn, and Instagram.
		</p>

		<button
			in:fly={{ y: -80, delay: 500, easing: cubicInOut }}
			id="btn"
			class="w-fit rounded-xl border border-blue-500 bg-[#1D4ED8] px-4 py-2 font-medium"
			>Get Started</button
		>

		<GettingStarted />
	</main>
	<Backdrop>
		<img class="mx-auto w-10/12" src="/Hero-Section.png" alt="Banner" />
	</Backdrop>
</section>

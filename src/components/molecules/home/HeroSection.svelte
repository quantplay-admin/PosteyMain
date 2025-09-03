<script lang="ts">
	import { animateText } from '$lib/actions/gsapActions';
	import { onMount } from 'svelte';

	onMount(() => {
		animateText('#title', {
			y: 0,
			x: -200,
			duration: 1.5
		});
		animateText('#desc', { x: 0, y: 100, duration: 2 });
		animateText('#btn', { x: -220, y: 0, duration: 3 });
	});
</script>

<section class="overflow-hidden bg-[#1E1E1E] py-10 text-[#FFFFFF]">
	<main class="mx-auto flex w-9/12 flex-col gap-10">
		<h1 id="title" class="text-5xl font-semibold">
			<span class="text-[#1D4ED8]">Smarter</span> content workflows. Together.
		</h1>

		<p id="desc" class="max-w-4xl text-lg">
			Postey is your all-in-one workspace to ideate, create, collaborate, and grow your content
			presence—powered by AI and built for focus.
		</p>

		<button id="btn" class="w-fit rounded-xl bg-[#1D4ED8] px-4 py-2 font-medium">Get Started</button
		>
	</main>
	<!-- bg-gradient-to-r from-[#141414] to-[#1E1E1E] -->
	<div
		style="transform: perspective(5000px) rotateX(50deg) rotateY(-5deg) rotateZ(-10deg);
		transition: transform 0.3s ease;"
	>
		<img
			class="ml-auto w-11/12"
			src="https://cdn.postey.ai/user-generated/13b4fbf0-338f-4762-a9fb-d0d7f677712d.png"
			alt="Banner"
		/>
	</div>
</section>

<style>
	:global(.tilted-frame) {
		transform: perspective(5000px) rotateX(50deg) rotateY(-5deg) rotateZ(-10deg);
		transition: transform 0.3s ease;
	}
</style>

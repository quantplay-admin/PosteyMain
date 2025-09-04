<script lang="ts">
	import { animateText } from '$lib/actions/gsapActions';
	import { onMount } from 'svelte';
	import Cards from './Cards.svelte';
	import Divide from './Divide.svelte';

	onMount(() => {
		['#idea-title', '#idea-desc'].forEach((target) => {
			animateText(target, {
				x: 0,
				y: -100,
				duration: 1.5
			});
		});
		animateText('.left-box', {
			x: -100,
			y: 0,
			duration: 1.5
		});
		animateText('.right-box', {
			x: 100,
			y: 0,
			duration: 1.5
		});
		animateText('.child-box', {
			x: 0,
			y: -100,
			duration: 1.5
		});
	});
</script>

<div
	class="flex flex-col items-center justify-center gap-20 overflow-hidden bg-gradient-to-b from-[#222222] to-[#141414] py-24 text-[#FFFFFF]"
>
	<div class="flex items-center justify-between px-10">
		<h1 id="idea-title" class="text-5xl font-medium">Start with ideas that work</h1>
		<p id="idea-desc" class="max-w-4xl text-gray-400">
			Fuel your next post with insight, not guesswork. Postey helps you spark content ideas that
			resonate using real-time trends, smart prompts, and tailored templates so you’re always
			creating with direction.
		</p>
	</div>

	<div class="flex w-full items-center justify-between gap-20 px-10">
		<div class="flex flex-col gap-4">
			<Cards containerClass="left-box" width={300} height={350} gradientDirection="br"
				><div></div></Cards
			>
			<p class="text-gray-400">Real-time tags to amplify reach across platforms.</p>
		</div>
		<Divide direction="col" />

		<div class="flex flex-col gap-8">
			<Cards width={700} containerClass="relative right-box" gradientDirection="br">
				<Cards
					height={120}
					width={350}
					containerClass="absolute top-20 -left-30 child-box"
					gradientDirection="br"
					gradient2="#181818"
				>
					<div></div>
				</Cards>
			</Cards>
			<p class="text-gray-400">Ready-made formats designed for each social channel.</p>
		</div>
	</div>

	<Divide direction="row" />

	<div class="flex w-full items-center justify-between gap-20 px-6">
		<div>
			<p class="text-gray-400">
				Guidance on what kind of content to post based on audience behavior
			</p>
		</div>
		<div class="flex flex-col gap-8">
			<Cards width={600} height={350} gradientDirection="br" containerClass="right-box"
				><div></div></Cards
			>
			<p class="text-gray-400">
				Guidance on what kind of content to post based on audience behavior
			</p>
		</div>
	</div>
</div>

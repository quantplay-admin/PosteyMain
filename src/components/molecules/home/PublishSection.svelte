<script lang="ts">

	import { animateText } from '$lib/actions/gsapActions';
	import { onMount } from 'svelte';
	import Cards from './Cards.svelte';
	import Divide from './Divide.svelte';

	onMount(() => {
		['.pb-left-box', '.pb-child-box'].forEach((target, idx) => {
			animateText(target, {
				x: (-50 * idx) / 2,
				y: 0,
				duration: 1.5
			});
		});

		['.right-text'].forEach((target, idx) => {
			animateText(target, {
				x: (50 * idx) / 2,
				y: 0,
				duration: 1.5
			});
		});
	});
</script>

<div
	class="flex flex-col items-start justify-start gap-20 overflow-hidden bg-gradient-to-b from-[#222222] to-[#141414] py-24 text-[#FFFFFF]"
>
	<div class="relative w-full">
		<Cards width={500} height={450} containerClass="pb-left-box relative -ml-2">
			<Cards width={450} height={300} containerClass="pb-child-box absolute -bottom-20 -right-30"
				><div></div></Cards
			>
		</Cards>
		<div class="right-text absolute top-10 left-[40%] flex max-w-2xl flex-col gap-4">
			<h1 class="text-4xl font-medium">Publish with intention</h1>
			<p class="max-w-xl text-gray-400">
				Perfectly timed. Platform-ready. Smart scheduling and previews ensure your content goes live
				when and where it should, optimized for reach.
			</p>
		</div>

		<div class="right-text absolute top-80 left-[45%] flex max-w-2xl flex-col gap-4">
			<p class="max-w-xl text-gray-400">
				Multi-Platform Posting & Preview – See exactly how posts appear across platforms before
				publishing.
			</p>
		</div>
	</div>

	<Divide direction="row" className="mt-40" />

	<div class="mt-10 flex w-full justify-between px-10">
		<!-- <Cards width={400} height={350}>dummy</Cards>
          -->
		<div class="relative h-[280px] w-[400px]">
			<div
				class="absolute inset-0 z-0 translate-x-6 translate-y-6 -rotate-[8deg] rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] shadow-md"
			></div>

			<div
				class="absolute inset-0 z-10 translate-x-3 translate-y-3 -rotate-[4deg] rounded-xl border border-[#333] bg-[#131313] shadow-lg"
			></div>

			<div
				class="relative z-20 h-full w-full rounded-xl border border-[#444] bg-[#1a1a1a] shadow-xl"
			>
				<!-- Your content goes here -->
			</div>
		</div>

		<Divide direction="col" height={800} />
		<div class="flex flex-col gap-16">
			<Cards width={600} height={150}><div></div></Cards>
			<p class="text-gray-400">Scheduling – Auto-adjusted timings for global audiences.</p>

			<div class="relative flex h-[400px] w-full items-start justify-start gap-10 pl-20">
				<div class="relative z-10">
					<Cards width={300} height={220} gradientDirection="br"><div></div></Cards>
				</div>

				<div class="relative top-16 left-4 z-0 flex flex-col gap-4">
					<Cards width={300} height={220} gradientDirection="br"><div></div></Cards>
				</div>
				<p class="absolute top-90 right-4 text-gray-400">
					Scheduling – Auto-adjusted timings for global audiences.
				</p>
			</div>
		</div>
	</div>
</div>

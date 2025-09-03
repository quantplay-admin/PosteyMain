<script lang="ts">
	
	import { animateText } from '$lib/actions/gsapActions';
	import { onMount } from 'svelte';
	import Cards from './Cards.svelte';
	import Divide from './Divide.svelte';

	onMount(() => {
		['.text', '.left-box'].forEach((target) => {
			animateText(target, {
				x: -50,
				y: 0,
				duration: 1.5
			});
		});

		animateText('.points', {
			x: 50,
			y: 0,
			duration: 1.5
		});
	});
</script>

<div
	class="flex flex-col gap-6 overflow-hidden bg-gradient-to-b from-[#222222] to-[#141414] py-24 text-[#FFFFFF]"
>
	<div class="flex flex-col gap-6 px-10">
		<h1 class="text w-4/12 text-5xl font-medium">Collaborate without the back-and-forth</h1>

		<p class="text max-w-3xl text-lg text-[#989898]">
			Made for async teams and fast approvals. Workflows designed to include clients, stakeholders,
			and teammates without endless feedback loops.
		</p>
		<div
			class="board-tilt relative mt-20 h-[600px] w-[1000px] rounded-xl bg-gradient-to-tr from-[#8a8a8a] to-[#222222]"
		></div>
	</div>

	<div class="mt-20 flex items-center justify-between gap-20">
		<div class="flex flex-col gap-8">
			<p class="ml-8 text-[#989898]">Leave feedback, tag teammates, and track changes.</p>

			<Cards width={450} height={500} containerClass="-ml-2"><div></div></Cards>
		</div>

		<Divide direction="col" />
		<div class="flex h-[400px] w-[400px] flex-col justify-center gap-8">
			<p class="points ml-8 text-[#989898]">
				Streamline publishing with clear decision checkpoints.
			</p>
			<p class="points ml-8 text-[#989898]">
				Streamline publishing with clear decision checkpoints.
			</p>
			<p class="points ml-8 text-[#989898]">
				Streamline publishing with clear decision checkpoints.
			</p>
		</div>
	</div>
</div>

<style>
	:global(.board-tilt) {
		transform: perspective(1600px) rotateX(20deg) rotateY(-28deg) rotateZ(15deg);
		border: 2px solid rgba(169, 165, 165, 0.2);
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.02);
		background: #1e1e1e;
		background-image: radial-gradient(transparent, rgba(255, 255, 255, 0.02));
	}
</style>

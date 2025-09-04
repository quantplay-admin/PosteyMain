<script lang="ts">
	import { animateText } from '$lib/actions/gsapActions';
	import { onMount } from 'svelte';
	import Cards from './Cards.svelte';

	onMount(() => {
		animateText('#better-text', {
			x: 0,
			y: -50,
			duration: 1.5
		});
		[1, 2, 3].forEach((_, index) => {
			animateText(`.box-${index}`, {
				x: 0,
				y: 100 + index * 50,
				duration: 1.0 + index * 0.2
			});
		});
	});
</script>

<div
	class="box flex flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-b from-[#222222] to-[#141414] px-10 py-24 text-[#FFFFFF]"
>
	<h1 id="better-text" class="text-4xl font-medium">A better system for modern teams</h1>
	<p class="max-w-2xl">
		Postey is shaped by the realities of fast-moving content workflows—fluid, collaborative, and
		fast-paced. It brings structure to the chaos so your team can stay focused, aligned, and ahead.
	</p>

	<div class="flex items-center gap-10">
		{#each [1, 2, 3] as _, idx}
			<Cards containerClass={`box-${idx}`} shadow={true} width={300} height={400}>
				<div></div>
			</Cards>
		{/each}
	</div>
</div>

<!-- <style>
    :global(.gradient-border) {
         padding: 2px;
    border-radius: 8px;
    background: linear-gradient(to right, #FFFFFF, #141414);
    }
</style> -->

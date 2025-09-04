<script lang="ts">
	import Cards from './Cards.svelte';

	interface CardsType {
		id: string;
		img: string;
		title: string;
	}

	const CardItems: CardsType[] = [
		{ id: 'create', img: '/Schedule.png', title: 'Create Faster with AI' },
		{ id: 'create', img: '/Schedule.png', title: 'Plan & Schedule Like a Pro' },
		{ id: 'create', img: '/Schedule.png', title: 'Collaboration made simple' }
	];
</script>

<div
	class="box flex flex-col items-center justify-center gap-10 overflow-hidden px-10 py-36 text-[#FFFFFF]"
>
	<h1 id="better-text" class="text-5xl font-medium">A better system for modern teams</h1>
	<p class="max-w-3xl">
		Postey is shaped by the realities of fast-moving content workflows—fluid, collaborative, and
		fast-paced. It brings structure to the chaos so your team can stay focused, aligned, and ahead.
	</p>

	<div class="flex items-center gap-10">
		{#each CardItems as item, idx}
			<Cards containerClass={`box-${idx} shadow`} shadow={true} width={300} height={500}>
				<div class="relative flex h-full flex-1 flex-col justify-between py-4">
					<img class="backdrop mt-20 w-full" src={item.img} alt={item.id} />

					<p class="max-w-xs text-3xl font-thin">{item.title}</p>
				</div>
			</Cards>
		{/each}
	</div>
</div>

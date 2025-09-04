<script lang="ts">
	import Cards from './Cards.svelte';

	interface TPlans {
		name: string;
		price: string;
		tag?: string;
		subTag?: string;
	}
	const plans = $state<TPlans[]>([
		{ name: 'Free', price: 'Free' },
		{ name: 'Creator', price: '$12.50/m', tag: 'Yearly billing' },
		{
			name: 'Team',
			price: '$29/m',
			tag: 'Save with yearly billing',
			subTag: 'Discounted, saving $240/y'
		},
		{
			name: 'Agency',
			price: '$79/m',
			tag: 'Save with yearly billing',
			subTag: 'Discounted, saving $240/y'
		}
	]);
</script>

<div
	class="flex flex-col items-center justify-center gap-20 bg-gradient-to-b from-[#222222] to-[#141414] px-10 py-24 text-[#FFFFFF]"
>
	<h1 class="text-5xl font-medium">Flexible plans for every stage of growth.</h1>

	<div class="flex items-center justify-center gap-10">
		{#each plans as plan}
			<Cards shadow={true} width={300} height={420}>
				<div class="flex flex-col gap-4">
					<h4 class="text-2xl">{plan.name}</h4>
					<span class="text-lg text-gray-400">{plan.price}</span>

					<button class="rounded-lg bg-[#1D4ED8] px-4 py-1">Try for free</button>
					{#if plan.tag}
						<p class="text-[#DFDFDF]">{plan.tag}</p>
					{/if}
					{#if plan.subTag}
						<p class="text-[#34A853]">{plan.subTag}</p>
					{/if}
				</div>
			</Cards>
		{/each}
	</div>
</div>

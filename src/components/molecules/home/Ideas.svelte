<script lang="ts">
	import Overlay from '../../atoms/Overlay.svelte';
	import Divide from './Divide.svelte';

	interface AiFeatureType {
		id: string;
		title: string;
	}
	const aiFeatureList: AiFeatureType[] = [
		{
			id: 'ai',
			title: 'Go Viral with AI'
		},
		{
			id: 'grammar',
			title: 'Fix Grammar with AI'
		},
		{
			id: 'polish',
			title: 'Polishing Writing with AI'
		}
	];

	let activeFeature = $state(aiFeatureList[0].id);
</script>

<div class="relative flex flex-col items-center justify-center gap-20 py-24 text-[#FFFFFF]">
	<Overlay class="-top-20 " width={800} />
	<div class="flex items-center justify-between px-10">
		<h1 class="max-w-sm text-5xl font-medium">Start with ideas that work</h1>
		<p id="idea-desc" class="max-w-lg text-gray-400">
			Fuel your next post with insight, not guesswork. Postey helps you spark content ideas that
			resonate using real-time trends, smart prompts, and tailored templates so you’re always
			creating with direction.
		</p>
	</div>

	<div class="mt-10 ml-50 flex w-12/12 items-center justify-evenly gap-20 px-10">
		<div class="flex flex-col gap-2">
			{#each aiFeatureList as feature}
				<div class="flex items-center gap-2">
					<!-- 3a3a3a -->
					<div
						class="h-[22px] w-[3px] rounded {feature.id === activeFeature
							? 'bg-[#1e4bd7]'
							: 'bg-[#3A3A3A]'}"
					></div>
					<p class={feature.id === activeFeature ? 'font-bold' : 'font-thin text-gray-400'}>
						{feature.title}
					</p>
				</div>
			{/each}
		</div>

		<Divide direction="col" />

		<div>
			<img src="/Schedule2.png" alt="" class="w-4/12" />
		</div>
	</div>
</div>

<script lang="ts">
	import Overlay from '../../atoms/Overlay.svelte';
	import Divide from '../../atoms/Divide.svelte';
	import { onMount, onDestroy } from 'svelte';

	interface AiFeatureType {
		id: string;
		title: string;
		image: string;
	}

	const aiFeatureList: AiFeatureType[] = [
		{
			id: 'ai',
			title: 'Go Viral with AI',
			image: '/Go-viral-with-Ai.png'
		},
		{
			id: 'grammar',
			title: 'Fix Grammar with AI',
			image: '/Fix-grammar-with-AI.png' // Add your image path
		},
		{
			id: 'polish',
			title: 'Polishing Writing with AI',
			image: '/Polishing-writing-with-AI.png' // Add your image path
		}
	];

	let activeFeature = $state(aiFeatureList[0].id);
	let intervalId: ReturnType<typeof setTimeout>;
	let isPaused = $state(false);

	// Function to move to next feature
	const nextFeature = () => {
		if (isPaused) return;

		const currentIndex = aiFeatureList.findIndex((feature) => feature.id === activeFeature);
		const nextIndex = (currentIndex + 1) % aiFeatureList.length;
		activeFeature = aiFeatureList[nextIndex].id;
	};

	// Function to set active feature manually
	const setActiveFeature = (featureId: string) => {
		activeFeature = featureId;
		isPaused = true;
		if (intervalId) clearInterval(intervalId);

		// Resume auto-cycling after 10 seconds of no interaction
		setTimeout(() => {
			isPaused = false;
			startInterval();
		}, 10000);
	};

	const startInterval = () => {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(nextFeature, 5000); // 5 seconds
	};

	onMount(() => {
		startInterval();
	});

	onDestroy(() => {
		if (intervalId) clearInterval(intervalId);
	});

	// Get current active feature data
	let currentFeature =
		aiFeatureList.find((feature) => feature.id === activeFeature) ?? aiFeatureList[0];
</script>

<div class="relative flex flex-col items-center justify-center gap-20 py-24 text-[#FFFFFF]">
	<Overlay class="-top-20 " width={800} />
	<div class="flex flex-wrap items-center gap-10 px-10 md:justify-between md:gap-0">
		<h1 class="headline heading max-w-sm text-5xl font-medium">Start with ideas that work</h1>
		<p class="desc description max-w-lg text-gray-400">
			Fuel your next post with insight, not guesswork. Postey helps you spark content ideas that
			resonate using real-time trends, smart prompts, and tailored templates so you're always
			creating with direction.
		</p>
	</div>

	<div class="mt-10 flex flex-wrap items-center justify-center gap-20">
		<div class="flex flex-col gap-2 px-10">
			{#each aiFeatureList as feature}
				<button
					class="flex items-center gap-2 text-left transition-all duration-300 hover:opacity-80"
					onclick={() => setActiveFeature(feature.id)}
					aria-pressed={feature.id === activeFeature}
				>
					<!-- Progress bar indicator -->
					<div class="relative h-[22px] w-[3px] overflow-hidden rounded">
						<!-- Background -->
						<div class="absolute inset-0 bg-[#3A3A3A]"></div>

						<!-- Active state with progress -->
						{#if feature.id === activeFeature}
							<div class="animate-progress absolute inset-0 origin-top bg-[#1e4bd7]"></div>
						{/if}
					</div>

					<p
						class="transition-all duration-300 {feature.id === activeFeature
							? 'font-bold text-white'
							: 'font-thin text-gray-400'}"
					>
						{feature.title}
					</p>
				</button>
			{/each}
		</div>

		<Divide direction="col" class="hidden md:block" />

		<!-- Image with smooth transition -->
		<div class="relative w-10/12 overflow-hidden rounded-2xl md:w-5/12">
			<img
				src={currentFeature.image}
				alt={currentFeature.title}
				class="h-full w-full object-cover transition-opacity duration-500"
				aria-label={activeFeature}
			/>
		</div>
	</div>
</div>

<style>
	@keyframes progress {
		from {
			transform: scaleY(0);
		}
		to {
			transform: scaleY(1);
		}
	}

	.animate-progress {
		animation-name: progress;
	}
</style>

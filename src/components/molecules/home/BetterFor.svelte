<script lang="ts">
	import { onMount } from 'svelte';
	import Cards from './Cards.svelte';
	import { gsap } from 'gsap';
	import Backdrop from '../../atoms/Backdrop.svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface CardsType {
		id: string;
		img: string;
		title: string;
	}

	const CardItems: CardsType[] = [
		{ id: 'create', img: '/Create-faster.png', title: 'Create Faster with AI' },
		{ id: 'plan', img: '/Plan-and-schedule.png', title: 'Plan & Schedule Like a Pro' },
		{ id: 'collaborate', img: '/Collaboration-made-simple.png', title: 'Collaboration made simple' }
	];

	onMount(() => {
		const cards = document.querySelectorAll('.card');
		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			cards,
			{ y: 100, opacity: 0, delay: 200 },
			{
				y: 0,
				opacity: 1,
				scale: 1,
				duration: 2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: cards[0],
					start: 'top 80%',
					end: 'bottom 20%'
				}
			}
		);
	});
</script>

<div
	class="box flex flex-col items-center justify-center gap-10 overflow-hidden px-10 py-36 text-start text-[#FFFFFF]"
>
	<h1 class="headline heading text-3xl font-medium md:text-5xl">
		A better system for modern teams
	</h1>
	<p class="desc description max-w-3xl">
		Postey is shaped by the realities of fast-moving content workflows—fluid, collaborative, and
		fast-paced. It brings structure to the chaos so your team can stay focused, aligned, and ahead.
	</p>

	<div class="flex flex-wrap items-center justify-center gap-10">
		{#each CardItems as item, idx}
			<Cards containerClass={`box-${idx} shadow card`} shadow={true} width={300} height={500}>
				<div class="relative flex h-full flex-1 flex-col justify-between py-4">
					<Backdrop>
						<img class="backdrop mt-20 w-full" src={item.img} alt={item.id} />
					</Backdrop>

					<p class="max-w-10/12 text-2xl">{item.title}</p>
				</div>
			</Cards>
		{/each}
	</div>
</div>

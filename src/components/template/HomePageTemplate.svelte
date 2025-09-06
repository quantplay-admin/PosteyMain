<script lang="ts">
	import { browser } from '$app/environment';
	import { textInScroll } from '$lib/actions/gsaptTextAnimations';
	import Sphere from '../atoms/Sphere.svelte';
	import BetterFor from '../molecules/home/BetterFor.svelte';
	import Collaboration from '../molecules/home/Collaboration.svelte';
	import CtaSection from '../molecules/home/CtaSection.svelte';
	import Divide from '../atoms/Divide.svelte';
	import Footer from '../molecules/home/Footer.svelte';
	import Header from '../molecules/home/Header.svelte';
	import HeroSection from '../molecules/home/HeroSection.svelte';
	import Ideas from '../molecules/home/Ideas.svelte';
	import Plans from '../molecules/home/Plans.svelte';
	import PublishSection from '../molecules/home/PublishSection.svelte';
	import TrustedSection from '../molecules/home/TrustedSection.svelte';
	import gsap from 'gsap';
	import ScrollSmoother from 'gsap/ScrollSmoother';
	import { onMount, onDestroy } from 'svelte';

	//   Smooth scrolling gsap animation

	let smoother: ScrollSmoother;

	onMount(() => {
		if (!browser) return;
		gsap.registerPlugin(ScrollSmoother);
		smoother = ScrollSmoother.create({
			wrapper: '#smooth-wrapper',
			content: '#smooth-content',
			smooth: 1.5,
			effects: true
		});
		textInScroll({ target: '.headline', y: -110 });
		textInScroll({ target: '.desc', y: -120 });
	});

	onDestroy(() => {
		smoother?.kill();
	});
</script>

<div id="smooth-wrapper" class="relative min-h-screen w-full overflow-x-hidden bg-black">
	<div id="smooth-content" class="flex flex-1 flex-col">
		<!-- <Sphere class="-top-10 -left-24" /> -->
		<Sphere class="top-80 -right-18" />
		<Header />

		<HeroSection />
		<TrustedSection />
		<BetterFor />
		<Divide direction="row" type="hr" />
		<Ideas />
		<Divide direction="row" type="hr" />
		<Collaboration />
		<Divide direction="row" type="hr" />
		<PublishSection />
		<Divide direction="row" type="hr" />
		<Plans />
		<CtaSection />
		<Divide direction="row" type="hr" />
		<Footer />
	</div>
</div>

<style>
	#smooth-wrapper {
		height: 100%;
		overflow: hidden;
	}
	#smooth-content {
		will-change: transform;
	}
</style>

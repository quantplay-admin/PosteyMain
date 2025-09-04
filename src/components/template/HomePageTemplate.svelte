<script lang="ts">
	import Sphere from '../atoms/Sphere.svelte';
	import BetterFor from '../molecules/home/BetterFor.svelte';
	import Collaboration from '../molecules/home/Collaboration.svelte';
	import CtaSection from '../molecules/home/CtaSection.svelte';
	import Divide from '../molecules/home/Divide.svelte';
	import Footer from '../molecules/home/Footer.svelte';
	import Header from '../molecules/home/Header.svelte';
	import HeroSection from '../molecules/home/HeroSection.svelte';
	import Ideas from '../molecules/home/Ideas.svelte';
	import Plans from '../molecules/home/Plans.svelte';
	import PublishSection from '../molecules/home/PublishSection.svelte';
	import TrustedSection from '../molecules/home/TrustedSection.svelte';
</script>

<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden !bg-[#000000]">
	<Sphere class="-top-10 -left-24" />
	<Sphere class="top-80 -right-18" />
	<Header />
	<div class="flex-1">
		<HeroSection />
		<TrustedSection />

		<BetterFor />
		<Divide direction="row" />
		<Ideas />
		<Divide direction="row" />
		<Collaboration />

		<Divide direction="row" />
		<PublishSection />
		<Divide direction="row" />
		<!--<Impact />  -->

		<Plans />
		<CtaSection />
		<Footer />
	</div>
</div>

<script lang="ts">
	import BetterFor from '../../components/molecules/home/BetterFor.svelte';
	import Collaboration from '../../components/molecules/home/Collaboration.svelte';
	import Header from '../../components/molecules/home/Header.svelte';
	import HeroSection from '../../components/molecules/home/HeroSection.svelte';
	import Ideas from '../../components/molecules/home/Ideas.svelte';
	import Impact from '../../components/molecules/home/Impact.svelte';
	import Plans from '../../components/molecules/home/Plans.svelte';
	import PublishSection from '../../components/molecules/home/PublishSection.svelte';
	import TrustedSection from '../../components/molecules/home/TrustedSection.svelte';
</script>

<div class="flex min-h-screen w-full flex-col">
	<Header />
	<div class="flex-1 overflow-y-auto">
		<HeroSection />

		<TrustedSection />
		<BetterFor />
		<Ideas />
		<Collaboration />
		<PublishSection />
		<Impact />
		<Plans />
	</div>
</div>

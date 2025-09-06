<script>
	import Backdrop from '../../atoms/Backdrop.svelte';
	import Overlay from '../../atoms/Overlay.svelte';
	import Cards from './Cards.svelte';
</script>

<div class="relative flex items-start justify-center gap-20 overflow-hidden py-40 text-[#FFFFFF]">
	<Overlay class="top-0" width={900} />

	<div
		class="flex w-full flex-wrap items-center justify-center md:w-10/12 md:items-start md:justify-around"
	>
		<Backdrop>
			<Cards width={300} class="rounded-2xl !p-0">
				<img src="/Schedule2.png" alt="Publish" class="w-full !rounded-2xl" />
			</Cards>
		</Backdrop>
		<div class="flex flex-col gap-40">
			<div class=" flex max-w-2xl flex-col gap-4">
				<h1 class="headline heading text-3xl font-medium md:text-5xl">Publish with intention</h1>
				<p class="desc description max-w-xl text-gray-400">
					Perfectly timed. Platform-ready. Smart scheduling and previews ensure your content goes
					live when and where it should, optimized for reach.
				</p>
			</div>
			<div class="flex max-w-2xl flex-col gap-4">
				<h2 class="headline heading text-xl font-medium">Publish & Schedule with Ease</h2>
				<p class="desc description max-w-xl text-gray-400">
					Effortlessly schedule content and publish at the perfect time to maximize reach and
					engagement.
				</p>
			</div>
		</div>
	</div>
</div>

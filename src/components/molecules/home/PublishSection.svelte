<script>
	import Backdrop from '../../atoms/Backdrop.svelte';
	import Overlay from '../../atoms/Overlay.svelte';
</script>

<div class="relative flex items-start justify-center gap-20 overflow-hidden py-40 text-[#FFFFFF]">
	<Overlay class="-top-20 blur-[190px]" width={700} />

	<div class="flex w-10/12 items-start justify-around">
		<Backdrop>
			<img src="/Schedule2.png" alt="Publish" class="w-6/12" />
		</Backdrop>
		<div class="flex flex-col gap-20">
			<div class=" flex max-w-2xl flex-col gap-4">
				<h1 class="text-6xl font-medium">Publish with intention</h1>
				<p class="max-w-xl text-gray-400">
					Perfectly timed. Platform-ready. Smart scheduling and previews ensure your content goes
					live when and where it should, optimized for reach.
				</p>
			</div>
			<div class=" flex max-w-2xl flex-col gap-4">
				<h1 class="text-xl font-medium">Publish & Schedule with Ease</h1>
				<p class="max-w-xl text-gray-400">
					Effortlessly schedule content and publish at the perfect time to maximize reach and
					engagement.
				</p>
			</div>
		</div>
	</div>
</div>

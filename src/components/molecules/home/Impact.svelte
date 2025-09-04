<script>
	import Divide from './Divide.svelte';
</script>

<div
	class="flex flex-col items-start justify-start gap-20 bg-gradient-to-b from-[#222222] to-[#141414] px-10 py-24 text-[#FFFFFF]"
>
	<div class="flex max-w-xl flex-col items-start gap-8">
		<h1 class="text-5xl font-medium">Know your impact. Grow your reach</h1>
		<p class="text-gray-400">
			Insights that shape your strategy. Postey helps you uncover what resonates through clean,
			visual analytics and smart AI predictions—so you can iterate faster and post with confidence.
		</p>
	</div>

	<div class="flex w-full items-center justify-between">
		<div>
			<p class="text-gray-400">Engagement Prediction – Forecast how content might perform.</p>
		</div>
		<Divide direction="col" />
		<div>
			<p class="text-gray-400">
				Platform-Wise Previews – Spot-check each post’s appearance across apps.
			</p>
		</div>
	</div>

	<Divide direction="row" />

	<div class="flex w-full items-center justify-between">
		<div>
			<p class="text-gray-400">
				Basic Analytics + Heatmaps – Visualize patterns in reach, clicks, and response.
			</p>
		</div>
		<Divide direction="col" />
		<div>
			<p class="text-gray-400">
				Team Performance Insights – Track content success across users and teams.
			</p>
		</div>
	</div>
</div>

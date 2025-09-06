<script>
	import Icon from '../../atoms/Icon.svelte';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<footer class="mb-8 bg-black px-10 py-26 text-white">
	<div class="mx-auto flex flex-col flex-wrap items-center justify-around gap-20 md:flex-row">
		<!-- Left section -->
		<div class="flex flex-col gap-8">
			<!-- Logo -->
			<div class="flex items-center gap-3">
				<img src="/apple-touch-transparent-icon.png" alt="Postey.ai" class="h-12 w-12" />
				<span class="heading text-2xl font-bold">Postey</span>
			</div>

			<!-- Social Icons -->
			<div class="ml-4 flex items-center gap-6">
				<!-- X/Twitter -->
				<Icon name="new-twitter" family="hugeicons" class="text-xl" />

				<!-- LinkedIn -->
				<Icon name="linkedin" family="skill-icons" class="text-xl" />

				<!-- Instagram -->
				<Icon name="instagram" family="skill-icons" class="text-xl" />
			</div>
		</div>

		<!-- Right section -->
		<div class="description flex flex-wrap items-start gap-10">
			<!-- Product Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-white">Product</h3>
				<ul class="space-y-6">
					<li><a href="/" class="text-gray-400 transition-colors hover:text-white">Features</a></li>
					<li><a href="/" class="text-gray-400 transition-colors hover:text-white">Pricing</a></li>
				</ul>
			</div>

			<!-- Resources Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-white">Resources</h3>
				<ul class="space-y-6">
					<li><a href="/" class="text-gray-400 transition-colors hover:text-white">Blog</a></li>
					<li><a href="/" class="text-gray-400 transition-colors hover:text-white">API Docs</a></li>
				</ul>
			</div>

			<!-- Company Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-white">Company</h3>
				<ul class="space-y-6">
					<li>
						<a href="/" class="text-gray-400 transition-colors hover:text-white">Contact Us</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

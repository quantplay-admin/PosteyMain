<script>
	import Icon from '../../atoms/Icon.svelte';
</script>

<footer class="mb-8 border-t border-[#3A3A3A] bg-black px-10 py-26 text-white">
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-20 lg:grid-cols-2">
		<!-- Left section -->
		<div class="flex flex-col gap-8">
			<!-- Logo -->
			<div class="flex items-center gap-3">
				<img src="/apple-touch-transparent-icon.png" alt="Postey.ai" class="h-12 w-12" />
				<span class="text-2xl font-bold">Postey</span>
			</div>

			<!-- Social Icons -->
			<div class="flex gap-6">
				<!-- Google -->
				<Icon name="google" family="flat-color-icons" class="text-xl" />

				<!-- X/Twitter -->
				<Icon name="new-twitter" family="hugeicons" class="text-xl" />

				<!-- LinkedIn -->
				<Icon name="linkedin" family="skill-icons" class="text-xl" />

				<!-- Instagram -->
				<Icon name="instagram" family="skill-icons" class="text-xl" />
			</div>
		</div>

		<!-- Right section -->
		<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
			<!-- Product Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-white">Product</h3>
				<ul class="space-y-6">
					<li><a href="#" class="text-gray-400 transition-colors hover:text-white">Features</a></li>
					<li><a href="#" class="text-gray-400 transition-colors hover:text-white">Roadmap</a></li>
					<li><a href="#" class="text-gray-400 transition-colors hover:text-white">Pricing</a></li>
					<li>
						<a href="#" class="text-gray-400 transition-colors hover:text-white">Integrations</a>
					</li>
				</ul>
			</div>

			<!-- Resources Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-white">Resources</h3>
				<ul class="space-y-6">
					<li><a href="#" class="text-gray-400 transition-colors hover:text-white">Blog</a></li>
					<li>
						<a href="#" class="text-gray-400 transition-colors hover:text-white">Help Center</a>
					</li>
					<li>
						<a href="#" class="text-gray-400 transition-colors hover:text-white">Templates</a>
					</li>
					<li><a href="#" class="text-gray-400 transition-colors hover:text-white">API Docs</a></li>
				</ul>
			</div>

			<!-- Company Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-white">Company</h3>
				<ul class="space-y-6">
					<li><a href="#" class="text-gray-400 transition-colors hover:text-white">About Us</a></li>
					<li><a href="#" class="text-gray-400 transition-colors hover:text-white">Careers</a></li>
					<li>
						<a href="#" class="text-gray-400 transition-colors hover:text-white">Press & Media</a>
					</li>
					<li>
						<a href="#" class="text-gray-400 transition-colors hover:text-white">Contact Us</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

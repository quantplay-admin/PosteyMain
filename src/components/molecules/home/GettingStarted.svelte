<script>
	import Icon from '../../atoms/Icon.svelte';
</script>

<div class="flex items-center gap-6">
	<p class="text-xl text-gray-500">Sign up or log in with</p>

	<button
		class="focus:ring-opacity-50 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 transition-all duration-200 hover:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		aria-label="Sign in with Google"
	>
		<Icon name="google" family="flat-color-icons" class="text-xl" />
	</button>

	<button
		class="focus:ring-opacity-50 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 transition-all duration-200 hover:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		aria-label="Sign in with Email"
	>
		<Icon name="mail" family="lucide" class="text-xl text-gray-300" />
	</button>
</div>

<style>
	button:active {
		transform: scale(0.95);
	}
</style>

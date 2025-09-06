<script>
	import Icon from '../../atoms/Icon.svelte';
</script>

<div class="flex items-center gap-10">
	<p class="description text-xl text-gray-500">Sign up or log in with</p>

	<div
		class="h-12 w-12 rounded-xl bg-gradient-to-tr from-[#b5b5b5] to-[#222222] p-[0.5px] hover:bg-gradient-to-tl"
	>
		<button
			class="flex h-full w-full items-center justify-center rounded-xl bg-[#000000]"
			aria-label="Sign in with Google"
		>
			<Icon name="google" family="flat-color-icons" class="text-xl" />
		</button>
	</div>

	<div
		class="h-12 w-12 rounded-xl bg-gradient-to-tr from-[#b5b5b5] to-[#222222] p-[0.5px] hover:bg-gradient-to-tl"
	>
		<button
			class="flex h-full w-full items-center justify-center rounded-xl bg-[#000000]"
			aria-label="Sign in with Email"
		>
			<Icon name="mail" family="lucide" class="text-xl text-gray-300" />
		</button>
	</div>
</div>

<style>
	button:active {
		transform: scale(0.95);
	}
</style>

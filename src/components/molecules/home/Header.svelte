<script>
	import { goto } from '$app/navigation';
	import { textInScroll } from '$lib/actions/gsaptTextAnimations';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '../../atoms/Icon.svelte';

	onMount(() => {
		['#docs', '#pricing', '#contact', '#btn'].forEach((item, index) => {
			textInScroll({ target: item, y: -100 * index });
		});
	});

	let sidebarOpen = $state(false);

	// Close sidebar when clicking on a link
	function closeSidebar() {
		sidebarOpen = false;
		// Re-enable body scroll
		document.body.style.overflow = '';
	}

	// Function to open sidebar and prevent body scroll
	function openSidebar() {
		sidebarOpen = true;
		// Prevent body scroll when sidebar is open
		document.body.style.overflow = 'hidden';
	}

	// Clean up on component destroy
	onMount(() => {
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<header
	class="heading flex h-20 w-full items-center justify-between bg-[#000000] px-10 text-[#FFFFFF]"
>
	<div class="z-50 flex items-center">
		<img src="/apple-touch-transparent-icon.png" alt="Postey.ai" class="h-20 w-18" />
		<span class="text-2xl font-medium"> Postey </span>
	</div>

	<!-- Desktop Navigation -->
	<div class="hidden items-center gap-20 md:flex">
		<div class="flex gap-8 font-medium text-[#FFFFFF]">
			<a id="docs" class="transition-colors hover:text-blue-500" href="/docs">Resources</a>
			<a id="pricing" class="transition-colors hover:text-blue-500" href="/pricing">Pricing</a>
			<a id="contact" class="transition-colors hover:text-blue-500" href="mailto:hello@postey.ai"
				>Contact</a
			>
		</div>

		<button
			id="btn"
			onclick={() => goto('/waitlist')}
			class="cursor-pointer rounded-xl bg-[#1D4ED8] px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-600"
			>Get Started</button
		>
	</div>

	<!-- Mobile Menu Button -->
	{#if !sidebarOpen}
		<button
			onclick={openSidebar}
			class="text-whiteflex relative z-50 min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-3 transition-colors md:hidden"
			aria-label="Open menu"
		>
			<Icon name="menu" family="lucide" class="text-xl" />
		</button>
	{/if}

	<!-- Mobile Sidebar Overlay and Menu -->
	{#if sidebarOpen}
		<!-- Backdrop Overlay -->
		<div
			class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
			onclick={closeSidebar}
			onkeydown={(e) => e.key === 'Escape' && closeSidebar()}
			role="button"
			tabindex="0"
			aria-label="Close menu"
			transition:slide={{ duration: 300, axis: 'x' }}
		></div>

		<!-- Sidebar Menu -->
		<div
			class="fixed top-0 bottom-0 left-0 z-50 h-screen w-80 max-w-[85vw] overflow-y-auto border border-[#000] bg-[#000000] shadow-2xl md:hidden"
			transition:slide={{ duration: 300, axis: 'x' }}
		>
			<!-- Sidebar Header -->
			<div class="flex items-center justify-between border-b border-gray-800 p-6">
				<div class="flex items-center">
					<img src="/apple-touch-transparent-icon.png" alt="Postey.ai" class="h-10 w-9" />
					<span class="ml-2 text-xl font-medium text-white"> Postey </span>
				</div>
				<button
					onclick={closeSidebar}
					class="rounded-md p-2 text-gray-400 transition-colors hover:text-white"
					aria-label="Close menu"
				>
					<Icon name="x" family="lucide" class="text-lg" />
				</button>
			</div>

			<!-- Navigation Links -->
			<nav class="flex flex-col space-y-6 p-6">
				<!-- Main Navigation -->
				<div class="space-y-4">
					<div class="space-y-3">
						<a
							href="/docs"
							onclick={closeSidebar}
							class="group flex items-center space-x-3 rounded-lg p-3 text-white transition-all duration-200 hover:text-blue-500"
						>
							<span class="font-medium">Resources</span>
						</a>

						<a
							href="/pricing"
							onclick={closeSidebar}
							class="group flex items-center space-x-3 rounded-lg p-3 text-white transition-all duration-200 hover:text-blue-500"
						>
							<span class="font-medium">Pricing</span>
						</a>

						<a
							href="mailto:hello@postey.ai"
							onclick={closeSidebar}
							class="group flex items-center space-x-3 rounded-lg p-3 text-white transition-all duration-200 hover:text-blue-500"
						>
							<span class="font-medium">Contact</span>
						</a>
					</div>
				</div>
			</nav>

			<!-- Footer Text -->
			<div
				class="absolute right-0 bottom-0 left-0 flex flex-col items-center gap-2 bg-[#000000] p-6 text-center"
			>
				<!-- Call to Action -->
				<button
					onclick={() => {
						closeSidebar();
						goto('/waitlist');
					}}
					class="mx-auto flex w-8/12 cursor-pointer items-center justify-center space-x-2 rounded-xl bg-[#1D4ED8] px-6 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
				>
					<Icon name="arrow-right" family="lucide" class="text-lg" />
					<span>Get Started</span>
				</button>

				<p class="text-sm text-gray-500">© 2024 Postey.ai</p>
			</div>
		</div>
	{/if}
</header>

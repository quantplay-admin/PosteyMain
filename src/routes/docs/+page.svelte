<script lang="ts">
	import Icon from "../../components/atoms/Icon.svelte";
	import BlogFooter from "../../components/molecules/content/blog-elements/BlogFooter.svelte";

	

	const features: Array<{ icon: string; title: string; description: string }> = [
		{
			icon: '✍️',
			title: 'AI-Powered Writing',
			description:
				'Generate beautiful poetry and creative content with advanced AI assistance and intelligent suggestions.'
		},
		{
			icon: '📚',
			title: 'Post Scheduling',
			description:
				'Schedule and publish your creative content at optimal times to maximize engagement and reach.'
		},
		{
			icon: '🎨',
			title: 'Real-Time Collaboration',
			description:
				'Work together with others in real-time, making it easy to brainstorm and create together.'
		},
		{
			icon: '⚡',
			title: 'Team Management',
			description:
				'Organize and manage your creative team with role-based permissions and collaborative workflows.'
		}
	];

	$effect(() => {
		function handleScroll() {
			if (!window) return;
			let header = document.getElementById('header');
			if (window?.scrollY >= 150) {
				header?.classList.add('border-b', 'border-gray-200', 'sticky', 'top-0');
			} else {
				header?.classList.remove('border-b', 'border-gray-200', 'sticky', 'top-0');
			}
		}

		window.addEventListener('scroll', handleScroll, true);
		return () => {
			window.removeEventListener('scroll', handleScroll, true);
		};
	});
</script>

<svelte:head>
	<title>Poesty.ai Documentation</title>
	<meta
		name="description"
		content="AI-powered poetry and creative writing platform documentation"
	/>
</svelte:head>

<div class="w-full text-gray-800">
	<div class="min-h-screen bg-white">
		<!-- Header -->
		<header id="header" class="z-50 flex items-center justify-between bg-gray-50 px-10 py-4">
			<a href="/home" class="flex items-center gap-3">
				<img src="/apple-touch-icon.png" alt="Poesty.ai" class="h-8 w-8" />
				<span class="text-xl font-semibold"> Poesty.ai </span>
			</a>

			<div class="flex items-center gap-4">
				<nav class="hidden items-center gap-6 md:flex">
					<div class="flex items-center gap-3">
						<a
							href="https://twitter.com/poestyai"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center"
						>
							<Icon name="new-twitter" family="hugeicons" class="text-lg" />
						</a>
						<a
							href="https://instagram.com/poestyai"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center"
						>
							<Icon name="instagram" family="skill-icons" class="text-lg" />
						</a>
						<a
							href="https://linkedin.com/company/poestyai"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center"
						>
							<Icon name="linkedin" family="skill-icons" class="text-lg" />
						</a>
					</div>
				</nav>
			</div>
		</header>

		<!-- Hero Section -->
		<main class="relative">
			<div class="relative mx-auto max-w-7xl px-10 py-20">
				<div class="grid items-center gap-12 lg:grid-cols-2">
					<div class="space-y-8">
						<div>
							<h1 class="text-4xl leading-tight font-bold md:text-5xl">
								<span
									class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
								>
									Poesty.ai
								</span>
							</h1>
							<h2 class="mt-2 text-3xl font-bold md:text-4xl">
								AI-Powered Creative Writing Platform
							</h2>
							<p class="mt-4 max-w-xl text-xl text-gray-500">
								Transform your ideas into beautiful poetry and creative content with our advanced AI
								assistant. From inspiration to publication in minutes.
							</p>
						</div>

						<div class="flex flex-wrap gap-4">
							<a
								href="/docs/getting-started"
								class="transform rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
							>
								Get Started
							</a>
						</div>
					</div>

					<!-- Right side - Decorative Element -->
					<div class="hidden justify-center lg:flex">
						<div class="relative">
							<div
								class="h-80 w-80 rotate-6 transform rounded-3xl bg-gradient-to-br from-blue-400/20 to-purple-600/20 shadow-2xl"
							></div>
							<div
								class="absolute inset-0 h-80 w-80 -rotate-6 transform rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-600/20 shadow-2xl"
							></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="max-w-xs rounded-2xl bg-white p-8 shadow-xl">
									<div class="mb-4 flex items-center gap-3">
										<div
											class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
										></div>
										<span class="font-semibold">AI-Powered Content Management</span>
									</div>
									<p class="text-text-main text-sm italic dark:text-gray-400">
										"Creating poetry that captures the essence of moonlight dancing on water..."
									</p>
									<div class="mt-4 space-y-2">
										<div class="h-2 animate-pulse rounded bg-gray-200"></div>
										<div class="h-2 w-3/4 animate-pulse rounded bg-gray-200"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>

		<!-- Features Section -->
		<section class="bg-gray-50 px-10 py-20">
			<div class="mx-auto max-w-7xl">
				<div class="mb-16 text-center">
					<h3 class="mb-4 text-3xl font-bold md:text-4xl">
						Everything you need for <span class="text-blue-600">creative writing</span>
					</h3>
					<p class="mx-auto max-w-3xl text-xl text-gray-600">
						Powerful tools and features designed to enhance your creative process and bring your
						ideas to life
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{#each features as feature}
						<div
							class="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						>
							<div class="mb-4 text-4xl">{feature.icon}</div>
							<h4 class="mb-3 text-xl font-semibold">{feature.title}</h4>
							<p class="text-gray-600">{feature.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Footer -->
		<BlogFooter />
	</div>
</div>

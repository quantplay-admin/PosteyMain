<script lang="ts">
	import BlogFooter from '../../components/molecules/content/blog-elements/BlogFooter.svelte';
	import BlogHeader from '../../components/molecules/content/blog-elements/BlogHeader.svelte';


	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { posts, error } = $derived(data);

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Poesty.ai Blog - Best Resources on Social Media Marketing</title>
	<meta name="description" content="Read our latest blog posts" />
</svelte:head>

<div class="w-full bg-white">
	<BlogHeader />
	<div class="flex flex-col items-center justify-center gap-2 px-4 text-gray-700">
		<h1 class="text-2xl font-semibold">Grow on social media faster with Poesty.ai</h1>
		<p class="text-md">
			Unlock the full potential of your social media presence with our AI-driven insights and
			strategies.
		</p>
	</div>
	{#if error}
		<div class="mb-8 rounded-lg border border-red-200 bg-red-50 p-4">
			<p class="text-red-800">Error loading blog posts: {error}</p>
		</div>
	{/if}

	<div class="mx-auto mt-10 grid max-w-7xl gap-8 p-6 md:grid-cols-3">
		{#each posts as post (post._id)}
			<article
				class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
			>
				<a href="/blog/{post.slug.current}" class="block">
					{#if post.mainImage}
						<img
							src={post.mainImage.asset.url}
							alt={post.mainImage.alt || post.title}
							class="h-72 w-full object-cover transition-transform hover:scale-105"
						/>
					{/if}
				</a>

				<div class="p-6">
					<div class="mb-4 flex items-center justify-between text-sm text-gray-500">
						<div class="flex items-center space-x-2">
							{#if post.author}
								{#if post.author.image}
									<img
										src={post.author.image}
										alt={post.author.name || 'Author'}
										class="h-6 w-6 rounded-full"
									/>
								{/if}
								<span class="text-gray-600">
									{post.author.name || 'Unknown Author'}
								</span>
							{:else}
								<span class="text-gray-600">Unknown Author</span>
							{/if}
						</div>

						<time class="text-gray-600" datetime={post.publishedAt}>
							{formatDate(post.publishedAt)}
						</time>
					</div>
					<h2 class="mb-2 text-xl font-semibold text-gray-800">
						<a
							href="/blog/{post.slug.current}"
							class="text-lg text-gray-600 transition-colors hover:text-blue-400"
						>
							{post.title}
						</a>
					</h2>

					{#if post.shortDescription}
						<p class="mb-2 text-sm leading-7 font-light text-gray-600">
							{post.shortDescription.length > 400
								? post.shortDescription.slice(0, 400) + '...'
								: post.shortDescription}
						</p>
					{/if}

					{#if post.excerpt}
						<p class="mb-4 line-clamp-3 text-gray-600">{post.excerpt}</p>
					{/if}

					{#if post.categories && post.categories.length > 0}
						<div class="mb-4 flex flex-wrap gap-2">
							{#each post.categories as category}
								<span class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800">
									{category.title}
								</span>
							{/each}
						</div>
					{/if}
				</div>
			</article>
		{:else}
			<div class="col-span-full text-center py-12">
				<p class="text-gray-600 text-lg">No blog posts found.</p>
				<p class="text-gray-500 text-sm mt-2">Check back later for new content!</p>
			</div>
		{/each}
	</div>
	<BlogFooter />
</div>

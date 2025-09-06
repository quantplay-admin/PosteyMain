<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import Icon from '../../../components/atoms/Icon.svelte';
	import BlogCard from '../../../components/molecules/content/blog-elements/BlogCard.svelte';
	import BlogFooter from '../../../components/molecules/content/blog-elements/BlogFooter.svelte';
	import BlogHeader from '../../../components/molecules/content/blog-elements/BlogHeader.svelte';
	import PortableTextRenderer from '../../../components/molecules/PortableTextRenderer.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { post } = $derived(data);
	let { relatedPosts } = $derived(data);

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	let isCopied = $state(false);
	const encodedPostUrl = $derived(browser ? encodeURIComponent(page.url.href) : '');

	function handleCopyUrl() {
		if (!browser) return;
		if (!navigator.clipboard) {
			console.error('Clipboard API not available');
			return;
		}
		navigator.clipboard
			.writeText(page.url.href)
			.then(() => {
				isCopied = true;
				setTimeout(() => {
					isCopied = false;
				}, 2000);
			})
			.catch((error) => {
				console.error('Error copying URL:', error);
			});
	}
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.excerpt || `Read ${post.title} on our blog`} />
</svelte:head>

<article class="w-full bg-white">
	<BlogHeader />
	<main class="container mx-auto -mt-8 max-w-4xl px-4">
		<h1 class="mb-4 text-2xl font-bold text-gray-800">{post.title}</h1>

		<div class="mb-4 flex flex-col items-start text-gray-600">
			{#if post.author}
				<div class="flex items-center space-x-2">
					{#if post.author.image}
						<img src={post.author.image} alt={post.author.name} class="h-8 w-8 rounded-full" />
					{/if}
					<span>By {post.author.name}</span>
				</div>
			{/if}

			<div class="ml-10 flex items-center gap-2">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`https://twitter.com/intent/tweet?url=${encodedPostUrl}`}
					aria-label="Share on Twitter"
				>
					<Icon name="new-twitter" family="hugeicons" class="text-base" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`https://www.linkedin.com/shareArticle?url=${encodedPostUrl}`}
					aria-label="Share on LinkedIn"
				>
					<Icon name="linkedin" family="skill-icons" class="text-base" />
				</a>

				<button type="button" onclick={handleCopyUrl} aria-label="Copy link to clipboard">
					<Icon name="link" family="lucide" class="text-base" />
					{#if isCopied}
						<span class="items-center text-sm text-gray-500">Url Copied!</span>
					{/if}
				</button>
			</div>
		</div>

		{#if post.categories && post.categories.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each post.categories as category (category.slug?.current ?? category.title)}
					<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
						{category.title}
					</span>
				{/each}
			</div>
		{/if}

		{#if post.mainImage?.asset?.url}
			<div class="mb-8">
				<img
					src={post.mainImage.asset.url}
					alt={post.mainImage.alt || post.title}
					class="h-96 w-full rounded-lg object-cover"
					loading="lazy"
				/>
			</div>
		{/if}

		{#if post.excerpt}
			<div class="mb-8 text-xl text-gray-700 italic">
				{post.excerpt}
			</div>
		{/if}

		<div class="prose prose-lg max-w-none">
			{#if post.body && post.body.length > 0}
				<PortableTextRenderer blocks={post.body} />

				{#if relatedPosts?.length}
					<div class="mt-4 mb-4 flex flex-col gap-3">
						<h4 class="text-lg font-bold text-gray-600">You might also like:</h4>
						<div class="mt-1 flex flex-wrap items-center justify-start gap-4">
							{#each relatedPosts as relatedPost}
								<BlogCard
									date={formatDate(relatedPost.publishedAt)}
									image={relatedPost.mainImage?.asset?.url || ''}
									slug={relatedPost.slug.current}
									title={relatedPost.title}
								/>
							{/each}
						</div>
					</div>
				{/if}
			{:else}
				<p class="text-gray-600">No content available for this post.</p>
			{/if}
		</div>
	</main>
	<BlogFooter />
</article>

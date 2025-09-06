<script lang="ts">
	interface Props {
		image: string;
		title: string;
		date: string;
		slug: string;
	}

	let { image, title, date, slug }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={`/blog/${slug}`}
	data-sveltekit-preload-data="hover"
	aria-label={`Read blog post: ${title}`}
	class="block h-fit w-52 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-lg"
>
	<img src={image} alt={title} class="h-36 w-full" loading="lazy" decoding="async" />
	<div class="p-4">
		<h4 class="truncate font-semibold text-gray-800">{title}</h4>
		<p class="mt-2 text-sm text-gray-500">{date}</p>
	</div>
</a>

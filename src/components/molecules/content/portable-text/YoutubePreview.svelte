<script lang="ts">
	interface Props {
		portableText: {
			value: {
				url: string;
			};
		};
	}

	let { portableText }: Props = $props();
	let value = $derived(portableText?.value ?? {});

	function extractVideoId(url: string): string {
		const regex = /(?:youtube\.com(?:[^/]+.+|(?:v|e(?:mbed)?)|.*[?&]v=)|youtu\.be)([^"&?/\s]{11})/;
		const match = url.match(regex);
		return match ? match[1] : '';
	}
</script>

{#if value.url}
	<iframe
		title="YoutubePreview"
		width="100%"
		height="515"
		class="rounded-xl"
		loading="lazy"
		referrerpolicy="strict-origin-when-cross-origin"
		src={`https://www.youtube.com/embed/${extractVideoId(value.url)}`}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	></iframe>
{/if}

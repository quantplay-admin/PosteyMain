<script lang="ts">
	interface Props {
		portableText: {
			value: {
				url: string;
			};
		};
	}
	let { portableText }: Props = $props();
	let { value } = portableText;

	function isVideoFormat(url: string): boolean {
		return /\.(mp4|mkv|webm|mov|m4v)$/i.test(url);
	}
</script>

{#if value.url && isVideoFormat(value.url)}
	<video preload="metadata" playsinline controls class="mt-10 rounded-xl">
		<track kind="captions" />
		<source src={value.url} type="video/{value.url.split('.').pop()}" />
		Your browser does not support the video tag.
	</video>
{/if}

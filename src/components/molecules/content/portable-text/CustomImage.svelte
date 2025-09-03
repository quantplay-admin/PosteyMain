<script lang="ts">
	interface Props {
		portableText: {
			value: {
				url: string;
				asset: {
					url: string;
					alt: string;
					caption: string;
				};
			};
		};
	}

	let { portableText }: Props = $props();
	let value = $derived(portableText?.value ?? {});
</script>

<figure class="my-8">
	<img
		src={value.url || value.asset?.url}
		alt={value.asset?.alt || ''}
		class="h-auto w-full rounded-lg border border-gray-200 shadow"
		loading="lazy"
	/>
	{#if value.url || value.asset?.url}
		<figcaption class="text-text-main mt-2 text-start text-sm italic">
			{value.asset?.caption}
		</figcaption>
	{/if}
</figure>

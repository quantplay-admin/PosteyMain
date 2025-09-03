<script lang="ts">
	import { page } from '$app/stores';

	import type { SidebarItem } from '$lib/sanity/queries';
	import Icon from '../../../atoms/Icon.svelte';
	import ApiLabel from '../portable-text/ApiLabel.svelte';

	interface CollapsableMenuProps {
		items: SidebarItem[];
	}

	let { items }: CollapsableMenuProps = $props();
	const slug = $derived($page.params.slug);

	let openedMenu = $state<Record<number, boolean>>({});

	let selectedLabel = $state<string | null>(null);

	$effect(() => {
		if (!selectedLabel && items?.length) {
			const matchedItem = items
				.flatMap((i) => i.children ?? [])
				.find((c) => c?.slug?.current === slug);
			selectedLabel = matchedItem?.slug?.current || null;

			if (matchedItem?.slug?.current) {
				selectedLabel = matchedItem.slug.current;
			}
		}
	});
</script>

{#each items as item, idx}
	<div
		class={`flex w-full flex-col gap-2 ${openedMenu[idx] ? 'pb-0' : 'border-b border-gray-200 pb-2'}`}
	>
		<div class="flex w-full items-center justify-between">
			<span class="mt-4 text-sm font-bold text-gray-700">{item.title}</span>
			<button
				aria-expanded={!!openedMenu[idx]}
				aria-controls={`section-${idx}`}
				onclick={() => {
					openedMenu[idx] = !openedMenu[idx];
				}}
			>
				{#if openedMenu[idx]}
					<Icon name="chevron-right" family="lucide" class="text-lg text-gray-600" />
				{:else}
					<Icon name="chevron-down" family="lucide" class="text-lg text-gray-600" />
				{/if}
			</button>
		</div>
		<div class="flex flex-col items-start gap-3">
			{#if !openedMenu[idx]}
				{#each item.children as child}
					<div class="flex items-center gap-2">
						{#if child.docType === 'API_DOC'}
							<ApiLabel label={child.apiType} isActive={selectedLabel === child.slug.current} />
						{/if}
						<a
							href={`/docs/${child.slug.current}`}
							onclick={() => {
								selectedLabel = child.slug.current;
							}}
							class={`text-sm text-[#7b7b81] hover:text-blue-600 ${selectedLabel === child.slug.current ? 'font-semibold text-blue-700' : ''}`}
							data-sveltekit-preload-data="hover">{child.title}</a
						>
					</div>
				{/each}
			{/if}
		</div>
	</div>
{/each}

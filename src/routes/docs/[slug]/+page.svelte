<script lang="ts">
	import Icon from '../../../components/atoms/Icon.svelte';
	import CollapsableMenu from '../../../components/molecules/content/doc-elements/CollapsableMenu.svelte';
	import InputSearchModal from '../../../components/molecules/content/doc-elements/InputSearchModal.svelte';
	import PortableTextRenderer from '../../../components/molecules/PortableTextRenderer.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { sidebarItems, docPage } = $derived(data);

	let isOpen = $state(false);
	let modalRef = $state<HTMLElement | null>(null);

	function onSearch(query: string) {
		if (!query.trim()) return [];

		const normalizedQuery = query.toLowerCase().trim();
		let filteredItems = sidebarItems
			.flatMap((item) => item.children || [])
			.filter(
				(child) =>
					child?.title?.toLowerCase().includes(normalizedQuery) ||
					child?.description?.toLowerCase().includes(normalizedQuery)
			)
			.map((child) => ({
				title: child.title || '',
				description: child.description || '',
				path: child.slug.current || '',
				type: child.docType || '',
				apiType: child.apiType || ''
			}));

		return filteredItems;
	}
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<div class="flex min-h-screen w-full bg-white">
	<div
		class="z-50 h-screen w-[280px] overflow-y-auto scroll-smooth border-r border-gray-200 bg-[#FDFDFD] px-4"
	>
		<a
			href="/home"
			class="sticky top-0 z-50 flex items-center justify-center gap-3 border-b border-gray-200 bg-[#FDFDFD] pt-4 pb-4"
		>
			<img src="/apple-touch-icon.png" alt="Poesty.ai" class="h-8 w-8" />
			<span class="text-lg font-semibold text-gray-600"> Poesty.ai </span>
		</a>

		<div class="flex flex-col items-start justify-start overflow-y-auto">
			<CollapsableMenu items={sidebarItems} />
		</div>
	</div>

	<!-- Rich Text Section -->
	<div class="flex h-screen flex-1 flex-col overflow-y-auto scroll-smooth">
		<header
			id="header"
			class="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4"
		>
			<div class="flex items-center gap-3">
				<button
					onclick={() => (isOpen = true)}
					class="flex w-48 items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-left text-gray-600 hover:border-gray-300 focus:border-blue-500 focus:outline-none"
				>
					<Icon name="search" family="lucide" class="text-lg text-gray-500" />
					Search...
				</button>
			</div>

			<div class="flex items-center gap-4">
				<nav class="hidden items-center gap-6 md:flex">
					<div class="flex items-center gap-6">
						<a
							href="https://twitter.com/poestyai"
							aria-label="Poesty.ai on X (Twitter)"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center"
						>
							<Icon name="new-twitter" family="hugeicons" class="text-lg text-gray-600" />
						</a>

						<a
							href="https://linkedin.com/company/poestyai"
							aria-label="Poesty.ai on LinkedIn"
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
		<div class="flex flex-1 justify-between">
			<div class="ml-10 w-8/12">
				{#if !docPage}
					<div class="text-secondary-bg mt-12 p-6 text-center">
						<Icon name="search" family="lucide" class="text-text-main text-xl" />
						<p class="mb-2 text-lg font-medium">No documentation found</p>
						<p class="text-sm">Start typing to search through docs or ask AI a question</p>
					</div>
				{:else}
					<PortableTextRenderer blocks={docPage.content || []} />
				{/if}
			</div>

			<div class="fixed right-0 z-50 mt-8 h-screen w-[200px] bg-white px-4">
				<div class="flex flex-col items-start justify-start gap-4 border-l border-gray-200 pl-2">
					{#if docPage?.pageOfContent && docPage.pageOfContent.length > 0}
						<span class="text-lg font-semibold text-gray-600">On this page</span>
						{#each docPage.pageOfContent as content (content)}
							<p class="text-sm text-gray-500 hover:text-blue-600">{content}</p>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<InputSearchModal {isOpen} {modalRef} onClose={() => (isOpen = false)} {onSearch} />

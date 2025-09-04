<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Icon from '../../../atoms/Icon.svelte';

	import ApiLabel from '../portable-text/ApiLabel.svelte';

	interface SearchResultItem {
		title: string;
		description: string;
		path: string;
		type: string;
		apiType: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';
	}

	interface Props {
		isOpen: boolean;
		modalRef: HTMLElement | null;
		onClose: () => void;
		onSearch: (query: string) => SearchResultItem[];
	}

	let { isOpen, modalRef, onClose, onSearch }: Props = $props();

	let inputText = $state('');
	let searchedItems = $derived.by(() => onSearch(inputText) || []);
	let selectedIndex = $state(-1);
	let resultsContainer = $state<HTMLElement | null>(null);
	let inputElement = $state<HTMLInputElement | null>(null);

	$effect(() => {
		if (searchedItems.length === 0) {
			selectedIndex = -1;
		} else if (selectedIndex >= searchedItems.length) {
			selectedIndex = searchedItems.length - 1;
		}
	});

	$effect(() => {
		if (isOpen && inputElement) {
			const timeoutId = setTimeout(() => {
				inputElement?.focus();
			}, 100);

			return () => clearTimeout(timeoutId);
		}
	});

	function handleKeydown(e: KeyboardEvent) {
		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				onClose();
				break;

			case 'ArrowDown':
				e.preventDefault();
				if (searchedItems.length > 0) {
					selectedIndex = selectedIndex < searchedItems.length - 1 ? selectedIndex + 1 : 0;
					scrollToSelectedItem();
				}
				break;

			case 'ArrowUp':
				e.preventDefault();
				if (searchedItems.length > 0) {
					selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : searchedItems.length - 1;
					scrollToSelectedItem();
				}
				break;

			case 'Enter':
				e.preventDefault();
				if (selectedIndex >= 0 && selectedIndex < searchedItems.length) {
					// Navigate to the selected item
					const selectedItem = searchedItems[selectedIndex];

					goto(resolve(`/docs/${selectedItem.path}`));
					onClose();
				}
				break;

			default:
				// Allow normal typing for other keys
				break;
		}
	}

	function scrollToSelectedItem() {
		if (!resultsContainer || selectedIndex < 0) return;

		const selectedElement = resultsContainer.children[selectedIndex] as HTMLElement;
		if (selectedElement) {
			selectedElement.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest'
			});
		}
	}
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if isOpen}
	<div
		bind:this={modalRef}
		onclick={onClose}
		onkeydown={handleKeydown}
		class="fixed inset-0 z-[100] flex items-start justify-center bg-black/20 backdrop-blur-xs"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div
			role="button"
			tabindex="0"
			onkeydown={() => {}}
			class="mx-4 mt-20 w-full max-w-2xl"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl">
				<div class="flex items-center border-b border-gray-200 px-4 py-3">
					<div class="flex flex-1 items-center gap-3">
						<Icon name="search" family="lucide" class="text-gray-400" />
						<input
							bind:this={inputElement}
							id="modal-search-input"
							placeholder="Search docs or ask AI a question"
							class="flex-1 border-none bg-transparent text-gray-700 placeholder-gray-400 outline-none"
							autocomplete="off"
							bind:value={inputText}
						/>
					</div>
					<button
						onclick={onClose}
						class="rounded-md p-1 transition-colors hover:bg-gray-100"
						aria-label="Close modal"
					>
						<Icon name="x" family="lucide" class="text-gray-600" />
					</button>
				</div>

				{#if inputText.trim() === ''}
					<div class="p-6 text-center text-gray-500">
						<Icon name="search" family="lucide" class="mx-auto mb-4 h-12 w-12 text-gray-300" />
						<p class="mb-2 text-lg font-medium">Search documentation</p>
						<p class="text-sm">Start typing to search through docs or ask AI a question</p>
					</div>
				{:else if searchedItems.length === 0}
					<div class="p-6 text-center text-gray-500">
						<p class="mb-2 text-lg font-medium">No results found</p>
						<p class="text-sm">Try adjusting your search terms</p>
					</div>
				{:else}
					<div class="max-h-96 overflow-y-auto" bind:this={resultsContainer}>
						<!-- Search results -->
						<div class="divide-y divide-gray-100">
							{#each searchedItems as item, index}
								<a
									href="/docs/{item.path}"
									class="block cursor-pointer p-4 transition-colors {selectedIndex === index
										? 'border-l-4 border-l-blue-500 bg-blue-50'
										: 'hover:bg-gray-50'}"
									onmouseenter={() => (selectedIndex = index)}
									onclick={onClose}
								>
									<div class="flex items-start gap-3">
										{#if item.type === 'API_DOC' && item.apiType}
											<div class="mt-0.5 flex-shrink-0">
												<ApiLabel isActive={selectedIndex === index} label={item.apiType} />
											</div>
										{/if}

										<div class="min-w-0 flex-1">
											<h3 class="mb-1 truncate font-medium text-gray-900">{item.title}</h3>
											<p class="mb-2 line-clamp-2 text-sm text-gray-600">
												{item.description || 'API endpoint documentation'}
											</p>
											<div class="flex items-center gap-2">
												<span class="text-xs text-gray-400">
													{#if item.type === 'API_DOC'}
														API Documentation
													{:else}
														User Guide
													{/if}
												</span>
												<span class="text-xs text-gray-300">•</span>
												<span class="text-xs text-gray-400">/docs/{item.path}</span>
											</div>
										</div>
									</div>
								</a>
							{/each}
						</div>
					</div>
				{/if}

				<div class="border-t border-gray-200 bg-gray-50 px-4 py-3">
					<div class="flex items-center justify-between text-xs text-gray-500">
						<div class="flex items-center gap-4">
							<span class="flex items-center gap-1">
								<kbd class="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">↑</kbd>
								<kbd class="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">↓</kbd>
								Navigate
							</span>
							<span class="flex items-center gap-1">
								<kbd class="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">⏎</kbd>
								Select
							</span>
							<span class="flex items-center gap-1">
								<kbd class="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">ESC</kbd>
								Close
							</span>
						</div>
						<span class="flex items-center gap-1">
							Powered by <strong>poesty.ai</strong>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

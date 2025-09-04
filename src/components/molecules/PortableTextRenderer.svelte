<script lang="ts">
	import type { PortableTextBlock } from '$lib/sanity/queries';
	import { PortableText } from '@portabletext/svelte';
	import HeadingComponents from './content/portable-text/HeadingComponents.svelte';
	import BlockComponents from './content/portable-text/BlockComponents.svelte';
	import ListItems from './content/portable-text/ListItems.svelte';
	import Callout from './content/portable-text/Callout.svelte';
	import CodeSwitcher from './content/portable-text/CodeSwitcher.svelte';
	import Table from './content/portable-text/Table.svelte';
	import CustomImage from './content/portable-text/CustomImage.svelte';
	import YoutubePreview from './content/portable-text/YoutubePreview.svelte';
	import FilePreview from './content/portable-text/FilePreview.svelte';
	import CodeBlock from './content/portable-text/CodeBlock.svelte';

	type Props = {
		blocks: PortableTextBlock[];
	};

	let { blocks }: Props = $props();

	// Configure portable text components
	const components = {
		block: {
			h1: HeadingComponents,
			h2: HeadingComponents,
			h3: HeadingComponents,
			h4: HeadingComponents,
			code: CodeBlock,
			normal: BlockComponents,
			listItem: ListItems
		},
		types: {
			callout: Callout,
			code: CodeBlock,
			codeBlock: CodeSwitcher,
			sizeChart: Table,
			image: CustomImage,
			youtube: YoutubePreview,
			file: FilePreview
		}
	};
</script>

<div class="portable-text-content text-gray-600">
	<PortableText value={blocks || []} {components} />
</div>

<style>
	:global(.portable-text-content) {
		line-height: 1.625;
		color: #374151;
		margin: 0;
		padding: 0;
	}

	:global(.portable-text-content h1) {
		margin-top: 1rem;
		font-size: 1.575rem;
		font-weight: 600;
		color: #374151;
	}

	:global(.portable-text-content h2) {
		margin-top: 1.2rem;
		font-size: 1.25rem;
		font-weight: 600;
		color: #374151;
	}

	:global(.portable-text-content h3) {
		margin-top: 1rem;

		font-size: 1rem;
		font-weight: 600;
		color: #374151;
	}

	:global(.portable-text-content h4) {
		margin-top: 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: #374151;
	}

	:global(.portable-text-content p) {
		line-height: 1.625;
	}

	:global(.portable-text-content ul) {
		list-style-position: inside;
		list-style-type: disc;
	}

	:global(.portable-text-content ul li) {
		margin-bottom: 0.5rem;
	}

	:global(.portable-text-content ol) {
		list-style-position: inside;
		list-style-type: decimal;
	}

	:global(.portable-text-content li) {
		line-height: 1.625;
	}

	:global(.portable-text-content blockquote) {
		margin-top: 1rem;
		border-left: 4px solid #d1d5db;
		background-color: #f9fafb;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1rem;
		color: #374151;
		font-style: italic;
	}

	:global(.portable-text-content strong) {
		font-weight: 600;
	}

	:global(.portable-text-content em) {
		font-style: italic;
	}
</style>

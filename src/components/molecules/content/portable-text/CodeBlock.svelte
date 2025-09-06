<script lang="ts">
	interface Props {
		portableText: {
			value: {
				filename?: string;
				code?: string;
				language?: string;
			};
		};
	}

	let { portableText }: Props = $props();
	let { value } = portableText || {};
	let { code, language } = value || {};

	let highlightedHtml = $state<string>('');
	let isHighlighting = $state(false);
	let highlightError = $state<string | null>(null);

	// Svelte action for safely updating innerHTML
	function updateHtml(node: HTMLElement, html: string) {
		function update(newHtml: string) {
			if (newHtml) {
				node.innerHTML = newHtml;
			}
		}

		update(html);

		return {
			update
		};
	}

	async function highlightCode() {
		if (!code || !language) {
			highlightedHtml = '';
			return;
		}

		isHighlighting = true;
		highlightError = null;

		try {
			const { codeToHtml } = await import('shiki');
			const result = await codeToHtml(code, {
				lang: language,
				theme: 'github-dark-default',
				transformers: [
					{
						pre(node) {
							const existing = node.properties.class ? String(node.properties.class) : '';
							node.properties.class = [existing, 'shiki-pre'].filter(Boolean).join(' ');
						}
					}
				]
			});

			highlightedHtml = result;
		} catch (error) {
			console.error('Error highlighting code:', error);
			highlightError = error instanceof Error ? error.message : 'Unknown error';
			highlightedHtml = '';
		} finally {
			isHighlighting = false;
		}
	}

	$effect(() => {
		highlightCode();
	});
</script>

<div class="overflow-hidden rounded-lg border">
	<div class="overflow-x-auto">
		{#if highlightedHtml}
			<div use:updateHtml={highlightedHtml}></div>
		{:else if isHighlighting}
			<div class="bg-gray-800 p-4 text-sm text-gray-300">Highlighting code...</div>
		{:else if !code}
			<pre class="overflow-x-auto bg-gray-800 p-4 text-gray-300"><code class="font-mono text-sm"
					>No code provided</code
				></pre>
		{:else}
			<pre class="overflow-x-auto bg-gray-800 p-4 text-gray-300"><code class="font-mono text-sm"
					>{code}</code
				></pre>
		{/if}
	</div>

	{#if highlightError}
		<div class="border-t border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
			Failed to highlight code: {highlightError}
		</div>
	{/if}
</div>

<style>
	/* Style the Shiki-generated pre element */
	:global(.shiki-pre) {
		margin: 0 !important;
		padding: 1rem !important;
		overflow-x: auto !important;
		border-radius: 0 !important;
	}

	/* Ensure proper scrolling */
	:global(.shiki) {
		overflow-x: auto;
	}

	/* Preserve Shiki theme backgrounds */
	:global(.shiki pre) {
		margin: 0;
		border-radius: 0;
	}
</style>

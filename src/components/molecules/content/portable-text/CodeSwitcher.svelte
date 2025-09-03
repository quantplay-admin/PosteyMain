<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';

	interface Codes {
		language: string;
		code: string;
	}
	interface Props {
		portableText: {
			value: {
				title: string;
				codes: Codes[];
			};
		};
	}

	let { portableText }: Props = $props();
	let value = $derived(portableText?.value ?? {});
	let activeLanguage = $state('');

	function setLang(lang: string) {
		activeLanguage = lang;
	}

	$effect(() => {
		if (value.codes.length > 0) {
			activeLanguage = value.codes[0].language;
		}
	});
</script>

<div class="overflow-hidden rounded-md border border-gray-700 bg-[#111]">
	<div class="border-b border-gray-700 px-4 py-3 text-sm font-medium text-white">
		{value.title}
	</div>

	<!-- Language Tabs -->
	<div class="flex space-x-2 overflow-x-auto border-b border-gray-700 bg-black/40 px-4 py-3">
		{#each value.codes as snippet}
			<button
				class={`rounded-md px-3 py-1 text-sm font-medium transition 
					${
						activeLanguage === snippet.language
							? 'bg-gray-800 text-white'
							: 'text-gray-400 hover:bg-gray-700 hover:text-white'
					}`}
				onclick={() => setLang(snippet.language)}
			>
				{snippet.language}
			</button>
		{/each}
	</div>

	<!-- Active Code Block -->
	<div class="p-4">
		{#each value.codes as snippet (snippet.language)}
			{#if snippet.language === activeLanguage}
				<CodeBlock portableText={{ value: { language: snippet.language, code: snippet.code } }} />
			{/if}
		{/each}
	</div>
</div>

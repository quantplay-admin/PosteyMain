<script lang="ts">
	interface Props {
		portableText: {
			value: {
				listItem: 'bullet' | 'number';
				children: Array<{
					text?: string;
					marks?: Array<string>;
				}>;
			};
		};
	}

	let { portableText }: Props = $props();
	let { value } = portableText;

	let { listItem, children } = value;
</script>

{#if value && children && children.length > 0}
	{#if listItem === 'number'}
		<ol class="list-decimal pl-5">
			{#each children as child}
				<li class="text-text-main">
					{#if child.marks?.includes('strong')}
						<strong>{child.text || ''}</strong>
					{:else}
						{child.text || ''}
					{/if}
				</li>
			{/each}
		</ol>
	{:else}
		<ul class="list-disc pl-5">
			{#each children as child}
				<li class="text-text-main">
					{#if child.marks?.includes('strong')}
						<strong>{child.text || ''}</strong>
					{:else}
						{child.text || ''}
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
{/if}

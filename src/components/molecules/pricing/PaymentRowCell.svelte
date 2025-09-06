<script lang="ts">
	import Icon from '../../atoms/Icon.svelte';

	interface TRowCell {
		isIcon: boolean;
		title: string | number;
		name?: string;
		family?: string;
		isCheck?: boolean | undefined;
	}

	let { isIcon, title, family, name, isCheck }: TRowCell = $props();
</script>

<div class="text-text-main flex items-center gap-2">
	{#if isIcon}
		<Icon name={name ?? ''} family={family ?? ''} class="text-lg" />
	{:else if isCheck !== undefined}
		{#if isCheck}
			<div
				class="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-r from-[#7795E8] to-[#1D4ED8]"
			>
				<Icon name="check" family="lucide" />
			</div>
		{:else}
			<div class="flex h-6 w-6 items-center justify-center rounded bg-[#333333]">
				<Icon name="x" family="lucide" />
			</div>
		{/if}
	{/if}
	<span>{title}</span>
</div>

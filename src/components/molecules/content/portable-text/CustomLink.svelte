<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
		value: {
			href: string;
			blank?: boolean;
		};
	};

	let { children, value }: Props = $props();

	const isExternal = /^(https?:)?\/\//i.test(value.href);
	const target = value.blank || isExternal ? '_blank' : undefined;
	const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
</script>

<a
	href={value.href}
	{target}
	{rel}
	class="text-blue-600 underline transition-colors hover:text-blue-800"
>
	{@render children()}
</a>

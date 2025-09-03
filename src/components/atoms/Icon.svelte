<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface IconProps extends HTMLAttributes<HTMLSpanElement> {
		name: string;
		family: string;
	}

	let { name, family, class: className, ...props }: IconProps = $props();
</script>

<span class={[`icon--${family} icon--${family}--${name}`, className]} {...props}></span>

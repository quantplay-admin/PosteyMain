<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface DivideTProps extends HTMLAttributes<HTMLElement> {
		direction: 'col' | 'row';
		width?: number;
		height?: number;
		type?: 'hr' | 'divide';
	}

	let {
		direction,
		width = direction === 'row' ? undefined : 1,
		height = direction === 'row' ? 1 : 500,
		class: className,
		type = 'divide'
	}: DivideTProps = $props();

	// Background gradient configurations
	const gradientConfigs = {
		hr: 'from-[#FFFFFF]/5 via-[#7795E8]/15 to-[#FFFFFF]/5',
		divide: 'from-[#1E1E1E] via-[#bdbdbd] to-[#1E1E1E]'
	} as const;

	// Gradient direction mapping
	const getGradientDirection = (direction: 'col' | 'row', type: 'hr' | 'divide'): string => {
		if (direction === 'row' && type === 'divide') return 'r';
		if (direction === 'col' && type === 'divide') return 't';
		return 'r';
	};

	// Computed styles
	const gradientDirection = getGradientDirection(direction, type);
	const backgroundClasses = `bg-gradient-to-${gradientDirection} ${gradientConfigs[type]}`;
	const dimensionStyles = `width: ${width ? `${width}px` : '100%'}; height: ${height ? `${height}px` : '100%'};`;
</script>

<div
	class={`${backgroundClasses} ${className}`}
	style={dimensionStyles}
	role="separator"
	aria-orientation={direction === 'row' ? 'horizontal' : 'vertical'}
></div>

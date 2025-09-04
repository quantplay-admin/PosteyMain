<script lang="ts">
	interface DivideTProps {
		direction: 'col' | 'row';
		width?: number;
		height?: number;
		className?: string;
	}
	let {
		direction,
		width = direction === 'row' ? undefined : 1,
		height = direction === 'row' ? 1 : 500,
		className = ''
	}: DivideTProps = $props();
</script>

<div
	class={`bg-gradient-to-${direction === 'row' ? 'r' : 'b'} from-[#1c1c1c] via-[#949393] to-[#1E1E1E] ${className}`}
	style={`width: ${width ? `${width}px` : '100%'}; height: ${height ? `${height}px` : '100%'};`}
></div>

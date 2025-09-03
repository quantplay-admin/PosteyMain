<script lang="ts">
	type Props = {
		portableText: {
			value: {
				type?: 'info' | 'warning' | 'error' | 'success';
				title?: string;
				message?: string;
			};
		};
	};

	let { portableText }: Props = $props();

	const typeStyles = {
		info: 'bg-blue-50 border-blue-200 text-blue-800',
		warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
		error: 'bg-red-50 border-red-200 text-red-800',
		success: 'bg-green-50 border-green-200 text-green-800'
	};

	const iconStyles = {
		info: '💡',
		warning: '⚠️',
		error: '❌',
		success: '✅'
	};

	const value = $derived(portableText?.value ?? {});
	const type = $derived((value.type as keyof typeof typeStyles) ?? 'info');
</script>

<div class="my-6 rounded-lg border-l-4 p-4 {typeStyles[type]}">
	<div class="flex items-start space-x-2">
		<span class="text-lg">{iconStyles[type]}</span>
		<div class="flex-1">
			{#if value.title}
				<h4 class="font-semibold">{value.title}</h4>
			{/if}
			{#if value.message}
				<p>{value.message}</p>
			{/if}
		</div>
	</div>
</div>

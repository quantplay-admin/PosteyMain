<script lang="ts">
	type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';

	interface ApiLabelProps {
		label: ApiMethod;
		isActive?: boolean;
	}

	let { label, isActive }: ApiLabelProps = $props();

	const labelInActiveColors: Record<ApiMethod, string> = {
		GET: 'bg-green-200 text-green-800 font-bold',
		POST: 'bg-blue-200 text-blue-800 font-bold',
		PUT: 'bg-yellow-200 text-yellow-800 font-bold',
		DELETE: 'bg-red-200 text-red-800 font-bold',
		PATCH: 'bg-amber-200 text-amber-800 font-bold',
		OPTIONS: 'bg-gray-200 text-gray-800 font-bold'
	};

	const labelActiveColors: Record<ApiMethod, string> = {
		GET: 'bg-green-500 text-white font-bold',
		POST: 'bg-blue-500 text-white font-bold',
		PUT: 'bg-yellow-500 text-white font-bold',
		DELETE: 'bg-red-500 text-white font-bold',
		PATCH: 'bg-amber-600 text-white font-bold',
		OPTIONS: 'bg-gray-500 text-white font-bold'
	};
</script>

<span
	aria-label={`API method: ${label}`}
	class={`inline-flex items-center rounded-xl px-2 py-1 text-xs ${isActive ? labelActiveColors[label] : labelInActiveColors[label]}`}
>
	{label}
</span>

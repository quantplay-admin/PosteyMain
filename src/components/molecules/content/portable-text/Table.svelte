<script lang="ts">
	interface Props {
		portableText: {
			value: {
				rows: Array<{
					cells: Array<string>;
				}>;
			};
		};
	}

	let { portableText }: Props = $props();
	let { value } = portableText;

	let { rows } = value;
</script>

<div class="overflow-x-auto">
	<table class="min-w-full rounded-xl border border-gray-200 shadow-sm">
		<thead class="bg-gray-100">
			{#if rows && rows.length > 0}
				<tr>
					{#each rows[0].cells as cell (cell)}
						<th
							scope="col"
							class="border-b border-gray-200 px-4 py-2 text-left text-sm font-semibold"
						>
							{cell}
						</th>
					{/each}
				</tr>
			{/if}
		</thead>
		<tbody>
			{#each (rows || []).slice(1) as row}
				<tr class="border-b border-gray-200 odd:bg-white even:bg-gray-100">
					{#each row.cells as cell}
						<td class="border-b border-gray-200 px-4 py-2 text-sm">
							{cell}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

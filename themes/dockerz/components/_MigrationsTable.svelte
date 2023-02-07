<script>
	import { migrations } from '$data/migrations.js';
</script>

<table class="table-auto">
	<thead class="">
		<tr>
			<th scope="col" class="text-left text-sm font-medium uppercase tracking-wider"
				>Target Path</th
			>
			<th scope="col" class="text-left text-sm font-medium uppercase tracking-wider"
				>Actions
			</th>
		</tr>
	</thead>
	<tbody>
		{#each migrations as migration}
			<tr>
				<td class="text-sm font-medium lg:text-base">
					{migration.target}
				</td>
				<td class="text-sm lg:text-base">
					{@html migration.actions}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

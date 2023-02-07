<script>
	import { projectStructure } from '$data/structure.js';
</script>

<table class="table-auto">
	<thead>
		<tr>
			<th scope="col" class="text-left text-sm font-medium uppercase tracking-wider">
				File/Folder
			</th>
			<th scope="col" class="text-left text-sm font-medium uppercase tracking-wider">
				Purpose
			</th>
		</tr>
	</thead>
	<tbody>
		{#each projectStructure as f}
			<tr>
				<td class="text-sm font-medium lg:text-base">
					{f.name}
				</td>
				<td class="text-sm lg:text-base">
					{@html f.purpose}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

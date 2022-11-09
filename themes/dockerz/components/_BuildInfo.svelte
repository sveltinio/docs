<script lang="ts">
	import { sveltinVersion, sveltekitVersion, buildTime } from '$config/defaults.js';
	import { formatDate } from '$lib/utils/dates.js';
</script>

<div class="mt-12 pl-6">
	<p class="text-xs font-semibold uppercase text-skin-heading dark:text-skin-heading-dark">
		Build Info
	</p>
</div>
<div class="mt-3">
	<p class="group p-2 pl-6 text-sm font-light text-skin-base dark:text-skin-base-dark">
		Sveltin v{sveltinVersion}
	</p>
	<p class="group p-2 pl-6 text-sm font-light text-skin-base dark:text-skin-base-dark">
		SvelteKit v{sveltekitVersion}
	</p>
	<p class="group p-2 pl-6 text-sm font-light text-skin-base dark:text-skin-base-dark">
		Build Time: {formatDate(new Date(buildTime))}
	</p>
</div>

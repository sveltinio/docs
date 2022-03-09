<script>
	import SearchIcon from '@indaco/svelte-iconoir/icons/SearchIcon.svelte';
</script>

<div class="w-full max-w-lg lg:max-w-xs">
	<label for="search" class="sr-only">Search</label>
	<div class="relative">
		<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
			<SearchIcon class="h-5 w-5 text-skin-input-muted" aria-hidden="true" />
		</div>
		<input
			id="search"
			name="search"
			class="block w-full rounded-md border border-skin-base bg-skin-muted py-2 pl-10 pr-3 leading-5 text-skin-input placeholder-santa focus:border-skin-accent focus:placeholder-oyster focus:outline-none focus:ring-1 focus:ring-oyster dark:border-river dark:bg-skin-dark sm:text-sm"
			placeholder="Search"
			type="search"
		/>
	</div>
</div>

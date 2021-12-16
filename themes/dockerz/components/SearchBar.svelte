<script>
	import DarkModeButton from '../components/DarkModeButton.svelte';
	import SearchIcon from '@indaco/svelte-iconoir/icons/SearchIcon.svelte';
</script>

<nav
	class="mx-auto bg-skin-light border-b dark:bg-skin-pure-dark dark:border-skin-muted-dark border-skin-base"
>
	<div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
		<div class="flex justify-between h-16">
			<div
				class="flex items-center justify-center flex-1 px-2 space-x-8  lg:ml-6 lg:justify-end"
			>
				<div class="w-full max-w-lg lg:max-w-xs">
					<label for="search" class="sr-only">Search</label>
					<div class="relative">
						<div
							class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
						>
							<!-- Heroicon name: solid/search -->
							<SearchIcon class="w-5 h-5 text-skin-input-muted" aria-hidden="true" />
						</div>
						<input
							id="search"
							name="search"
							class="block w-full py-2 pl-10 pr-3 leading-5 bg-skin-muted border rounded-md text-skin-input border-skin-base dark:bg-skin-dark placeholder-santa focus:outline-none focus:placeholder-oyster focus:ring-1 focus:ring-oyster focus:border-skin-accent sm:text-sm dark:border-river"
							placeholder="Search"
							type="search"
						/>
					</div>
				</div>
				<button id="dark-mode-toggle">
					<DarkModeButton />
				</button>
			</div>
		</div>
	</div>
</nav>

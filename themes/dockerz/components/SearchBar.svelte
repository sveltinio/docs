<script>
	import DarkModeButton from '../components/DarkModeButton.svelte';
	import SearchIcon from '@indaco/svelte-iconoir/icons/SearchIcon.svelte';
</script>

<nav class="mx-auto bg-white border-b dark:bg-gun dark:border-gun border-smoke">
	<div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex items-center justify-center flex-1 px-2 space-x-8  lg:ml-6 lg:justify-end">
				<div class="w-full max-w-lg lg:max-w-xs">
					<label for="search" class="sr-only">Search</label>
					<div class="relative">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
							<!-- Heroicon name: solid/search -->
							<SearchIcon class="w-5 h-5 text-metal" aria-hidden="true" />
						</div>
						<input
							id="search"
							name="search"
							class="block w-full py-2 pl-10 pr-3 leading-5 bg-white border rounded-md  text-mana border-smoke dark:bg-tuna placeholder-santa focus:outline-none focus:placeholder-oyster focus:ring-1 focus:ring-oyster focus:border-oyster sm:text-sm dark:border-river"
							placeholder="Search"
							type="search"
							data-dashlane-rid="300ea468b1c22cb0"
							data-form-type=""
						/>
					</div>
				</div>
				<button id="dark-mode-toggle" class="text-pearl dark:text-white">
					<DarkModeButton />
				</button>
			</div>
		</div>
	</div>
</nav>

<script>
	import CollapsableList from './_CollapsableList.svelte';
	import SidebarExternals from './_SidebarExternals.svelte';
</script>

<div class="dark:border-tuna border-l">
	<div>
		<a
			href="./index.html"
			class="hover:bg-icy border-periblue dark:bg-tuna text-oyster dark:text-manatee dark:hover:text-sveltin-periblue hover:text-river group flex items-center p-2 pl-6 text-base font-light bg-white border-l-2"
		>
			Quickstart
		</a>
		<CollapsableList headerText="Designing"
			><ul>
				<li>
					<a
						href="./starter.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group dark:hover:bg-tuna hover:bg-white focus:border-periblue flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Get Started
					</a>
				</li>
				<li>
					<a
						href="./design-kit.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group dark:hover:bg-tuna hover:bg-white focus:border-periblue flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Design Kits
					</a>
				</li>
				<li>
					<a
						href="./design-resources.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group dark:hover:bg-tuna hover:bg-white focus:border-periblue flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Resources
					</a>
				</li>
				<li>
					<a
						href="./tutorials.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group dark:hover:bg-tuna hover:bg-white focus:border-periblue flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Tutorials
					</a>
				</li>
			</ul></CollapsableList
		>

		<CollapsableList headerText="Developing">
			<ul>
				<li>
					<a
						href="./starter.html"
						class="flex items-center p-2 pl-3 text-base font-light text-skin-link-base dark:text-skin-muted-dark dark:hover:text-periblue hover:text-skin-base-hover group hover:bg-white dark:hover:bg-tuna  border-l-2 border-transparent focus:border-periblue "
					>
						Get started
					</a>
				</li>
				<li>
					<a
						href="./frameworks.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-white dark:hover:bg-tuna focus:border-periblue flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Frameworks
					</a>
				</li>
				<li>
					<a
						href="./developer-resources.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-white dark:hover:bg-tuna focus:border-periblue flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Resources
					</a>
				</li>
			</ul>
		</CollapsableList>

		<a
			href="./recomendations.html"
			class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hoverhover:bg-white dark:hover:bg-tuna  group flex items-center p-2 pl-6 text-base font-light"
		>
			Recommendations
		</a>
	</div>
	<SidebarExternals />
</div>

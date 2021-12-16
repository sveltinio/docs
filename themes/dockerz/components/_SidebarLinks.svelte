<script>
	import CollapsableList from './_CollapsableList.svelte';
	import SidebarExternals from './_SidebarExternals.svelte';
</script>

<div class="dark:border-skin-base-dark border-l">
	<div>
		<a
			href="./index.html"
			class="bg-skin-light dark:bg-skin-dark text-skin-accent dark:text-skin-accent-dark hover:text-skin-accent-hover group dark:hover:text-skin-accent-dark-hover flex items-center p-2 pl-6 text-base font-light border-l-2 border-skin-muted"
		>
			Quickstart
		</a>
		<CollapsableList headerText="Designing"
			><ul>
				<li>
					<a
						href="./starter.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Get Started
					</a>
				</li>
				<li>
					<a
						href="./design-kit.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Design Kits
					</a>
				</li>
				<li>
					<a
						href="./design-resources.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Resources
					</a>
				</li>
				<li>
					<a
						href="./tutorials.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
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
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Get started
					</a>
				</li>
				<li>
					<a
						href="./frameworks.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Frameworks
					</a>
				</li>
				<li>
					<a
						href="./developer-resources.html"
						class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
					>
						Resources
					</a>
				</li>
			</ul>
		</CollapsableList>

		<a
			href="./recomendations.html"
			class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover hover:bg-white dark:hover:bg-skin-dark group flex items-center p-2 pl-6 text-base font-light"
		>
			Recommendations
		</a>
	</div>
	<SidebarExternals />
</div>

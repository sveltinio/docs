<script lang="ts">
	import '../app.css';

	import { website } from '$config/website.js';
	import { googleFonts } from '$config/externals.js';
	import { menu } from '$config/menu.js';
	import orderBy from 'lodash-es/orderBy.js';
	import { externalLinks } from '$config/external_links.js';
	import { JsonLdSiteNavigationElements, JsonLdWebSite } from '@sveltinio/seo';
	import { GoogleFonts, UmamiAnalytics } from '@sveltinio/services';
	import Toolbar from '$themes/dockerz/partials/Toolbar.svelte';
	import SidebarDesktop from '$themes/dockerz/partials/SidebarDesktop.svelte';
	import SidebarMobile from '$themes/dockerz/partials/SidebarMobile.svelte';
	import BottomPageLinks from '$themes/dockerz/partials/BottomPageLinks.svelte';
	import Footer from '$themes/dockerz/partials/Footer.svelte';
	import { ScrollToTopButton } from '@sveltinio/widgets';

	let navIsOpen = false;

	const sortedMenu = orderBy(menu, 'weight');

	function handleEscape({ key }) {
		if (key === 'Escape') {
			navIsOpen = false;
		}
	}
</script>

<svelte:window on:keyup={handleEscape} />

<JsonLdWebSite data={website} />
<JsonLdSiteNavigationElements baseURL={website.baseURL} data={sortedMenu} />

<GoogleFonts fonts={googleFonts} />
<UmamiAnalytics
	websiteID="1467a0c5-0b8d-4687-97ee-3dc97eb8becc"
	srcURL="https://umami.sveltin.io/umami.js"
/>

<div class="min-h-[640px] bg-skin-light dark:bg-skin-dark">
	<div>
		<SidebarDesktop menuData={sortedMenu} externalLinksData={externalLinks} />
		<div class="relative z-0 flex flex-1 overflow-hidden">
			<div class="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:pl-72">
				<Toolbar />
				<SidebarMobile bind:navIsOpen menuData={menu} externalLinksData={externalLinks} />
				<main class="mx-auto flex-1">
					<slot />
					<BottomPageLinks
						websiteData={website}
						menuData={sortedMenu}
						externalLinksData={externalLinks}
					/>
					<Footer />
				</main>
			</div>
		</div>
	</div>
	<ScrollToTopButton bounce />
</div>

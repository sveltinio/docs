<script>
	import SiteMetaTags from './seo/metatag/_SiteMetaTags.svelte';
	import SiteNavigationElement from './seo/jsonld/_SiteNavigationElement.svelte';
	import SiteBreadcrumbs from './seo/jsonld/_SiteBreadcrumbs.svelte';
	import Website from './seo/jsonld/_Website.svelte';

	export let data;
</script>

<SiteMetaTags {data} />
<Website {data} />
<SiteNavigationElement {data} />
<SiteBreadcrumbs {data} />

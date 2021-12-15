<script>
	import menu from '$config/menu.js';
	import { JsonLd } from 'svelte-meta-tags';
	import forEach from 'lodash-es/forEach.js';
	import orderBy from 'lodash-es/orderBy.js';

	export let data;

	const menuItem = orderBy(menu, 'weight');

	let elementList = [];
	forEach(menuItem, function (item) {
		elementList.push({
			'@type': 'SiteNavigationElement',
			position: item.weight,
			name: item.identifier,
			description: item.identifier,
			url: `${data.baseURL}` + item.url
		});
	});
</script>

<JsonLd
	schema={{
		'@type': 'ItemList',
		itemListElement: elementList
	}}
/>

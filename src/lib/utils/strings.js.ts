import type { Sveltin } from '$sveltin';

export const toTitle = (text: string): string => {
	return capitalizeAll(text.replace(/-/g, ' '));
};

export const capitalizeAll = (text: string): string => {
	const splitted = text.toLowerCase().split(' ');
	const capitalized: Array<string> = [];

	splitted.forEach(function (item) {
		capitalized.push(capitalizeFirstLetter(item));
	});
	return capitalized.join(' ');
};

export const capitalizeFirstLetter = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
};

export const toSlug = (text: string): string => {
	return text
		.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-');
};

export const isNotEmpty = (text: string): boolean => {
	return Boolean(text);
};

export const removeTrailingSlash = (text: string): string => {
	return text.replace(/\/+$/, '');
};

export const getPageUrl = (name: string, websiteData: Sveltin.WebSite): string => {
	return websiteData.baseURL.concat('/', name);
};

export const getSlugPageUrl = (
	item: Sveltin.ResourceContent,
	websiteData: Sveltin.WebSite
): string => {
	return websiteData.baseURL.concat('/', item.resource, '/', item.metadata.slug);
};

export const getFavicon = (websiteData: Sveltin.WebSite): string => {
	return websiteData.baseURL.concat('/', websiteData.favicon);
};

export const getCoverImagePath = (
	item: Sveltin.ResourceContent,
	websiteData: Sveltin.WebSite
): string => {
	if (item.metadata.cover && isNotEmpty(item.metadata.cover)) {
		return websiteData.baseURL.concat(
			'/',
			`resources/${item.resource}/${item.metadata.slug}/${item.metadata.cover}`
		);
	}
	return getFavicon(websiteData);
};

export const canonicalPageUrl = (name: string, baseURL: string): string => baseURL.concat(name);

export interface ContentItem {
	title: string;
	slug: string;
	author: string;
	headline: string;
	date: string;
	cover: string;
	draft: boolean;
	headings: Array<Record<string, unknown>>;
	html: string;
}

export interface Metadata {
	name: string;
	items: Array<MetadataItem>;
}

export interface MetadataItem {
	title: string;
	slug: string;
	headline: string;
}

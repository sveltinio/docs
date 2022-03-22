import type { HeadingItem } from '@sveltinio/widgets/types';

export interface ExternalLinkItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
}

export interface DynamicObject {
	[key: string]: any;
}

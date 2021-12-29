export const ContentItemSchema = {
	type: 'array',
	items: {
		type: 'object',
		properties: {
			title: {
				type: 'string'
			},
			slug: {
				type: 'string'
			},
			headline: {
				type: 'string'
			},
			author: {
				type: 'string'
			},
			created_at: {
				type: 'string'
			},
			updated_at: {
				type: 'string'
			},
			draft: {
				type: 'boolean'
			},
			headings: {
				type: 'array',
				items: {
					type: 'object'
				},
				minItems: 1
			},
			html: {
				type: 'string'
			}
		},
		required: ['title', 'slug', 'headline', 'draft', 'headings', 'html'],
		additionalProperties: true
	},
	uniqueItems: true
};

export const MetadataArraySchema = {
	type: 'array',
	items: {
		type: 'object',
		properties: {
			name: { type: 'string' },
			contents: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						title: {
							type: 'string'
						},
						slug: {
							type: 'string'
						},
						headline: {
							type: 'string'
						}
					}
				}
			}
		}
	}
};

export const MetadataItemSchema = {
	type: 'object',
	properties: {
		name: { type: 'string' },
		contents: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					title: {
						type: 'string'
					},
					slug: {
						type: 'string'
					},
					headline: {
						type: 'string'
					}
				}
			}
		}
	}
};

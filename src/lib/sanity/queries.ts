// src/lib/queries.ts

export type PageResult = { title: string };

export type PortableTextBlock = {
	_key?: string;
	_type: string;
	children?: Array<{
		_key?: string;
		_type: string;
		marks?: string[];
		text?: string;
	}>;
	markDefs?: Array<{
		_key: string;
		_type: string;
		[key: string]: unknown;
	}>;
	style?: string;
	listItem?: string;
	level?: number;
};

export type BlogPost = {
	_id: string;
	title: string;
	slug: { current: string };
	excerpt?: string;
	shortDescription: string;
	body?: PortableTextBlock[];
	publishedAt: string;
	author?: {
		name: string;
		image?: string;
	};
	mainImage?: {
		asset: {
			url: string;
		};
		alt?: string;
	};
	categories?: Array<{
		title: string;
		slug: { current: string };
	}>;
};

export type SidebarItem = {
	_id: string;
	_createdAt: string;
	slug: { current: string };
	title: string;
	description: string;
	docType: 'API_DOC' | 'GENERIC_DOC';
	apiType: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';
	parentSection?: {
		_ref: string;
	};
	children: SidebarItem[];
};

export type DocPage = {
	_id: string;
	title: string;
	slug: { current: string };
	content?: PortableTextBlock[];
	pageOfContent: string[];
	isPublished: boolean;
	publishedAt: string;
	_createdAt: string;
	section: {
		_ref: string;
	};
};

export type SidebarItems = SidebarItem[];

export type BlogListResult = BlogPost[];

export const pageQuery = /* groq */ `*[_type == "page"][0]{title}`;

export const blogPostsQuery = /* groq */ `
	*[_type == "post"] | order(publishedAt desc) {
		_id,
		title,
		slug,
		excerpt,
		shortDescription,
		pageOfContent,
		publishedAt,
		author->{
			name,
			"image": image.asset->url
		},
		"mainImage": mainImage{
			"asset": asset->{
				url
			},
			alt
		},
		categories[]->{
			title,
			slug
		}
	}
`;

export const blogPostQuery = /* groq */ `
	*[_type == "post" && slug.current == $slug][0] {
		_id,
		title,
		slug,
		excerpt,
		  body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        alt,
        caption
      },
   _type=="file"=>{
    ...,
    "url":asset->url
  },
    },
		publishedAt,
		author->{
			name,
			"image": image.asset->url
		},
		"mainImage": mainImage{
			"asset": asset->{
				url
			},
			alt
		},
		categories[]->{
			title,
			slug
		}
	}
`;

export const relatedPostsQuery = `
			*[_type == "post" && slug.current != $slug] [0...3] {
		_id,
		title,
		slug,
		excerpt,
		  body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        alt,
        caption
      }
    },
		publishedAt,
		author->{
			name,
			"image": image.asset->url
		},
		"mainImage": mainImage{
			"asset": asset->{
				url
			},
			alt
		},
		categories[]->{
			title,
			slug
		}
	}
		`;

export const sidebarItemsQuery = /* groq */ `
	
	*[_type == "sidebarSection" && !defined(parentSection)] | order(order asc) {
  	_id,
  	title,
  	description,
	slug,
  	docType,
  	apiType,
  	_createdAt,

  	"children": *[_type == "sidebarSection" && references(^._id)] | order(order asc) {
    _id,
    title,
    description,
	slug,
    docType,
	apiType,
	_createdAt,
    
  }
}

`;

export const docPageBySlugQuery = /* groq */ `
*[_type == "docPage" && section->slug.current == $slug][0]{
	...,
	content[]{
	...,
	_type == "image" => {
        ...,
        "url": asset->url,
        alt,
        caption
      }
    }
	
}`;

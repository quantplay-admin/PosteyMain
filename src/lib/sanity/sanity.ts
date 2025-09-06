// src/lib/sanity.ts

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { createClient } from '@sanity/client';
export const SANITY_API_VERSION = '2025-02-19' as const;

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: SANITY_API_VERSION,
	useCdn: true
});

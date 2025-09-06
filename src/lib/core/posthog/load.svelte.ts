import { browser } from '$app/environment';
import posthog from 'posthog-js';

export async function loadPostHog() {
	//@ts-expect-error: Key's only available in prod
	const { PUBLIC_POSTHOG_KEY, PUBLIC_POSTHOG_HOST } = import('$env/static/public');

	if (browser && PUBLIC_POSTHOG_HOST && PUBLIC_POSTHOG_KEY) {
		posthog.init(PUBLIC_POSTHOG_KEY, {
			api_host: PUBLIC_POSTHOG_HOST,
			defaults: '2025-05-24',
			person_profiles: 'identified_only'
		});
	}
}

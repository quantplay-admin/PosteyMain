<script lang="ts">
	import { emailRegex } from '$lib/common/regex';
	import Icon from '../../components/atoms/Icon.svelte';
	import Loader from '../../components/atoms/Loader.svelte';
	import { error } from '@sveltejs/kit';
	import { PUBLIC_POSTEY_BACKEND_URL } from '$env/static/public';

	let isJoined = $state(false);
	let isAlreadyJoined = $state(false);
	let email = $state('');
	let isJoining = $state(false);

	let isError = $state(false);

	const server_path = PUBLIC_POSTEY_BACKEND_URL;

	function joinWaitlist() {
		const value = email.trim();

		const isValidEmail = emailRegex.test(value);

		if (!isValidEmail) return;

		isJoining = true;

		fetch(`${server_path}/v1/waitlist`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: value
			})
		})
			.then((res) => {
				if (res.status === 409) {
					isAlreadyJoined = true;
				} else if (!res.ok) {
					throw error(res.status);
				}

				isJoined = true;
				email = '';
			})
			.catch((error) => {
				console.error(error);
				isError = true;
			})
			.finally(() => (isJoining = false));
	}
</script>

<svelte:head>
	<title>Join the Waitlist — Get Exclusive Early Access | Postey.ai</title>
	<meta
		name="description"
		content="Join the waitlist for early access to our new features and updates."
	/>
</svelte:head>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<div class="relative h-screen w-full overflow-hidden bg-[#000] text-white transition-all">
	<div
		class="pointer-events-none absolute -top-14 -left-36 z-10 h-[250px] w-[700px] bg-[#1D4ED8] opacity-25 blur-[120px]"
	></div>
	<div
		class="animate-float-slow absolute -top-14 -left-14 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,#444444,#000000)]
         opacity-100"
	></div>

	<div
		class="pointer-events-none absolute -bottom-14 -left-14 z-10 h-[320px] w-[350px] bg-[#1D4ED8] opacity-25 blur-[132px]"
	></div>
	<div
		class="animate-float-reverse absolute -bottom-14 -left-14 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,#444444,#000000)]
         opacity-100"
	></div>

	<div
		class="pointer-events-none absolute top-24 -right-24 z-10 h-[350px] w-[600px] bg-[#1D4ED8] opacity-20 blur-[162px]"
	></div>
	<div
		class="animate-pulse-float absolute top-24 -right-24 h-60 w-60 rounded-full
         bg-[radial-gradient(circle_at_center,#444444,#000000)]
         opacity-100"
	></div>

	<!-- <div class="absolute right-4 bottom-2 text-sm">
		<a href="/login" class="text-[#989898] hover:underline"> Already a member? </a>
	</div> -->

	<!-- Hero Section -->
	<div
		class="z-20 mx-auto -mt-24 flex h-screen max-w-xl flex-col items-center justify-center gap-6 text-center"
	>
		<div class="flex flex-col items-center justify-center">
			<img src="/apple-touch-transparent-icon.png" alt="Postey.ai" class="w-16" />

			<h1 class="text-[48px] leading-16">Reinvent the Way You Manage Social Media</h1>
		</div>
		<p class="text-[#989898]">Join our waitlist for early access to our all-in-one platform</p>

		{#if !isJoined}
			<div
				class="input-container z-10 mx-auto flex min-w-[350px] items-center overflow-hidden rounded-full border border-[#1C1D22] bg-[radial-gradient(100px,#18181B,#161619)] px-1"
				style="filter: drop-shadow(0px 0px 2px #252628);"
			>
				<input
					type="email"
					bind:value={email}
					placeholder="Email"
					class="z-50 flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
				/>
				<button
					disabled={isJoining}
					type="button"
					onclick={() => joinWaitlist()}
					class="btn z-30 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#1D4ED8] text-white transition hover:bg-[#1E40AF]"
				>
					{#if isJoining}
						<Loader variant="spinner" class="text-2xl text-white" />
					{:else}
						<Icon name="arrow-right" family="lucide" class="text-lg" />
					{/if}
				</button>
			</div>
			{#if isError}
				<p class="-mt-3 text-red-500">Something went wrong</p>
			{/if}
		{:else if isAlreadyJoined}
			<p role="status" aria-live="polite" class="animated-text text-2xl font-medium text-white">
				You're already on the waitlist!
			</p>
		{:else}
			<p role="status" aria-live="polite" class="animated-text text-2xl font-medium text-white">
				Yay, you're on the waitlist!
			</p>
		{/if}

		<p class="text-[#989898]">
			Be the first to experience the next-generation content management tool designed for creators,
			brands, and teams.
		</p>

		<div
			class="absolute bottom-0 left-1/2 z-50 h-[100px] w-[800px] -translate-x-1/2 bg-gradient-to-t from-black/80 via-black/90 to-transparent opacity-80"
		></div>
		<div class="fixed bottom-0 left-1/2 w-[900px] -translate-x-1/2" aria-hidden="true">
			<img src="/Group.png" alt="" />
		</div>
	</div>
</div>

<style>
	@keyframes float-slow {
		0%,
		100% {
			transform: translateY(0px) translateX(0px);
		}
		33% {
			transform: translateY(-20px) translateX(10px);
		}
		66% {
			transform: translateY(10px) translateX(-15px);
		}
	}

	/* Reverse floating animation */
	@keyframes float-reverse {
		0%,
		100% {
			transform: translateY(0px) translateX(0px);
		}
		33% {
			transform: translateY(15px) translateX(-10px);
		}
		66% {
			transform: translateY(-10px) translateX(20px);
		}
	}

	/* Pulse and float combination */
	@keyframes pulse-float {
		0%,
		100% {
			transform: translateY(0px) translateX(0px) scale(1);
			opacity: 0.65;
		}
		25% {
			transform: translateY(-15px) translateX(15px) scale(1.05);
			opacity: 0.8;
		}
		50% {
			transform: translateY(0px) translateX(25px) scale(1);
			opacity: 0.5;
		}
		75% {
			transform: translateY(20px) translateX(-10px) scale(0.95);
			opacity: 0.7;
		}
	}
	:global(.animate-float-slow) {
		animation: float-slow 12s ease-in-out infinite;
	}

	:global(.animate-float-reverse) {
		animation: float-reverse 15s ease-in-out infinite;
	}

	:global(.animate-pulse-float) {
		animation: pulse-float 18s ease-in-out infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.animate-float-slow),
		:global(.animate-float-reverse),
		:global(.animate-pulse-float) {
			animation: none !important;
		}
	}

	:global(.input-container) {
		--offset: 1px;
		position: relative;
		border-radius: 9999px;
		overflow: hidden;
		z-index: 1;
	}

	:global(.input-container::before) {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200%;
		aspect-ratio: 1;
		background: conic-gradient(
			from 0deg,
			transparent 0deg,
			#f97316 60deg,
			#ec4899 120deg,
			#8b5cf6 180deg,
			#3b82f6 240deg,
			transparent 300deg
		);
		animation: rotate 4s linear infinite;
		z-index: 0;
	}

	:global(.input-container::after) {
		content: '';
		position: absolute;
		inset: var(--offset);
		border-radius: inherit;
		background: radial-gradient(100px, #18181b, #161619);
		z-index: 1;
	}

	:global(.input-container input, .input-container button) {
		position: relative;
		z-index: 2;
	}

	@keyframes rotate {
		from {
			transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
		}
		to {
			transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
		}
	}

	:global(.animated-text) {
		font-weight: bold;
		background-image: linear-gradient(100deg, #f97316, #ec4899, #8b5cf6, #3b82f6, #f97316);
		background-size: 200% 100%;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: color-run 5s alternate-reverse infinite;
	}

	@keyframes color-run {
		0% {
			background-position: -50% 0%;
		}
		100% {
			background-position: 200% 0%;
		}
	}
</style>

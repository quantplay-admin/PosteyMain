<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '../../atoms/Icon.svelte';
	import Overlay from '../../atoms/Overlay.svelte';
	import Cards from './Cards.svelte';

	interface TFeatures {
		isAvailable: boolean;
		title: string;
	}

	interface TPlans {
		name: string;
		price: string;
		tag?: string;
		discountedText?: string;
		yearlyBilling?: boolean;
		annualBilling?: boolean;
		isPopular?: boolean;
		features: TFeatures[];
	}

	const plans = $state<TPlans[]>([
		{
			name: 'Free',
			price: 'Free',
			tag: 'Free for everyone',
			features: [
				{ isAvailable: true, title: '1 Account' },
				{ isAvailable: true, title: '15 Posts/month' },

				{ isAvailable: true, title: '5 Drafts' },
				{ isAvailable: false, title: 'No Teams Included' }
			]
		},
		{
			name: 'Creator',
			price: '$12.50',
			discountedText: 'Discounted, save $240/year',
			yearlyBilling: true,
			features: [
				{ isAvailable: true, title: '20 Accounts' },
				{ isAvailable: true, title: 'Unlimited Posts' },

				{ isAvailable: true, title: 'Unlimited Drafts' },
				{ isAvailable: false, title: 'No Teams Included' }
			]
		},
		{
			name: 'Team',
			price: '$29',
			isPopular: true,
			yearlyBilling: true,
			discountedText: 'Discounted, save $240/year',
			features: [
				{ isAvailable: true, title: '20 Accounts' },
				{ isAvailable: true, title: 'Unlimited Posts' },
				{ isAvailable: true, title: '2 Teams' },
				{ isAvailable: true, title: 'Unlimited Drafts' }
			]
		},
		{
			name: 'Agency',
			price: '$79',
			discountedText: 'Discounted, save $240/year',
			// yearlyBilling: true,
			tag: 'Annual billing only',
			features: [
				{ isAvailable: true, title: '50 Accounts' },
				{ isAvailable: true, title: 'Unlimited Posts' },
				{ isAvailable: true, title: '50 Teams' },
				{ isAvailable: true, title: 'Unlimited Drafts' }
			]
		}
	]);

	let isChecked = $state(true);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<div class="relative flex flex-col items-center justify-center gap-20 px-10 py-24 text-[#FFFFFF]">
	<Overlay class="top-0" width={700} />

	<div class="space-y-8">
		<h1 class="headline heading max-w-2xl text-center text-3xl font-medium md:text-5xl">
			Flexible plans for every stage of growth.
		</h1>
		<p class="desc description text-xl text-gray-500 md:text-2xl">
			Choose a plan that fits your goals and scale as you grow
		</p>
	</div>
	<div class="flex flex-wrap items-center justify-center gap-2">
		{#each plans as plan, _i}
			<Cards shadow={true} width={330} height={640} containerClass="w-full relative">
				<!-- most popular tag -->
				{#if plan.isPopular}
					<div
						class="absolute -top-4 right-26 rounded-3xl bg-blue-500 px-3 py-1 font-medium text-white"
					>
						Most Popular
					</div>
				{/if}

				<div class="w-full space-y-6 py-6">
					<div class="flex h-48 flex-col gap-4">
						<h4 class="text-3xl">{plan.name}</h4>
						<div>
							{#if plan.price === 'Free'}
								<p class="text-xl font-semibold">$0</p>
							{:else}
								<p class="text-xl font-semibold">
									{plan.price}
									<span class="text-base font-normal text-gray-400"> per user/month </span>
								</p>
							{/if}
							{#if plan.discountedText}
								<p class="text-sm text-green-500">{plan.discountedText}</p>
							{/if}
						</div>
						{#if plan.yearlyBilling}
							<div class="mt-4 flex items-center space-x-2">
								<label class="relative inline-flex cursor-pointer items-center">
									<input
										type="checkbox"
										class="peer sr-only"
										checked={isChecked}
										onchange={() => {
											isChecked = !isChecked;
										}}
									/>
									<div
										class="peer bg-primary border-primary-border h-5 w-9 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-4"
									></div>
								</label>
								<span class="text-secondary-text text-lg">Yearly Billing</span>
							</div>
						{:else if plan.tag}
							<p class="mt-6 text-2xl">{plan.tag}</p>
						{/if}
					</div>

					<div class="mt-10 space-y-6">
						{#each plan.features as feature (feature.title)}
							<div class="flex items-center gap-4">
								{#if feature.isAvailable}
									<div
										class="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-r from-[#7795E8] to-[#1D4ED8]"
									>
										<Icon name="tick" family="lucide" />
									</div>
								{:else}
									<div class="flex h-6 w-6 items-center justify-center rounded bg-[#333333]">
										<Icon name="x" family="lucide" class="text" />
									</div>
								{/if}
								<span class="text-gray-400">{feature.title}</span>
							</div>
						{/each}
					</div>

					<button
						type="button"
						onclick={() => goto('/waitlist')}
						aria-label="Get started with {plan.name} plan"
						class="mt-14 w-full cursor-pointer rounded-2xl border border-gray-500 bg-[#333333] px-3 py-2 text-lg font-medium text-white {plan.name ===
						'Team'
							? 'border-[#7795E8] bg-blue-600 hover:bg-blue-700'
							: ''}"
					>
						Get Started
					</button>
				</div>
			</Cards>
		{/each}
	</div>
</div>

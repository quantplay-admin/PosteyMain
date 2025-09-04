<script lang="ts">
	import Icon from '../../atoms/Icon.svelte';
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
				{ isAvailable: false, title: '0 Teams' },
				{ isAvailable: true, title: '5 Drafts' }
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
				{ isAvailable: false, title: '0 Teams' },
				{ isAvailable: true, title: 'Unlimited Drafts' }
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
			yearlyBilling: true,
			tag: 'Annual billing only',
			features: [
				{ isAvailable: true, title: '50 Accounts' },
				{ isAvailable: true, title: 'Unlimited Posts' },
				{ isAvailable: true, title: '50 Teams' },
				{ isAvailable: true, title: 'Unlimited Drafts' }
			]
		}
	]);
</script>

<div class="flex flex-col items-center justify-center gap-20 px-10 py-24 text-[#FFFFFF]">
	<div class="space-y-8">
		<h1 class="max-w-2xl text-center text-5xl font-medium">
			Flexible plans for every stage of growth.
		</h1>
		<p class="text-2xl text-gray-500">Choose a plan that fits your goals and scale as you grow</p>
	</div>
	<div class="flex items-center justify-center gap-1">
		{#each plans as plan, i}
			<Cards
				shadow={true}
				width={330}
				height={i === 2 ? 740 : 700}
				containerClass="w-full relative"
			>
				{#if plan.isPopular}
					<div
						class="absolute -top-4 right-10 rounded-3xl bg-blue-500 px-3 py-1 font-medium text-white"
					>
						Most Popular
					</div>
				{/if}
				<div class="w-full space-y-6 py-6">
					<h4 class="text-3xl">{plan.name}</h4>

					<div class="flex flex-col">
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
						{#if plan.yearlyBilling}
							<div class="mt-4 flex items-center space-x-2">
								<label class="relative inline-flex cursor-pointer items-center">
									<input type="checkbox" class="peer sr-only" checked />
									<div
										class="peer bg-primary border-primary-border h-5 w-9 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-4"
									></div>
								</label>
								<span class="text-secondary-text text-lg">Yearly Billing</span>
							</div>
						{:else if plan.tag}
							<p class="text-2xl">{plan.tag}</p>
						{/if}
					</div>

					<div class="mt-10 space-y-8">
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

					<div class="flex w-full items-center justify-center">
						<button
							type="button"
							aria-label="Get started with {plan.name} plan"
							class="mt-10 w-full cursor-pointer rounded-2xl border border-gray-500 bg-[#333333] px-3 py-2 text-lg font-medium text-white {plan.name ===
							'Team'
								? 'border-[#7795E8] bg-blue-600 hover:bg-blue-700'
								: ''}"
						>
							Get Started
						</button>
					</div>
				</div>
			</Cards>
		{/each}
	</div>
</div>

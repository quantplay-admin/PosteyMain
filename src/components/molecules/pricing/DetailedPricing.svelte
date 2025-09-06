<script lang="ts">
	import PaymentRowCell from './PaymentRowCell.svelte';

	interface TPlanCell {
		value: string | boolean | number;
	}

	interface TFeatureRow {
		icon_name?: string;
		icon_family?: string;
		label: string;
		cells: TPlanCell[];
	}

	const featureRows: TFeatureRow[] = [
		{
			icon_name: 'pencil-line',
			icon_family: 'lucide',
			label: 'Drafts',
			cells: [
				{ value: '5' },
				{ value: 'Unlimited' },
				{ value: 'Unlimited' },
				{ value: 'Unlimited' }
			]
		},
		{
			icon_name: 'send',
			icon_family: 'lucide',
			label: 'Publishing',
			cells: [
				{ value: '15 posts/month' },
				{ value: 'Unlimited' },
				{ value: 'Unlimited' },
				{ value: 'Unlimited' }
			]
		},
		{
			icon_name: 'calendar-clock',
			icon_family: 'lucide',
			label: 'Scheduling',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'calendar',
			icon_family: 'lucide',
			label: 'Calendar',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'circle-plus',
			icon_family: 'lucide',
			label: 'Connected accounts',
			cells: [
				{ value: '1 account' },
				{ value: '20 accounts' },
				{ value: '20 accounts' },
				{ value: '50 accounts' }
			]
		}
	];

	const platformRows: TFeatureRow[] = [
		{
			icon_name: 'new-twitter',
			icon_family: 'hugeicons',
			label: 'X/Twitter',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'linkedin',
			icon_family: 'skill-icons',
			label: 'LinkedIn',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'threads',
			icon_family: 'hugeicons',
			label: 'Threads',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'instagram',
			icon_family: 'skill-icons',
			label: 'Instagram',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'bluesky',
			icon_family: 'logos',
			label: 'Bluesky',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'medium',
			icon_family: 'lucide',
			label: 'Medium',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'mastodon-icon',
			icon_family: 'logos',
			label: 'Mastodon',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		}
	];

	const collaborationRows: TFeatureRow[] = [
		{
			icon_name: 'message-square-share',
			icon_family: 'lucide',
			label: 'Share and comment draft',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'users',
			icon_family: 'lucide',
			label: 'Teams',
			cells: [{ value: false }, { value: false }, { value: 2 }, { value: 50 }]
		},
		{
			icon_name: 'circle-plus',
			icon_family: 'lucide',
			label: 'Total members',
			cells: [{ value: false }, { value: false }, { value: 'Unlimited' }, { value: 'Unlimited' }]
		},
		{
			icon_name: 'lock',
			icon_family: 'lucide',
			label: 'Set member permission',
			cells: [{ value: false }, { value: false }, { value: true }, { value: true }]
		}
	];

	const analyticsRows: TFeatureRow[] = [
		{
			icon_name: 'chart-no-axes',
			icon_family: 'lucide',
			label: 'Detailed metrics',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'percentage',
			icon_family: 'iconoir',
			label: 'Profile conversion rate',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'fire-flame',
			icon_family: 'iconoir',
			label: 'Tweeting streaks',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'download',
			icon_family: 'lucide',
			label: 'Download as CSV',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		}
	];

	const posteyAiRows: TFeatureRow[] = [
		{
			icon_name: 'new-twitter',
			icon_family: 'hugeicons',
			label: 'Rewrite and improve',
			cells: [
				{ value: false },
				{ value: 'Unlimited' },
				{ value: 'Unlimited' },
				{ value: 'Unlimited' }
			]
		},
		{
			icon_name: 'light-blub',
			icon_family: 'lucide',
			label: 'Personalized idea',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		}
	];

	const editingRows: TFeatureRow[] = [
		{
			icon_name: 'view',
			icon_family: 'lucide',
			label: 'High fidelity editor',
			cells: [{ value: true }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'image',
			icon_family: 'lucide',
			label: 'High quality images',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'list-ordered',
			icon_family: 'lucide',
			label: 'Auto-numbering',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'new-twitter',
			icon_family: 'hugeicons',
			label: 'Long form posts',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'tag',
			icon_family: 'lucide',
			label: 'Tagging & filtering',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'light-blub',
			icon_family: 'lucide',
			label: 'Writing prompts',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'file-video-2',
			icon_family: 'lucide',
			label: 'Upload videos',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'list-check',
			icon_family: 'lucide',
			label: 'polls',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		}
	];

	const engagementRows: TFeatureRow[] = [
		{
			icon_name: 'message-circle',
			icon_family: 'lucide',
			label: 'Reply to tweets',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'repeat',
			icon_family: 'lucide',
			label: 'Schedule retweets',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'list-end',
			icon_family: 'lucide',
			label: 'Automatic plug',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'mail',
			icon_family: 'lucide',
			label: 'Auto DMs & giveaway',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'quote',
			icon_family: 'lucide',
			label: 'Thread finisher quote',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'users',
			icon_family: 'lucide',
			label: 'X communities',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		},
		{
			icon_name: 'message-circle',
			icon_family: 'lucide',
			label: 'LinkedIn first comment',
			cells: [{ value: false }, { value: true }, { value: true }, { value: true }]
		}
	];
</script>

<!-- Main Container with Black Background -->
<div class="min-h-screen bg-black text-white">
	<!-- Pricing Cards Section -->
	<div class="mx-auto max-w-7xl px-6 pb-16"></div>

	<!-- Features Comparison Section -->
	<div class="mx-auto max-w-7xl px-6 pb-16">
		<!-- Core Features -->
		<div class="mb-16">
			<h2 class="mb-8 text-start text-3xl font-bold text-white">Core Features</h2>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
				{#each featureRows as row, index}
					<div
						class="grid grid-cols-5 items-center border-b border-gray-800 p-4 {index % 2 === 0
							? 'bg-gray-900/30'
							: 'bg-transparent'}"
					>
						<PaymentRowCell
							isIcon={true}
							name={row.icon_name}
							family={row.icon_family}
							title={row.label}
						/>
						{#each row.cells as cell}
							<PaymentRowCell
								isIcon={false}
								title={typeof cell.value === 'boolean' ? '' : cell.value}
								isCheck={typeof cell.value === 'boolean' ? cell.value : undefined}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Platforms -->
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white">Platforms</h2>
			<p class="mb-8 text-lg text-gray-300">
				Post to more platforms easily to expand your audience.
			</p>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
				{#each platformRows as row, index}
					<div
						class="grid grid-cols-5 items-center border-b border-gray-800 p-4 {index % 2 === 0
							? 'bg-gray-900/30'
							: 'bg-transparent'}"
					>
						<PaymentRowCell
							isIcon={true}
							name={row.icon_name}
							family={row.icon_family}
							title={row.label}
						/>
						{#each row.cells as cell}
							<PaymentRowCell
								isIcon={false}
								title={typeof cell.value === 'boolean' ? '' : cell.value}
								isCheck={typeof cell.value === 'boolean' ? cell.value : undefined}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Collaboration -->
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white">Collaboration</h2>
			<p class="mb-8 text-lg text-gray-300">
				Write, get feedback, and publish together with your team or clients.
			</p>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
				{#each collaborationRows as row, index}
					<div
						class="grid grid-cols-5 items-center border-b border-gray-800 p-4 {index % 2 === 0
							? 'bg-gray-900/30'
							: 'bg-transparent'}"
					>
						<PaymentRowCell
							isIcon={true}
							name={row.icon_name}
							family={row.icon_family}
							title={row.label}
						/>
						{#each row.cells as cell}
							<PaymentRowCell
								isIcon={false}
								title={typeof cell.value === 'boolean' ? '' : cell.value}
								isCheck={typeof cell.value === 'boolean' ? cell.value : undefined}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Analytics -->
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white">Analytics</h2>
			<p class="mb-8 text-lg text-gray-300">Get detailed insights and track your growth</p>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
				{#each analyticsRows as row, index}
					<div
						class="grid grid-cols-5 items-center border-b border-gray-800 p-4 {index % 2 === 0
							? 'bg-gray-900/30'
							: 'bg-transparent'}"
					>
						<PaymentRowCell
							isIcon={true}
							name={row.icon_name}
							family={row.icon_family}
							title={row.label}
						/>
						{#each row.cells as cell}
							<PaymentRowCell
								isIcon={false}
								title={typeof cell.value === 'boolean' ? '' : cell.value}
								isCheck={typeof cell.value === 'boolean' ? cell.value : undefined}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Postey AI -->
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white">Postey AI</h2>
			<p class="mb-8 text-lg text-gray-300">Level up your content with our specialized AI</p>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
				{#each posteyAiRows as row, index}
					<div
						class="grid grid-cols-5 items-center border-b border-gray-800 p-4 {index % 2 === 0
							? 'bg-gray-900/30'
							: 'bg-transparent'}"
					>
						<PaymentRowCell
							isIcon={true}
							name={row.icon_name}
							family={row.icon_family}
							title={row.label}
						/>
						{#each row.cells as cell}
							<PaymentRowCell
								isIcon={false}
								title={typeof cell.value === 'boolean' ? '' : cell.value}
								isCheck={typeof cell.value === 'boolean' ? cell.value : undefined}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Editing -->
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white">Editing</h2>
			<p class="mb-8 text-lg text-gray-300">
				Powerful editing tools to make your content stand out.
			</p>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
				{#each editingRows as row, index}
					<div
						class="grid grid-cols-5 items-center border-b border-gray-800 p-4 {index % 2 === 0
							? 'bg-gray-900/30'
							: 'bg-transparent'}"
					>
						<PaymentRowCell
							isIcon={true}
							name={row.icon_name}
							family={row.icon_family}
							title={row.label}
						/>
						{#each row.cells as cell}
							<PaymentRowCell
								isIcon={false}
								title={typeof cell.value === 'boolean' ? '' : cell.value}
								isCheck={typeof cell.value === 'boolean' ? cell.value : undefined}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Engagement -->
		<div class="mb-16">
			<h2 class="mb-4 text-3xl font-bold text-white">Engagement</h2>
			<p class="mb-8 text-lg text-gray-300">Automate your engagement and start growing faster.</p>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
				{#each engagementRows as row, index}
					<div
						class="grid grid-cols-5 items-center border-b border-gray-800 p-4 {index % 2 === 0
							? 'bg-gray-900/30'
							: 'bg-transparent'}"
					>
						<PaymentRowCell
							isIcon={true}
							name={row.icon_name}
							family={row.icon_family}
							title={row.label}
						/>
						{#each row.cells as cell}
							<PaymentRowCell
								isIcon={false}
								title={typeof cell.value === 'boolean' ? '' : cell.value}
								isCheck={typeof cell.value === 'boolean' ? cell.value : undefined}
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

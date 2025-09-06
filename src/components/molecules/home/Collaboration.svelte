<script lang="ts">
	import Backdrop from '../../atoms/Backdrop.svelte';
	import Overlay from '../../atoms/Overlay.svelte';
	import TextReveal from '../../atoms/TextReveal.svelte';
	import Divide from '../../atoms/Divide.svelte';
</script>

<div class=" flex flex-col gap-20 overflow-hidden py-24 text-[#FFFFFF]">
	<div
		class="relative mx-auto flex w-10/12 flex-wrap items-center justify-between gap-10 px-10 md:gap-0"
	>
		<Overlay class="-top-20 left-40" width={800} />
		<h1 class="headline heading max-w-xl text-3xl font-medium md:text-5xl">
			Collaborate without the back-and-forth
		</h1>
		<p class="desc description max-w-lg text-gray-400">
			Made for async teams and fast approvals. Workflows designed to include clients, stakeholders,
			and teammates without endless feedback loops.
		</p>
	</div>

	<div class=" mt-20 flex flex-wrap items-start justify-around gap-20 px-10 md:gap-0">
		<div class="flex max-w-xs flex-col gap-1">
			<TextReveal class="description text-2xl" text="Streamlined Feedback & Approval" />
			<TextReveal
				class="description text-gray-400"
				text="Comment, tag teammates, and track approvals to keep work moving fast."
			/>
			<Backdrop>
				<img src="/Collaboration.png" alt="Manage Notification" class="mt-6" />
			</Backdrop>
		</div>
		<Divide direction="col" class="hidden md:block" />
		<div class="flex max-w-xs flex-col gap-1">
			<TextReveal class="description text-2xl" text="Smart Sharing & Permissions" />
			<TextReveal
				class="description text-gray-400"
				text="Share securely with custom access controls for viewing, commenting, or editing."
			/>
			<!-- <h3 id="sub-title" class="text-2xl">Smart Sharing & Permissions</h3>
			<p id="sub-desc" class="text-gray-400">
				Share securely with custom access controls for viewing, commenting, or editing.
			</p> -->
			<Backdrop>
				<img src="/share.png" alt="Manage Notification" class="mt-6" />
			</Backdrop>
		</div>
	</div>

	<Divide direction="row" />

	<div class="flex flex-col items-start justify-center gap-20 px-10 py-20 md:flex-row md:gap-0">
		<Backdrop>
			<img class="z-50 w-11/12 md:w-8/12" src="/settings.png" alt="Team Management" />
		</Backdrop>

		<div class="flex flex-col gap-1">
			<h1 class="description text-2xl">Unified Team Management</h1>

			<p class="description max-w-sm text-gray-400">
				Create team spaces, assign roles, and manage multiple accounts with ease.
			</p>
		</div>
	</div>
</div>

<style>
	:global(.board-tilt) {
		transform: perspective(1600px) rotateX(40deg) rotateY(-8deg) rotateZ(-35deg);
		border: 2px solid rgba(169, 165, 165, 0.2);
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.02);
		background: #1e1e1e;
		background-image: radial-gradient(transparent, rgba(255, 255, 255, 0.02));
	}
</style>

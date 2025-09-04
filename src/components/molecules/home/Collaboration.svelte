<script lang="ts">
	import Backdrop from '../../atoms/Backdrop.svelte';
	import Overlay from '../../atoms/Overlay.svelte';
	import Divide from './Divide.svelte';
</script>

<div class=" flex flex-col gap-20 overflow-hidden py-24 text-[#FFFFFF]">
	<div class="relative mx-auto flex w-10/12 items-center justify-between px-10">
		<Overlay class="-top-20 left-40" width={800} />
		<h1 class="max-w-xl text-5xl font-medium">Collaborate without the back-and-forth</h1>
		<p id="idea-desc" class="max-w-lg text-gray-400">
			Made for async teams and fast approvals. Workflows designed to include clients, stakeholders,
			and teammates without endless feedback loops.
		</p>
	</div>

	<div class=" mt-20 flex items-center justify-around px-10">
		<div class="flex max-w-xs flex-col gap-1">
			<h3 class="text-2xl">Streamlined Feedback & Approval</h3>
			<p class="text-gray-400">
				Comment, tag teammates, and track approvals to keep work moving fast.
			</p>

			<Backdrop>
				<img src="/Collaboration.png" alt="Manage Notification" class="mt-6" />
			</Backdrop>
		</div>
		<Divide direction="col" />
		<div class="flex max-w-xs flex-col gap-1">
			<h3 class="text-2xl">Smart Sharing & Permissions</h3>
			<p class="text-gray-400">
				Share securely with custom access controls for viewing, commenting, or editing.
			</p>
			<Backdrop>
				<img src="/Collaboration.png" alt="Manage Notification" class="mt-6" />
			</Backdrop>
		</div>
	</div>

	<Divide direction="row" />

	<div class="flex justify-around py-20">
		<img class="board-tilt w-6/12" src="/Team-Management.png" alt="Team Management" />

		<div class="flex flex-col gap-1">
			<h1 class="text-2xl">Unified Team Management</h1>

			<p class="max-w-sm text-gray-400">
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

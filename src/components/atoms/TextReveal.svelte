<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import { onDestroy, onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	interface TextRevealProps extends HTMLAttributes<HTMLElement> {
		text: string;
		trigger?: string;
		animationType?: 'lines' | 'words' | 'chars';
		delay?: number;
		duration?: number;
		from?: gsap.TweenVars;
		to?: gsap.TweenVars;
	}

	let {
		text,
		trigger,
		animationType = 'lines',
		delay = 0.1,
		duration = 0.8,
		from = { y: 100, opacity: 0 },
		to = { y: 0, opacity: 1, ease: 'power4.out' },
		class: className
	}: TextRevealProps = $props();

	let element: HTMLElement;
	let splitText: SplitText;

	gsap.registerPlugin(SplitText, ScrollTrigger);
	onMount(() => {
		splitText = new SplitText(element, { type: animationType });

		gsap.fromTo(
			splitText[animationType],
			{ ...from },
			{
				...to,
				duration,
				stagger: delay,
				scrollTrigger: {
					trigger: trigger ?? element,
					start: 'top 80%' // adjust as needed
				}
			}
		);
	});

	onDestroy(() => {
		splitText?.revert();
		ScrollTrigger.getAll().forEach((st) => st.kill());
	});
</script>

<div bind:this={element} class={['overflow-hidden', className]}>
	{text}
</div>

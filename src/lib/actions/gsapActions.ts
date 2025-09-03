import { browser } from '$app/environment';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export interface AnimateTextOptions {
	x?: number;
	y?: number;
	duration?: number;
	delay?: number;
	ease?: gsap.EaseString;
	fromVars?: gsap.TweenVars;
}

export function animateText(target: string | HTMLElement, options: AnimateTextOptions = {}): void {
	const { x = 0, y = 0, duration = 1, delay = 0, ease = 'back.inOut', fromVars = {} } = options;
	if (browser) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(target, {
			opacity: 0,
			x,
			y,
			duration,
			delay,
			lazy: false,
			ease,
			...fromVars,
			scrollTrigger: {
				trigger: target,
				scroller: '.flex-1',
				start: 'top 100%',
				toggleActions: 'play none none reverse'
			}
		});
	}
}

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface TextAnimationOptions {
	target: string | Element | Element[] | null | undefined;
	trigger?: string | Element;
	start?: string;
	end?: string;
	scrub?: boolean | number;
	once?: boolean;
	duration?: number;
	y?: number;
	scale?: number;
	opacity?: number;
	ease?: string;
	stagger?: number;
}

function resolveTarget(target: TextAnimationOptions['target']) {
	if (!target) return null;
	if (typeof target === 'string') {
		const els = document.querySelectorAll(target);
		return els.length ? els : null;
	}
	return target;
}

export const textInScroll = ({
	target,
	start = 'top 90%',
	end = 'bottom 10%',
	scrub = false,
	once = false,
	duration = 0.8,
	y = 30,
	scale = 0.9,
	opacity = 0,
	ease = 'slow',
	stagger = 0.05
}: TextAnimationOptions) => {
	const el = resolveTarget(target);
	if (!el) return;

	gsap.fromTo(
		el,
		{ y, opacity, scale },
		{
			y: 0,
			opacity: 1,
			duration,
			ease,
			stagger,
			scale: 1,
			scrollTrigger: {
				trigger: target,
				start,
				end,
				scrub,
				once
			}
		}
	);
};

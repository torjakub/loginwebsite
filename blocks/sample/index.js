import './sample.scss';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';


class Sample {
	constructor() {
		gsap.registerPlugin( ScrollTrigger );
		this.gsap();
	}

	gsap() {
		const samples = gsap.utils.toArray( '.sample' );
		samples.forEach( sample => {
			gsap.from( sample, {
				scrollTrigger: {
					trigger: sample,
					start: 'top bottom'
				},
				scale: .8,
				opacity: 0,
				duration: 1
			});
		});
	}
}

new Sample();

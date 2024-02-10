import './Navbar.css';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { a } from '@react-spring/web';
import { useGSAP } from '@gsap/react';
import { useLenis } from '@studio-freight/react-lenis';

const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const navRef = useRef<HTMLDivElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);

	// const lenis = useLenis();
	// const handleClick = (position) => {
	//   lenis.scrollTo(position);
	// };

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	// Get scroll position
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition]);

	// Add css class based on scroll position
	useEffect(() => {
		if (navRef.current) {
			if (scrollPosition > 50) {
				(navRef.current as HTMLElement).classList.add('nav_fade');
			} else {
				(navRef.current as HTMLElement).classList.remove('nav_fade');
			}
		}
	}, [scrollPosition]);

	// Animate progress bar
	useGSAP(() => {
		if (navRef.current && progressRef.current) {
			const tl = gsap.timeline({
				defaults: {
					ease: 'none',
				},
				scrollTrigger: {
					trigger: navRef.current,
					scrub: 1,
					end: () => {
						if (progressRef.current) {
							return '+' + progressRef.current.offsetWidth;
						}
						return 0;
					},
				},
			});

			tl.to(progressRef.current, {
				scaleX: 1,
				scrollTrigger: { scrub: 0.33 },
			});
		}
	}, []);

	return (
		<div ref={navRef} id='nav'>
			<section className='socials'>
				<Link to="/">
        <a.h1 className="title" >
          EVENT WAVE
        </a.h1>
      </Link>
			</section>

			<div className='progress'>
				<div ref={progressRef} className='inner'></div>
			</div>
		</div>
	);
};

export default Navbar;

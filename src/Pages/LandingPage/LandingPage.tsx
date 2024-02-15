import { useEffect, useMemo, useRef, useState } from 'react';
import CanvasScene from '../../CanvasComponents/CanvasScene';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';
import './LandingPage.css';

const LandingPage = () => {
  const words = useMemo(() => ['Families', 'Good Times', 'Friends'], []);
	const textRef = useRef<HTMLSpanElement>(null!);
	const [textElement, setTextElement] = useState('Memories');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % words.length);
			setTextElement(words[currentIndex]);
		}, 3000);
		return () => clearInterval(intervalId);
	}, [currentIndex, words]);

	useGSAP(() => {
		const split = new SplitType(textRef.current, { types: 'chars' });

		gsap.from(split.chars, {
			yPercent: 100,
			stagger: 0.03,
			duration: 1.5,
			ease: 'power4.out',
			onComplete: () => {
				if (split) {
					split.revert();
				}
			},
		});

		return () => {
			if (split) {
				split.revert();
			}
		};
	}, [textElement]);


  return(
    <div className='landing-page-container'>
      <div className='left layout-ws'>
				<h1 style={{zIndex: -1, letterSpacing: -1}}>
					<div  className='mask primary-h1'>
						<span ref={textRef} >{textElement}</span>
					</div>
					<div className='mask'>
						<span>Your</span>
						<span>Memories</span>
						<span>Begin</span>
						<span>Here</span>
					</div>
				</h1>
			</div>
      <CanvasScene />
      <div className="searchBar-container">
        <SearchBar />
      </div>
    </div>
  )
}


export default LandingPage;
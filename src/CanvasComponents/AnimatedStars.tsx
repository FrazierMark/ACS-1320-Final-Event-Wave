import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from 'three';

const AnimatedStars = () => {
	const starRef = useRef<Points>(null);

	useFrame((state, delta) => {
		if (starRef.current) {
			starRef.current.position.z = 10;
			starRef.current.position.y = 14;
			starRef.current.rotation.y += delta * 0.05;
			starRef.current.rotation.x += delta * 0.04;
		}
	});

	return (
		<>
			<Stars
				ref={starRef}
				radius={10}
				depth={8}
				count={100}
				factor={2}
				saturation={1}
				size={0.5}
				speed={3}
			/>
		</>
	);
};

export default AnimatedStars;

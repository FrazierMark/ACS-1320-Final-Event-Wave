import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import Lights from './Lights';
import CameraRig from './CameraRig';
import Sphere from './Sphere';
import { OrbitControls } from '@react-three/drei';
import { Leva } from 'leva';
import { Effects } from './Effects';
import { Stars } from '@react-three/drei';
import AnimatedStars from './AnimatedStars';
import Background from './Background';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import { Leva } from 'leva';

const CanvasScene = () => {
	const location = useLocation();
	return (
		<Canvas
			className='canvas'
			camera={{ position: [0, 0, 23], near: 0.01, far: 1000 }}
		>
			<Leva hidden />
			<ambientLight intensity={1} />
			<Environment preset='warehouse' blur={1} />

			<CameraRig>
				<Float rotationIntensity={0.5} floatIntensity={1} speed={3}>
					{location.pathname === '/' && <Sphere />}
				</Float>
			</CameraRig>

			{/* <AnimatedStars /> */}
			{/* <Effects /> */}
			<OrbitControls />
			<Lights />
			<Background />
		</Canvas>
	);
};

export default CanvasScene;

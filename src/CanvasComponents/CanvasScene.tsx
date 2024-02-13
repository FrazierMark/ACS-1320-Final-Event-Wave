import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import Lights from './Lights';
import CameraRig from './CameraRig';
import Sphere from './Sphere';
import { OrbitControls } from '@react-three/drei';
import { Effects } from './Effects';
import { Stars } from '@react-three/drei';
import AnimatedStars from './AnimatedStars';
// import { Leva } from 'leva';

const CanvasScene = () => {
	return (
		<Canvas
			className='canvas'
			shadows={true}
			camera={{ position: [0, 2, 85.2], fov: 45 }}
		>
			<ambientLight intensity={1} />
			<Environment preset='warehouse' blur={1} />

			<CameraRig>
				<Float rotationIntensity={0.5} floatIntensity={1} speed={3}>
					<Sphere />
				</Float>
			</CameraRig>

			<AnimatedStars />
			{/* <Effects /> */}
			<OrbitControls />
			<Lights />
		</Canvas>
	);
};

export default CanvasScene;

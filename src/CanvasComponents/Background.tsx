import { useRef } from 'react';
// import vertexShader from "../Shaders/Test/vertexShader.glsl";
// import fragmentShader from "../Shaders/Test/fragmentShader.glsl";
import { useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import vertexShader from '../Shaders/Background/vertexShader.glsl';
import fragmentShader from '../Shaders/Background/fragmentShader.glsl';

const Background = () => {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	const { size } = useThree();

	const uniforms = useMemo(
		() => ({
			_time: {
				value: 0,
			},
			nodeUniform: {
				value: 6.283,
			},
			uColor: {
				value: new THREE.Color(0.0, 0.0, 0.0),
			},
		}),
		[]
	);

	useFrame((state, delta) => {
		const { mouse, clock } = state;
		mesh.current.material.uniforms._time.value = clock.getElapsedTime();
	});

	return (
		<mesh ref={mesh} position={[0, -30, -500]} rotation={[0, 0, 0]} scale={1.0}>
			{/* <planeGeometry args={[1, 1, 16, 16]} /> */}
			<planeGeometry args={[size.width, size.height, 16, 16]} />
			<shaderMaterial
				fragmentShader={fragmentShader}
				vertexShader={vertexShader}
				uniforms={uniforms}
			/>
		</mesh>
	);
};

export default Background;

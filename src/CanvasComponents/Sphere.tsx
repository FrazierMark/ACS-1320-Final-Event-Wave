import React, { Suspense, useState } from 'react';
//import { MeshRefractionMaterial } from "../../shaders/MeshRefractionMaterial.js";
import { useFBO, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import { useMemo } from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { MeshTransDistortMaterial } from '../Shaders/MeshTransDistortMaterial';
import { a } from '@react-spring/three';

const DistortMaterial = a(MeshTransDistortMaterial);

const Sphere = () => {
	const { nodes } = useGLTF('/glbs/lens-transformed.glb');
	const object = useRef();
	const fbo = useFBO(1024);
	const { viewport } = useThree();
	const [hovered, setHovered] = useState(false);
	const [rEuler, rQuaternion] = useMemo(
		() => [new THREE.Euler(), new THREE.Quaternion()],
		[]
	);

	const config = useControls({
		meshPhysicalMaterial: false,
		transmissionSampler: false,
		backside: false,
		speed: { value: 1, min: 1, max: 20, step: 0.1 },
		distort: { value: 0.52, min: 0, max: 1, step: 0.01 },
		samples: { value: 5, min: 1, max: 32, step: 1 },
		resolution: { value: 1024, min: 256, max: 2048, step: 256 },
		transmission: { value: 1, min: 0, max: 1 },
		roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
		thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
		ior: { value: 1.0, min: 1, max: 5, step: 0.01 },
		chromaticAberration: { value: 0.06, min: 0, max: 1 },
		anisotropy: { value: 0.0, min: 0, max: 1, step: 0.01 },
		distortion: { value: 0.00, min: 0, max: 1, step: 0.01 },
		distortionScale: { value: 1.0, min: 0.01, max: 1, step: 0.01 },
		temporalDistortion: { value: 1.0, min: 0, max: 1, step: 0.01 },
		clearcoat: { value: 1, min: 0, max: 1 },
		attenuationDistance: { value: 3.1, min: 0, max: 10, step: 0.01 },
		attenuationColor: '#ffffff',
		tColor: '#0000FF',
		color: '#9c9c9c',
		bg: '#ff0000',
	});

	useFrame((state) => {
		const { mouse } = state;

		if (object.current) {
			object.current.visible = false;
		}

		// set render target to an frame buffer object
		state.gl.setRenderTarget(fbo);
		state.gl.render(state.scene, state.camera);
		state.scene.background = null;
		state.gl.setRenderTarget(null);
		object.current.visible = true;

		// Calculate rotation based on mouse position
		rEuler.set(
			(mouse.y * viewport.height) / 500,
			(mouse.x * viewport.width) / 100,
			0
		);
		object.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1);

		// Make object hover slightly up and down
		if (object.current) {
			object.current.position.x = THREE.MathUtils.lerp(
				object.current.position.x,
				hovered ? state.mouse.x / 2 : 0,
				0.2
			);
			object.current.position.y = THREE.MathUtils.lerp(
				object.current.position.y,
				Math.sin(state.clock.elapsedTime / 1.5) / 6 +
					(hovered ? state.mouse.y / 2 : 0),
				0.2
			);
		}
	});

	return (
		<>
			<mesh
				ref={object}
				scale={[27, 27, 27]}
				position={[0, 0, 13]}
				rotation={[Math.PI / 2, 0, 0]}
				geometry={nodes.Cylinder.geometry}
			>
				<DistortMaterial background={new THREE.Color(config.bg)} {...config} />
			</mesh>
			<Text
				position={[0.3, 0, 18]}
				fontSize={4}
				color={config.tColor}
				font={'fonts/EspinosaNovaPro-RotundaBold.otf'}
				characters='abcdefghijklmnopqrstuvwxyz0123456789!'
				material-fog={false}
				letterSpacing={0}
			>
				EVENT WAVE
			</Text>
		</>
	);
};

export default Sphere;

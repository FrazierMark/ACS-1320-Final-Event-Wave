import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import fragmentShader from './Background/fragmentShader.glsl';
import vertexShader from './Background/vertexShader.glsl';

const BackgroundMaterial = shaderMaterial(
	// Uniform
	{
		_time: 0,
		nodeUniform0: 6.283,
		uColor: new THREE.Color(0.0, 0.0, 0.0),
		uTexture: new THREE.Texture(),
	},

	vertexShader,

	fragmentShader
);

extend(BackgroundMaterial);

export { BackgroundMaterial };

import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";


const Scene = (props) => {

    let uNoiseAmpNUM = 0.2
    
    const WaveShaderMaterial = shaderMaterial(
      // Uniform
      {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
        uNoiseAmp: uNoiseAmpNUM
      },
      // Vertex Shader
      glsl`
        precision mediump float;
    
        varying vec2 vUv;
        varying float vWave;

        uniform float uTime;
        uniform float uNoiseAmp;

        #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

        void main() {
          vUv = uv;

          vec3 pos = position;
          float noiseFreq = 2.0;
          float noiseAmp = uNoiseAmp; // 0.4
          vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
          pos.z += snoise3(noisePos) * noiseAmp;
          vWave = pos.z;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
        }
      `,
      // Fragment Shader
      glsl`
        precision mediump float;

        uniform vec3 uColor;
        uniform float uTime;
        uniform sampler2D uTexture;

        varying vec2 vUv;
        varying float vWave;

        void main() {
          float wave = vWave * 0.2;
          vec3 texture = texture2D(uTexture, vUv + wave).rgb;
          gl_FragColor = vec4(texture, 1.0); 
        }
      `
    );

    extend({ WaveShaderMaterial });

    const Wave = () => {
      const ref = useRef();
      useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

      const [image] = useLoader(THREE.TextureLoader, [ props.image ]);

      return (
        <mesh>
          <planeBufferGeometry args={ props.geometryPosition || [0.4, 0.6, 16, 16] } />
          <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
        </mesh>
      );
    };

    return (
        <Canvas camera={{ fov: 12, position: props.cameraPosition || [0, 0, 3.0] }}>
            <Suspense fallback={null}>
                <Wave />
            </Suspense>
        </Canvas>
    )
}

export default Scene
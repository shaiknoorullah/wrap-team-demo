import * as THREE from 'three';
import { Environment, Lightformer, Float } from '@react-three/drei';
import { LayerMaterial, Depth, Base } from 'lamina';

import MovingSpots from '../threeJs/lights/movingSpots';

const BgEnv = () => {
  return (
    /* Renders contents "live" into a HDRI environment (scene.environment). */

    <group>
      {/* Ceiling */}
      {/* <Lightformer
        intensity={1}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      /> */}
      <MovingSpots />
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      {/* Accent (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="white"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Base color="#444" alpha={1} mode="normal" />
          <Depth
            colorA="#202023"
            colorB="black"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </group>
  );
};

export default BgEnv;

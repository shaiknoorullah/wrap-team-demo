import { Canvas } from '@react-three/fiber';
import {
  BakeShadows,
  ContactShadows,
  Environment,
  Backdrop,
  OrbitControls,
} from '@react-three/drei';
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  // Vignette,
} from '@react-three/postprocessing';

import BasicLights from './lights/basicLighting';
// import Porche from './models/porche'
// import Lambo from './models/lambo'
import BgEnv from './environment';
import CameraRig from './camera';
import GroundPlane from './groundPlane';
import LensFlareEffect from './lensflare';

const Scene = ({ children }) => {
  return (
    <Canvas
      shadows
      // exposure={1}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 17], fov: 30 }}
    >
      {children}
      {/* <Lambo scale={1.6} position={[-0.5, -1.115, 0]} rotation={[0, -(Math.PI / 2) * 1.6, 0]} /> */}
      <fog attach="fog" args={['#202023', 5, 100]} />
      <BasicLights />
      <ContactShadows
        resolution={2048}
        frames={1}
        position={[0, -1.33, 0]}
        scale={9}
        blur={4}
        opacity={1}
        far={10}
      />
      <Environment frames={Infinity} resolution={256}>
        <BgEnv />
      </Environment>
      <Backdrop
        // receiveShadow
        scale={[50, 15, 20]}
        floor={1.5}
        position={[0, -1.37, -15]}
      >
        <meshPhysicalMaterial roughness={0.75} color="#202023" />
      </Backdrop>
      <GroundPlane position={[0, -1.27, 0]} shadowOpacity={1} />
      <LensFlareEffect />
      <BakeShadows />
      <CameraRig />
      {/* <OrbitControls /> */}
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.03}
          bokehScale={5}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={3} height={300} />
        <Noise opacity={0.02} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;

import { MeshReflectorMaterial } from '@react-three/drei';

const GroundPlane = props => {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={props.position}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#202023"
          metalness={1}
        />
      </mesh>
      <mesh
        receiveShadow
        rotation-x={-Math.PI / 2}
        position={[
          props.position.x,
          props.position.y + 0.0015,
          props.position.z,
        ]}
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial
          transparent
          color={'black'}
          opacity={props.shadowOpacity}
        />
      </mesh>
    </group>
  );
};

export default GroundPlane;

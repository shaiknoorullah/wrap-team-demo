import MeshReflectorMaterial from './drei/MeshReflectorMaterial.tsx';

const GroundPlane = props => {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={props.position}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          opacity={2}
          depthScale={1.1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.25}
          roughness={1}
          color={'black'}
        />
      </mesh>
      <mesh
        receiveShadow
        rotation-x={-Math.PI / 2}
        position={[
          props.position.x,
          props.position.y + 0.001,
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

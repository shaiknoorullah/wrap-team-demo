import { useMemo } from 'react';
import { applyProps } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// import { proxy, useSnapshot } from 'valtio';

// import Color from '../../../carColors.json';

const Porche = props => {
  const { scene, nodes, materials } = useGLTF('/911-transformed.glb');
  useMemo(() => {
    Object.values(nodes).forEach(
      node => node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
    applyProps(materials.rubber, {
      color: '#222',
      roughness: 0.6,
      roughnessMap: null,
      normalScale: [4, 4],
    });
    applyProps(materials.window, {
      color: 'black',
      roughness: 0,
      clearcoat: 0.1,
    });
    applyProps(materials.coat, {
      envMapIntensity: 4,
      roughness: 0.5,
      metalness: 1,
      color: props.color,
    });
    applyProps(materials.paint, {
      roughness: 0.5,
      metalness: 0.8,
      color: props.color,
      envMapIntensity: 2,
    });
  }, [nodes, materials, props.color]);
  return <primitive object={scene} {...props} />;
};

export default Porche;

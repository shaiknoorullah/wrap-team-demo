import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Lightformer } from '@react-three/drei'

const MovingSpots = ({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) => {
  const group = useRef()
  useFrame((state, delta) => (group.current.position.z += delta * 15) > 60 && (group.current.position.z = -60))
  return (
    <group rotation={[0, 0.5, 0]}>
      <group ref={group}>
        {positions.map((x, i) => (
          <Lightformer form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
        ))}
      </group>
    </group>
  )
}

export default MovingSpots

const BasicLights = () => {
  return (
    <>
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={0.2} />
    </>
  )
}

export default BasicLights

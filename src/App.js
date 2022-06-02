import React, { Suspense, useState } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Porche from './components/threeJs/models/porche';
import Lambo from './components/threeJs/models/lambo';
import Scene from './components/threeJs/scene';
import ColorNav from './components/colorNav';
import NextCarBtn from './components/nextCarButton';

import GroundPlane from './components/threeJs/groundPlane';

const App = () => {
  const [clicked, setClicked] = useState(true);

  const [color, setColor] = useState('orange');
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        width={'100vw'}
        height={'100vh'}
        position={'fixed'}
        zIndex={'-1'}
        m={0}
        p={0}
      >
        <Suspense fallback={null}>
          <Scene
            children={
              clicked ? (
                <Porche
                  scale={1.8}
                  position={[-0.5, -0.18, 0]}
                  rotation={[0, Math.PI / 5, 0]}
                  color={color}
                />
              ) : (
                <Lambo
                  scale={1.5}
                  position={[-0.5, -1.37, 0.13]}
                  rotation={[0, -(Math.PI / 2) * 1.6, 0]}
                  color={color}
                />
              )
            }
          />
        </Suspense>
      </Box>
      <NextCarBtn onClick={handleClick} />
      <ColorNav setColor={setColor} />
    </ChakraProvider>
  );
};

export default App;

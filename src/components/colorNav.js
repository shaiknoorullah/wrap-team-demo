import { Box, Container, Center, HStack } from '@chakra-ui/react';
import ColorButton from './colorButton';

const ColorNav = ({ setColor }) => {
  return (
    <Box position="fixed" w="xs" bottom={'20px'} zIndex={1}>
      <Container
        display="flex"
        p={2}
        maxW="1200px"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Center width={'100vw'} position={'fixed'} bottom={'20px'}>
          <HStack
            w={'2xs'}
            borderRadius={'lg'}
            css={{ backdropFilter: 'blur(25px)' }}
            bgColor={'whiteAlpha.100'}
            spacing={4}
            p={3}
            justify={'center'}
          >
            <ColorButton
              color={'black'}
              onClick={() => {
                setColor('black');
              }}
            />
            <ColorButton
              color={'hotpink'}
              onClick={() => {
                setColor('hotpink');
              }}
            />
            <ColorButton
              color={'teal'}
              onClick={() => {
                setColor('teal');
              }}
            />
            <ColorButton
              color={'red'}
              onClick={() => {
                setColor('red');
              }}
            />
            <ColorButton
              color={'orange'}
              onClick={() => {
                setColor('orange');
              }}
            />
          </HStack>
        </Center>
      </Container>
    </Box>
  );
};

export default ColorNav;

import { useRef } from 'react';
import { Box } from '@chakra-ui/react';

const ColorButton = props => {
  const { color, onClick } = props;
  const colorBox = useRef();

  return (
    <Box
      ref={colorBox}
      onClick={onClick}
      bgColor={color}
      w={'2em'}
      h={'2em'}
      borderRadius={'lg'}
    />
  );
};

export default ColorButton;

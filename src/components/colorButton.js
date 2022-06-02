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
      w={'3em'}
      h={'3em'}
      borderRadius={'lg'}
    />
  );
};

export default ColorButton;

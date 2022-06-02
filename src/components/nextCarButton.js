import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const variants = {
  hover: {
    x: 10,
  },
  initial: {
    x: 0,
  },
};

const NextCar = props => {
  const { onClick } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const easeInOutQuart = x => {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MotionBox
      className={'car-change'}
      onClick={onClick}
      m={0}
      p={3}
      width={'12em'}
      height={10}
      position={'fixed'}
      left={'20px'}
      top={'50%'}
      zIndex={'1'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      whileHover={{ cusrsor: 'Pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MotionBox
        variants={variants}
        animate={isHovered ? 'hover' : 'initial'}
        transition={{
          duration: 0.6,
          ease: easeInOutQuart,
          type: 'tween',
        }}
        width={'6em'}
        height={'1px'}
        bgColor={'white'}
      />
      <MotionText
        variants={variants}
        animate={isHovered ? 'hover' : 'initial'}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: easeInOutQuart,
          type: 'tween',
        }}
        color={'white'}
        fontFamily={'montserrat'}
        fontWeight={'light'}
        fontSize={'1em'}
        userSelect={'none'}
        onClick={() => handleClick()}
      >
        {clicked ? <>Porche</> : <>Lambo</>}
      </MotionText>
    </MotionBox>
  );
};

export default NextCar;

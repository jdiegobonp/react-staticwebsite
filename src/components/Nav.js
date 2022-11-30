import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue('white', 'blackAlpha.200');

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      <Text fontSize="xl" fontWeight="bold">
        TODO Application
      </Text>
      <Spacer />
      <Flex alignItems="center">
        <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
      </Flex>
    </Flex>
  );
};

export default Nav;
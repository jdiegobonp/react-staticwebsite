import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
    >
      <Text mb="3">
        Provided by{' '}
        <Link href="#" isExternal color="blue.500">
          Juan Diego Bonilla
        </Link>
      </Text>
      <Text opacity="0.5">Todo Application - Buit with Chakra UI - React </Text>
    </Flex>
  );
};

export default Footer;
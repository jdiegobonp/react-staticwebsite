 
import Footer from './components/Footer';
import Todo from './components/Todo'
import Nav from './components/Nav';
import React, { useRef } from 'react';
import { useDisclosure, Box } from '@chakra-ui/react';
import DrawerComponent from './components/DrawerComponent';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <Nav ref={btnRef} onOpen={onOpen} />
      <Todo />
      <Footer />
      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
}

export default App;
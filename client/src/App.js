import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Landing from './pages/landing.js'

function App() {
  return (
   
  <ChakraProvider>
      <Landing />
      </ChakraProvider>
  
  );
}

export default App;

import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
 
} from '@chakra-ui/react';
// Contains a login and signup form, we may nee d seperate these once the routes/ event handlers come in

const Login = () => {
    return(
    <Flex height = "100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
<Heading mb={6}>
   Log In  
</Heading>
<Input placeholder="email@email.com" variant= "filled" mb={3} type="email"></Input>
<Input placeholder="*******" variant= "filled" mb={3} type="password"></Input>
<Button colorScheme="teal">Log In</Button>
        </Flex> 
        <Flex direction="column" background="gray.100" ml={4} p={12} rounded={6}>
<Heading mb={6}>
   Sign up  
</Heading>
<Input placeholder="email@email.com" variant= "filled" mb={3} type="email"></Input>
<Input placeholder="*******" variant= "filled" mb={3} type="password"></Input>
<Button colorScheme="teal">Sign up</Button>
        </Flex> 
    </Flex>
    )
}


export default Login;


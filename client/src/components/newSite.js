import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Center,
  Heading,
  Box
} from "@chakra-ui/react";
const newSite = () => {
  return (
    <Box m="5%" w="90%" bg ='teal.600'>
      <Center>
        <Heading>Create a New Site</Heading>
      </Center>
      <Center>
        <FormControl w="60%">
          <FormLabel>Email address</FormLabel>
          <Input bg ='white' type="email" />
          <FormHelperText color ="white">We'll never share your email.</FormHelperText>
          
          <FormLabel>Name</FormLabel>
          <Input bg ='white'type="name" />
          <FormHelperText color ="white">
            Please enter your First and Last name.
          </FormHelperText>

          <FormLabel>
            Please give a description of what site you want built.
          </FormLabel>
          <Input bg ='white' type="description" />
          <FormHelperText color ="white"></FormHelperText>
          
          <FormLabel>Email address</FormLabel>
          <Input bg='white'type="email" />
          <FormHelperText color ="white">We'll never share your email.</FormHelperText>
        </FormControl>
      </Center>
    </Box>
  );
};

export default newSite;

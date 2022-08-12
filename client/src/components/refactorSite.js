import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Center,
  Heading,
  Box,
  Button,
  ButtonGroup
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const refactorSite = () => {
  return (
    <Center>
    <Box rounded={20}  m="5%" w="80%" bg="teal.600">
      <Center>
        <Heading>Refactor Exsiting Site</Heading>
      </Center>
      <Center>
        <FormControl w="60%">
          <FormLabel>Email address</FormLabel>
          <Input bg="white" type="email" />
          <FormHelperText color="white">
            We'll never share your email.
          </FormHelperText>

          <FormLabel>Name</FormLabel>
          <Input bg="white" type="name" />
          <FormHelperText color="white">
            Please enter your First and Last name.
          </FormHelperText>

          <FormLabel>
            Please give a description of what changes you would like made to
            your site.
          </FormLabel>
          <Input bg="white" type="description" />
          <FormHelperText color="white"></FormHelperText>

          <FormLabel>Email address</FormLabel>
          <Input bg="white" type="email" />
          <FormHelperText color="white">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        </Center>
        <Center>
        <ButtonGroup>
        <Button  mb ="4%">Add To Cart</Button>
            <Link to ="/services"><Button  mb ="4%">Go Back</Button></Link>
        </ButtonGroup>
        </Center>
     
    </Box>
    </Center>
  );
};

export default refactorSite;

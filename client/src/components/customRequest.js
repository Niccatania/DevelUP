import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
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
  ButtonGroup,
} from "@chakra-ui/react";
const customRequest = (props) => {
  return (
    <Center>
      <Box rounded={20} m="5%" w="80%" bg="teal.600">
        <Center>
          <Heading>Custom Request Form</Heading>
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
              Please give a description of what your request is.
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
        {/* <text> Total cost: {Project.Service.price}</text> */}
        </Center>
        <Center>
        
          <ButtonGroup>
            <Button mb="4%">Add To Cart</Button>
            <Link to="/services">
              <Button mb="4%">Go Back</Button>
            </Link>
          </ButtonGroup>
        </Center>

      </Box>
    </Center>

  );
};

export default customRequest;

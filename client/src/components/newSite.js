import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_USER_EMAIL } from "../utils/queries";
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
const NewSite = () => {
  const { loading, data } = useQuery(QUERY_USER_EMAIL);

  return (
    <Box m="5%" w="90%" bg ='teal.600'>
      <Center>
        <Heading>Create a New Site</Heading>
      </Center>
      <Center>
        <FormControl w="60%">
          <FormLabel>Email address</FormLabel>
          <Input bg ='white' type="email" value={data.user.email} />
          <FormHelperText color ="white">We'll never share your email.</FormHelperText>
          
          <FormLabel>Title</FormLabel>
          <Input bg ='white'type="name" />
          <FormHelperText color ="white">
            Please enter the title of the project.
          </FormHelperText>

          <FormLabel>
            Please give a description of what site you want built.
          </FormLabel>
          <Input bg ='white' type="description" />
          <FormHelperText color ="white"></FormHelperText>
          
        </FormControl>
      </Center>
      <Center>
        <ButtonGroup>
            <Button  mb ="4%">Submit</Button>
            <Link to ="/services/select"><Button  mb ="4%">Go Back</Button></Link>
        </ButtonGroup>
        </Center>
    </Box>
  );
};

export default NewSite;

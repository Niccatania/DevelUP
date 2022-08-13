import React, { useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER_EMAIL, QUERY_ALL_SERVICES } from "../utils/queries";
import { ADD_PROJECT } from "../utils/mutations";
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
const CustomRequest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { loading: loadingEmail, data: dataEmail } = useQuery(QUERY_USER_EMAIL);
  const { loading: loadingService, data: dataService } = useQuery(QUERY_ALL_SERVICES);

  const [addProject, { data, loading }] = useMutation(ADD_PROJECT);

  if (loadingEmail || loadingService) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescChange = (event) => setDescription(event.target.value);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      description: description,
      services: dataService.allServices[2]._id
    }

    try {
      const { data } = await addProject({ variables: {...formData}});

      setTitle('');
      setDescription('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box m="5%" w="90%" bg ='teal.600'>
      <Center>
        <Heading>Custom Request Form</Heading>
      </Center>
      <Center>
        <FormControl w="60%">
          <FormLabel>Email address</FormLabel>
          <Input bg ='white' type="email" defaultValue={dataEmail.user.email} />
          <FormHelperText color ="white">We'll never share your email.</FormHelperText>
          
          <FormLabel>Title</FormLabel>
          <Input bg ='white'type="title" value={title} onChange={handleTitleChange} />
          <FormHelperText color ="white">
            Please enter the title of the project.
          </FormHelperText>

          <FormLabel>
            Description
          </FormLabel>
          <Input bg ='white' type="description" value={description} onChange={handleDescChange} />
          <FormHelperText color ="white">Please give a description of what your request is.</FormHelperText>
          
        </FormControl>
      </Center>
      <Center>
        <ButtonGroup>
            <Button  mb ="4%" onClick={handleFormSubmit}>Submit</Button>
            <Link to ="/services/select"><Button  mb ="4%">Go Back</Button></Link>
        </ButtonGroup>
        </Center>
    </Box>
  );
};

export default CustomRequest;

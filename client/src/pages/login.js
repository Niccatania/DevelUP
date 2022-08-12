import React, { useState } from "react";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import { useMutation } from '@apollo/client';
import { LOGIN, ADD_USER } from '../utils/mutations';
import AuthService from '../utils/auth';
// Contains a login and signup form, we may nee d seperate these once the routes/ event handlers come in

function Login(props) {
  const [formState, setFormState] = useState({ loginEmail: '', loginPassword: ''});
  const [signState, setSignState] = useState({addEmail:'', addPassword:'' });
  const [login, { error }] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log("login form submitted");
    try {
      const mutationResponse = await login({
        variables: { email: formState.loginEmail, password: formState.loginPassword },
      });
      console.log(mutationResponse);
      const token = mutationResponse.data.login.token;
      console.log(token);
      AuthService.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log("signup submitting...")
    const mutationResponse = await addUser({
      variables: {
        email: signState.addEmail,
        password: signState.addPassword,
      },
    });
    const token = mutationResponse.data.addUser.token;
    console.log(token);
    AuthService.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setSignState({
      ...signState,
      [name]: value,
    });
  };
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="email@email.com"
          variant="filled"
          mb={3}
          name="loginEmail"
          type="email"
          onChange={handleChange}
        ></Input>
        <Input
          placeholder="*******"
          variant="filled"
          mb={3}
          name="loginPassword"
          type="password"
          onChange={handleChange}
        ></Input>
        <Button onClick={handleLoginSubmit} colorScheme="teal">Log In</Button>
      </Flex>
      <Flex direction="column" background="gray.100" ml={4} p={12} rounded={6}>
        <Heading mb={6}>Sign up</Heading>
        <Input
          placeholder="email@email.com"
          variant="filled"
          mb={3}
          name="addEmail"
          type="email"
          onChange={handleChange}
        ></Input>
        <Input
          placeholder="*******"
          variant="filled"
          mb={3}
          name="addPassword"
          type="password"
          onChange={handleChange}
        ></Input>
        <Button onClick={handleSignupSubmit} colorScheme="teal">Sign up</Button>
      </Flex>
    </Flex>
  );
};

export default Login;

import React from "react";

import {
  Container,
  Button,
  ButtonGroup,
  Center,
  Square,
  Circle,
  Box,
  Flex,
  Spacer,
  Heading,
  Avatar,
<<<<<<< HEAD
  Divider,
} from "@chakra-ui/react";

import Login from "./login";
import DevCard from "../components/devCard";
import DevData from "../components/devData"
import Navbar from "../components/NavBar";

const Landing = () => {
  return (
    <div>
      {/* make this part of the navbar? */}
      <box>
        {/* if logged out show login/signup */}
        <Button colorScheme="blue" to="/login" m="1%">
          Login/Signup
        </Button>
        {/* if logged in show profile btn */}
        <Button colorScheme="blue" to="/profile" m="1%">
          My Profile
        </Button>
      </box>

      <Center>
        {/* < Navbar /> */}
        <Heading> Fantastic Happiness!</Heading>
      </Center>

      <Divider orientation='horizontal' />
      <div>
      <Center>
        {" "}
        <h1 >Meet the Developers!</h1>
      </Center>
      </div>

     <div>
      < DevData />
     </div>
    </div>
    
=======
  Divider
} from "@chakra-ui/react";

const Landing = () => {
  return (
    <div>
      <box>
        {" "}
        <Button colorScheme="blue" to="/login">
          Login/Signup
        </Button>
      </box>

      <Center>
        <Heading> Fantastic Happiness!</Heading>
      </Center>
      <Divider orientation='horizontal' />

      <Center>
        {" "}
        <h1>Meet the Developers!</h1>
      </Center>
      <Flex>
        <Box bg="gray.400" w="200px" h="200px">
          <center>
            <h1>Tiffany Dempsey</h1>
            <Avatar name="Tiffany Dempsey" src="" />
          </center>
        </Box>
        <Spacer />
        <Box bg="gray.400" w="200px" h="200px">
          <center>
            <h1>Nic Catania</h1>
            <Avatar name="Nic Catania" src="" />
          </center>
        </Box>
        <Spacer />
        <Box bg="gray.400" w="200px" h="200px">
          <center>
            <h1>Supriya Sharma</h1>
            <Avatar name="Supriya Sharma" src="" />
          </center>
        </Box>
        <Spacer />
        <Box bg="gray.400" w="200px" h="200px">
          <center>
            <h1>Owen Greengo</h1>
            <Avatar name="Owen Greengo" src="" />
          </center>
        </Box>
      </Flex>
    </div>
>>>>>>> 8ab7758a (profile and checkout page)
  );
};

export default Landing;

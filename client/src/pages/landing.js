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
  Divider,
} from "@chakra-ui/react";

import Login from "./Login";
import DevCard from "../components/devCard";
import DevData from "../components/devData"
import Navbar from "../components/NavBar";

const Landing = () => {
  return (
    <div>
      {/* make this part of the navbar? */}
      <Box>
        {/* if logged out show login/signup */}
        <Button colorScheme="blue" to="/login" m="1%">
          Login/Signup
        </Button>
        {/* if logged in show profile btn */}
        <Button colorScheme="blue" to="/profile" m="1%">
          My Profile
        </Button>
      </Box>

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
    
  );
};

export default Landing;

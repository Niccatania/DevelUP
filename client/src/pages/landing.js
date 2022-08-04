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
  Divider
} from "@chakra-ui/react";

import Login from "./login";
import DevCard from "../components/devCard";
import DevData from "../components/devData"
import Navbar from "../components/NavBar";

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

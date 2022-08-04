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

const Landing = () => {
  return (
    <box>
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
        <Heading> Fantastic Happiness!</Heading>
      </Center>
      <Divider orientation="horizontal" />

      <Center mt="30%">
        {" "}
        <h1>Meet the Developers!</h1>
      </Center>
      <Flex>

        <Box bg="gray.400" w="200px" h="200px" m="2%">
          {/* add dev card components */}
          <center>
            <h1>Tiffany Dempsey</h1>
            <Avatar name="Tiffany Dempsey" src="" />
          </center>
        </Box>
        <Spacer />
        <Box bg="gray.400" w="200px" h="200px" m="2%">
           {/* add dev card components */}
          <center>
            <h1>Nic Catania</h1>
            <Avatar name="Nic Catania" src="" />
          </center>
        </Box>
        <Spacer />
        <Box bg="gray.400" w="200px" h="200px" m="2%">
           {/* add dev card components */}
          <center>
            <h1>Supriya Sharma</h1>
            <Avatar name="Supriya Sharma" src="" />
          </center>
        </Box>
        <Spacer />
        <Box bg="gray.400" w="200px" h="200px" m="2%">
           {/* add dev card components */}
          <center>
            <h1>Owen Greengo</h1>
            <Avatar name="Owen Greengo" src="" />
          </center>
        </Box>
      </Flex>
    </box>
  );
};

export default Landing;

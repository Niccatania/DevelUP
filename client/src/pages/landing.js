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
  );
};

export default Landing;

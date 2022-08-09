import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Container, Button, Center, Heading, Spacer,Box, Divider, ButtonGroup } from "@chakra-ui/react";

const Services = () => {
  return (
  <Center>
      <Box w="70%" h="80%" pb="10%" m="5%"bg ="gray.100">
        <Center>
          <Heading mt="10%"pb="3%">Select a Service:</Heading>
        </Center>
        <Center>
          <ButtonGroup>
          <Link to="/services/newsite">
            <Button colorScheme="teal">
              Create a Site From Scratch
            </Button>
          </Link>
          <Link to="/services/refactorsite">
          <Button colorScheme="teal">
            Refactor an Existing Site
          </Button>
          </Link>
          </ButtonGroup>
        </Center>
      </Box>
 </Center>

  );
};

export default Services;

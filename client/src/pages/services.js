import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Container, Button, Center, Heading, Spacer,Box, Divider } from "@chakra-ui/react";

const Services = () => {
  return (
    <div>
      <Box>
        <Center>
          <Heading mt="10%"pb="3%">Select a Service:</Heading>
        </Center>
        <Center>
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
        </Center>
      </Box>
    </div>
  );
};

export default Services;

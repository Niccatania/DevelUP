import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Container, Button, Center, Heading, Spacer } from "@chakra-ui/react";

const Services = () => {
  return (
    <div>
      <Container>
        <Center>
          <Heading pb="3%">Select a Service:</Heading>
        </Center>
        <Center>
          <Link to="/services/newsite">
            <Button m="3%" colorScheme="teal">
              Create a Site From Scratch
            </Button>
          </Link>
          <Spacer />
          <Link to="/services/refactorsite">
          <Button m="3%" colorScheme="teal">
            Refactor an Existing Site
          </Button>
          </Link>
        </Center>
      </Container>
    </div>
  );
};

export default Services;

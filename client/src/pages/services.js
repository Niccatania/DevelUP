import React from "react";
import {Link} from 'react-router-dom';
import {  Button, Center, Heading,Box, ButtonGroup } from "@chakra-ui/react";

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
          <Link to="/services/customRequest">
          <Button colorScheme="teal">
            Create Custom Request
          </Button>
          </Link>
          </ButtonGroup>
        </Center>
      </Box>
 </Center>

  );
};

export default Services;

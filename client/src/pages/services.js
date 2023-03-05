import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Container,
  Button,
  Center,
  Heading,
  Spacer,
  Box,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

const Services = () => {
  return (
    <Box
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      minH="100vh"
    >
      <Box w="90%" maxW="600px" p={5} mx="auto" my={20} bg="white" borderRadius="lg">
        <Center>
          <Heading as="h1" size="lg" mb={5} color="gray.800">
            Select a Service:
          </Heading>
        </Center>
        <Center>
          <ButtonGroup
            display={{ base: "flex", md: "row" }}
            flexDirection={{ base: "column", md: "row" }}
            mb={{ base: "1rem", md: "0" }}
          >
            <Link to="/services/new-site">
              <Button colorScheme="purple" size="lg" mb={{ base: "1rem", md: "0" }} _hover={{ boxShadow: "xl" }}>
                Create a Site From Scratch
              </Button>
            </Link>
            <Link to="/services/refactor-site">
              <Button colorScheme="purple" size="lg" mb={{ base: "1rem", md: "0" }} _hover={{ boxShadow: "xl" }}>
                Refactor an Existing Site
              </Button>
            </Link>
            <Link to="/services/custom-request">
              <Button colorScheme="purple" size="lg" mb={{ base: "1rem", md: "0" }} _hover={{ boxShadow: "xl" }}>
                Create Custom Request
              </Button>
            </Link>
          </ButtonGroup>
        </Center>
      </Box>
    </Box>
  );
};

export default Services;

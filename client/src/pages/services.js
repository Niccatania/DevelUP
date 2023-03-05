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
  Text,
  Flex
} from "@chakra-ui/react";

const Services = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Box bgGradient="linear(to-l, #7928CA, #FF0080)" py={20}>
        <Center>
          <Heading as="h1" size="lg" color="white">
            Select a Service:
          </Heading>
        </Center>
      </Box>
      <Container maxW="container.xl" mt={16} mb={20}>
  <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="center">
    <Box bg="white" borderRadius="lg" boxShadow="lg" w={{ base: "80%", md: "25%" }} p={8} m={4}>
            <Center>
              <Heading as="h2" size="md" mb={4}>
                Create a Site From Scratch
              </Heading>
            </Center>
            <Divider />
            <Text mt={4}>
              We can create a custom website for your business or personal brand from scratch. Our team of developers will work with you to create a site that reflects your unique style and meets your specific needs.
            </Text>
            <Center>
              <Link to="/services/new-site">
                <Button colorScheme="pink" size="md" my={4} mx={2}>
                  Get started
                </Button>
              </Link>
            </Center>
          </Box>

          <Box bg="white" borderRadius="lg" boxShadow="lg" w={{ base: "80%", md: "25%" }} p={8} m={4}>
            <Center>
              <Heading as="h2" size="md" mb={4}>
                Refactor an Existing Site
              </Heading>
            </Center>
            <Divider />
            <Text mt={4}>
              If you already have a website but it needs a new look or some updates, our team can help. We'll work with you to update the design and functionality of your site to better serve your needs and meet your goals.
            </Text>
            <Center>
              <Link to="/services/refactor-site">
                <Button colorScheme="pink" size="md" my={4} mx={2}>
                  Get started
                </Button>
              </Link>
            </Center>
          </Box>

          <Box bg="white" borderRadius="lg" boxShadow="lg" w={{ base: "80%", md: "25%" }} p={8} m={4}>
            <Center>
              <Heading as="h2" size="md" mb={4}>
                Create Custom Request
              </Heading>
            </Center>
            <Divider />
            <Text mt={4}>
              If you have a unique request or need that isn't covered by our other services, we can work with you to create a custom solution that meets your specific requirements. Our team has experience working on a wide range of projects and can handle even the most complex requests.
            </Text>
            <Center>
              <Link to="/services/custom-request">
                <Button colorScheme="pink" size="md" my={4} mx={2}>
                  Get started
                </Button>
              </Link>
            </Center>
          </Box>
        </Flex>
      </Container>
      </Box>
  );
};

export default Services;

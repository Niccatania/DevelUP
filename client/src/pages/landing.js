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
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Login from "./login";
import DevCard from "../components/devCard";
import DevData from "../components/devData"
import Navbar from "../components/NavBar";
import DevProfile from "./devProfile";
import Profile from "./clientProfile";

const services = [
  {
    name: "Web Design",
    icon: <i className="fas fa-paint-brush"></i>,
    description: "Create a beautiful and modern website that represents your brand."
  },
  {
    name: "Web Development",
    icon: <i className="fas fa-code"></i>,
    description: "Build a customized and responsive website that meets your specific needs."
  },
  {
    name: "Search Engine Optimization",
    icon: <i className="fas fa-search"></i>,
    description: "Optimize your website to rank higher on search engines and attract more visitors."
  },
  {
    name: "Social Media Marketing",
    icon: <i className="fab fa-instagram"></i>,
    description: "Promote your brand on social media platforms to increase your online presence."
  }
];

const Landing = () => {
  return (
    <div>
      <div>
        <Box mt={"125px"} mb={"125px"} ml={"20px"} mr={"20px"}>
          <Center>
            <Text
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontSize='6xl'
              fontWeight='extrabold'
            >
              DevelUp
            </Text>
          </Center>

          <Box textAlign="center" mt={8}>
            <Text fontSize="2xl" fontWeight="bold">
              Level up your business, media, or personal brand with a polished unique website.
            </Text>
            <Button
              mt={4}
              size="lg"
              colorScheme="pink"
              borderRadius="full"
            >
               <Link as={Link} to="/services/select">
                            Get Started
                        </Link>
          
            </Button>
          </Box>
        </Box>
      </div>

      <div>
        <DevData />
      </div>

      <Box bg="gray.100" py={12}>
        <Container maxW="6xl" textAlign="center">
          <Heading as="h2" size="xl" mb={6}>Our Services</Heading>

          <SimpleGrid columns={[1, null, 2, 4]} spacing={8}>
            {services.map(service => (
              <Box key={service.name} borderWidth="1px" borderRadius="lg" p={6}>
                <Box fontSize="3xl" mb={4}>
                  {service.icon}
                </Box>
                <Heading as="h3" size="md" mb={4}>{service.name}</Heading>
                <Text>{service.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
};

export default Landing;

import React from "react";
// import "./index.css";
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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import Login from "./login";
import DevCard from "../components/devCard";
import DevData from "../components/devData"
import Navbar from "../components/NavBar";
import DevProfile from "./devProfile";
import Profile from "./clientProfile";

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
    Get started
  </Button>
  
</Box>
</Box>
       
     </div>
     
    <div>
      
     < DevData />
    
    </div>
   
   </div>
  
 );
};
export default Landing;
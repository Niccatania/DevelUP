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

import Login from "./login";
import DevCard from "../components/devCard";
import DevData from "../components/devData"
import Navbar from "../components/NavBar";
import DevProfile from "./devProfile";
import Profile from "./clientProfile";
const Landing = () => {
  return (
    <div>
    <Center>
    <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
DevelUp
</Text>
       <Heading > </Heading>
     </Center>
     <Divider  orientation='horizontal' />
     <div >
      {/* <Profile /> */}
      <Box m={"9rem"}>
        <Text 
        color='#10575e'
         fontSize='4xl'
         fontWeight='bold'
         >
        Are you ready to Level up your business or personal website? The DevelUp team are here to create a polished website to fit your vision, or to assist you in creating one.
        </Text>
      </Box>
     <Center >
     <Text
  bgGradient='linear(to-l, #7928CA, #10575e)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  Meet the Developers!
</Text>
     </Center>
     </div>
     
    <div>
      
     < DevData />
    
    </div>
   
   </div>
  
 );
};
export default Landing;


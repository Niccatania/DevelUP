import React from "react";
import { SimpleGrid } from '@chakra-ui/react' 
import "./index.css"

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
  } from "@chakra-ui/react";
  
const Navbar = () => {
    return(
       
        <div>
            <nav className="navBar">
            <ul className="listClass">
                <li className="listClass">Home</li>
                <li>Services</li>
                <li>Team</li>
                <li>client</li>
                <Box>
       {" "}
       <Button className="btn" colorScheme="blue" to="/login">
         Login/Signup
       </Button>
    
     </Box>
            </ul>
         </nav> 
         </div>
       
        
    )
}
export default Navbar
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
  import { Link } from "react-router-dom";

const Navbar = () => {
    return(
       
        <div>
            <nav className="navBar">
            <ul className="listClass">
                <li>
                <Link to="/" >
                Home</Link>
                </li>
                
                
               
                <li>
                <Link to="/Login" >
                Login</Link>
                </li>
                
                <li>Team</li>
                <li>client</li>
                </ul>
                <Box>
       {" "}
       <Button className="loginBtn" colorScheme="blue" to="/Login">
         Login/Signup
       </Button>
    
     </Box>
           
         </nav> 
         </div>
       
        
    )
}
export default Navbar
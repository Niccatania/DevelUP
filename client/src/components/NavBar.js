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
                <li>
                <Link to="/DevProfile" >
                Developer Profile</Link>
                </li>
                <li>Client
                </li>
                <li>Contact us</li>
                </ul>
                
                <Box>
       {" "}
       <Button className="loginBtn" colorScheme="blue">
        <Link to="/Login" >
         Login/Signup
         </Link>
       </Button>
    
     </Box>
           
         </nav> 
         </div>
       
        
    )
}
export default Navbar
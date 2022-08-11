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
                <li className="ind">
                <Link to="/" >
                Home</Link>
                </li>
                <li className="ind">
                <Link to="/Login" >
                Login</Link>
                </li>
                <li className="ind">
                <Link to="/DevProfile" >
                Developer Profile</Link>
                </li>

                <li className="ind">
                <Link to="/ClientProfile">
                    Client Profile</Link>
                </li>
                
                {/* <li className="ind" >Start a project</li>
                <li className="ind">Cart</li>
                <li className="ind">Contact us</li> */}
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
import React from "react";
import Auth from "../utils/auth";
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

        function showLoginLogout() {
            if (Auth.loggedIn()) {
                return (
                    <>
                        <li className="ind">
                        <Link to="/" onClick={() => Auth.logout()}>
                        Logout</Link>
                        </li>
                        <li className="ind">
                        <Link to="/ClientProfile">
                        Client Profile</Link>
                        </li>
                    </>
                );
            } else {
                return (
                    <li className="ind">
                    <Link to="/Login" >
                    Login</Link>
                    </li>
                );
            }
        }
       
    return (
        <div>
            <nav className="navBar">
            <ul className="listClass">
                <li className="ind">
                <Link to="/" >
                Home</Link>
                </li>
                {showLoginLogout()}
                {/* <li className="ind">
                <Link to="/DevProfile" >
                Developer Profile</Link>
                </li> */}
                
                <li className="ind" >
                    <Link to="/Services">Start a project
                    </Link>
                    </li>
                {/* 
                <li className="ind">Cart</li>
                <li className="ind">Contact us</li> */}
                </ul>
                
                {/* <Box>
       {" "}
       <Button className="loginBtn" colorScheme="blue">
        <Link to="/Login" >
         Login/Signup
         </Link>
       </Button>
    
     </Box>
            */}
         </nav> 
         </div>
       
        
    );
}
export default Navbar
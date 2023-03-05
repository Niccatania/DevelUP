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
                        <Link to="/client-profile">
                        Client Profile</Link>
                        </li>
                    </>
                );
            } else {
                return (
                    <li className="ind">
                    <Link to="/login" >
                    Login</Link>
                    </li>
                );
            }
        }
       
    return (
        
             <Box bgGradient="linear(to-l, #7928CA, #FF0080)">
            <nav className="navBar">
                <Box as="ul" className="listClass">
                    <Box as="li" className="ind">
                        <Link as={Link} to="/">
                            Home
                        </Link>
                    </Box>
                    {showLoginLogout()}
                    <Box as="li" className="ind">
                        <Link as={Link} to="/services/select">
                            Start a project
                        </Link>
                    </Box>
                </Box>
            </nav>
        </Box>
        
       
        
    );
}
export default Navbar
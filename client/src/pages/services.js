
import React from "react";


import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import NewSite from "../components/newSite";
import RefactorSite from "../components/refactorSite";
import CustomRequest from "../components/customRequest";
import { Container, Button, Center, Heading, Spacer,Box, Divider, ButtonGroup } from "@chakra-ui/react";


const Services = () => {
  return (
  <Center>
      <Box w="70%" h="80%" pb="10%" m="5%"bg ="gray.100">
        <Center>

          <Heading color='#10575e' mt="10%"pb="3%">Select a Service:</Heading>
        </Center>
        <Center>
          <ButtonGroup>
          <Link to="/services/new-site">
            <Button colorScheme="teal">
              Create a Site From Scratch
            </Button>
          </Link>
          <Link to="/services/refactor-site">
            <Button colorScheme="teal">
              Refactor an Existing Site
            </Button>
          </Link>
          <Link to="/services/custom-request">
            <Button colorScheme="teal">
              Create Custom Request
            </Button>
          </Link>
          </ButtonGroup>
        </Center>
      </Box>
 </Center>
 );
};

export default Services;

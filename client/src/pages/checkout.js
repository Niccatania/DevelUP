import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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

import Cart from "../components/cart";

const Checkout = () => {
  return (
    <Center>
      <Box>
       <Box>
        <Heading pt="5%">Your Cart:</Heading>
        </Box>
      
        <Box>
          <Avatar>Username </Avatar>
        </Box>
        <Center>
          <Container>
            <Cart />
          </Container>
        </Center>
        <Link to="/checkout/create-checkout-session">
          <Button>Checkout</Button>
        </Link>
      </Box>
    </Center>
  );
};

export default Checkout;

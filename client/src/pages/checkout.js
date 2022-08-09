import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useRadio,
} from "@chakra-ui/react";

import Cart from "../components/cart";
import { useDeprecatedAnimatedState } from "framer-motion";

const Checkout = (props) => {
  return (
    <div>
      <Avatar>{props.userData.username} </Avatar>
      <Divider></Divider>
      <Cart />
      <Link to="/checkout/create-checkout-session">
      <Button>Checkout</Button>
      </Link>
    </div>
  );
};

export default Checkout;

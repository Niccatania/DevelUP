import React from "react";

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

import Cart from "../components/cart"
import { useDeprecatedAnimatedState } from "framer-motion";



const Checkout = (props) => {
    return (
        <div>
            <Avatar>{props.userData.username} </Avatar>
            <Divider></Divider>
            <Cart />
        </div>
    );
}

export default Checkout; 
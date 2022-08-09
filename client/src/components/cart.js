import React from "react";
import {
  Button,
  Box,
  Spacer,
  Avatar
} from "@chakra-ui/react";

const Cart = (props) => {
    return (
        <>
            <Avatar>{props.userData.username}</Avatar>
        </>
    )
}

export default Cart;

import React from "react";
import {
  Button,
  Box,
  Spacer,
  Divider,
  Avatar,
  Container

} from "@chakra-ui/react";
import CheckoutForm from "./checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const cart = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };
  return (
    <Container>
      <Box bg="gray.100">
        <p>Cart Item</p>
      </Box>
      <Box bg="gray.100">
        <p>Cart Item</p>
      </Box>
      <Box bg="gray.100">
        <p>Cart Item</p>
      </Box>
      <Box bg="gray.100">
        <p>Cart Item</p>
      </Box>
    </Container>
  );

};

export default cart;

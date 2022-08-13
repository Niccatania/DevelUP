import React from "react";

// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../utils/queries";

// import { Link } from "react-router-dom";

import {


  Box,

  Container,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Avatar,
  Divider,
  TableContainer,
  li,
  liead,
  Tbody,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/react";

const ClientProfile =(props) => {

  return (
    <div>
         <Avatar w="10rem" h="10rem"  m="3%"  src={`${process.env.PUBLIC_URL}${"/assets/pRudd.jpeg"}`}>
          
        </Avatar>
       
        <Heading mb="2rem">Your Projects</Heading>  
        
               <Box border={"solid"}>
                <ul>
                <li>Project Title</li>
                <li>Status</li>
                <li isNumeric>Cost</li>
                <li> Paid Status</li>
                <li>Developer(s)</li>
                <li>Make Payment</li>
                </ul>
              </Box>
              <Box border={"solid"}>
                <ul>
                <li>Site Title</li>
                <li>Complete/ In progress</li>
                <li isNumeric>$400.00</li>
                <li>Not Paid</li>
                <li>Tiffany, Supriya, Nic, Owen </li>
                {/* link to Cart */}
                <li>
                  {" "}
                  <Button>Make Payment</Button>
                </li>
                </ul>
              </Box>
              <Box>
              <ul>
                <li>Site Title</li>
                <li>Complete/ In progress</li>
                <li isNumeric>$800.00</li>
                <li> Not Paid</li>
                <li>Tiffany, Supriya, Nic, Owen </li>
                {/* link to Cart */}
                <li>
                  {" "}
                  <Button>Make Payment</Button>
                </li>
                </ul>
              </Box>
            
        </div>
   
  );
}

export default ClientProfile;


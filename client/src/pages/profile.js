import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import { Link } from "react-router-dom";

import {
  Container,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Avatar,
  Divider,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spacer,
  SimpleGrid,
  Box
} from "@chakra-ui/react";

const Profile =(props) => {

  return (
    <div>
      <Center>
        <Avatar w="10rem" h="10rem" p="2%" m="3%">
          {" "}
          {/* {user.Username} */}
        </Avatar>
      </Center>
      <Center>
        <Heading mb="2rem">Your Projects</Heading>
      </Center>
      <Divider></Divider>
      <Center>
        <TableContainer w="80%">
          <TableContainer variant="simple">
            {/* Link button to Services Page */}
            <TableCaption>
              {" "}
              <Button>Start New Project</Button>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Project Title</Th>
                <Th>Status</Th>
                <Th isNumeric>Cost</Th>
                <Th> Paid Status</Th>
                <Th>Developer(s)</Th>
                <Th>Make Payment</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Site Title</Td>
                <Td>Complete/ In progress</Td>
                <Td isNumeric>$400.00</Td>
                <Td>Not Paid</Td>
                <Td>Tiffany, Supriya, Nic, Owen </Td>
                {/* link to Cart */}
                <Td>
                  {" "}
                  <Button>Make Payment</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Site Title</Td>
                <Td>Complete/ In progress</Td>
                <Td isNumeric>$400.00</Td>
                <Td> Paid </Td>
                <Td>Tiffany, Supriya, Nic, Owen </Td>
                {/* link to Cart */}
                <Td>
                  {" "}
                  <Button>Make Payment</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Site Title</Td>
                <Td>Complete/ In progress</Td>
                <Td isNumeric>$800.00</Td>
                <Td> Not Paid</Td>
                <Td>Tiffany, Supriya, Nic, Owen </Td>
                {/* link to Cart */}
                <Td>
                  {" "}
                  <Button>Make Payment</Button>
                </Td>
              </Tr>
            </Tbody>
          </TableContainer>
        </TableContainer>
      </Center>
    </div>
  );
}

export default Profile;

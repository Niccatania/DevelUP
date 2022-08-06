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
} from "@chakra-ui/react";

const profile = () => {
  return (
    <div>
      <Center>
        <Avatar w="10rem" h="10rem" p="2%" m ="3%">
          {" "}
          Username
        </Avatar>
      </Center>
      <Center>
        <Heading mb ="2rem">Your Projects</Heading>
      </Center>
      <Divider></Divider>
      <Center>
      <TableContainer w="80%">
        <Table variant="simple">
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
        </Table>
      </TableContainer>
      </Center>
    </div>
  );
};

export default profile;

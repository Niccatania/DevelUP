import React from "react";
import {
  Button,
  Center,
  Heading,
  Avatar,
  Divider,
  Thead,
  Table,

  Tbody,
  Tr,
  Th,
  Td,
  Table,
  Thead,
  Tfoot,
  TableContainer,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <div>
      <Center>
        <Avatar w="10rem" h="10rem" p="2%" m="3%"></Avatar>
      </Center>
      <Center>
        <Heading mb="2rem">Your Projects</Heading>
      </Center>
      <Divider></Divider>
      <Center>
        <TableContainer>
          <Table varient ='striped' colorScheme='teal'>
            <TableCaption>
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
                <Td>
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

export default Profile;

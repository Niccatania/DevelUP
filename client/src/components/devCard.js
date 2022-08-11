import React from "react";
import {
  Button,
  Box,
  Spacer,
} from "@chakra-ui/react";
// SimpleGrid is keeping our cards in the row and making them responsive
import { SimpleGrid } from '@chakra-ui/react' 
const devCard = (props) => {
  return (
    <div>
      <SimpleGrid minChildWidth='120px' spacing='40px'>
{/* Here we use a map to render our devCards with prop data provided in DevData */}
      {props.devData.map((dev) => {
        return (
          <div key={dev.id}>
                    <Box bg="gray.400" w="200px" h="200px">
                      <center>
                        <h1>{dev.name}</h1>
                        <img
                          alt="Developer profile"
                          src={`${process.env.PUBLIC_URL}${dev.image}`}
                        />
                        <Button colorScheme="blue" to="/devProfile/user">
                          View Profile
                        </Button>
                      </center>
                    </Box>
                    <Spacer />            
          </div>    
        );
      })}
         </SimpleGrid>
</div>
  );
};
export default devCard;

import React from "react";
import {Button, Box, Spacer, Avatar,} from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react' 
import { Link } from "react-router-dom";
const devCard = (dev) => {
  return (
    <div className="rcorners1">
     <Box >
      <SimpleGrid minChildWidth='120px' spacing='40px'>
            <div className="cardClass">
            <Box bg="#9DCBBA" w="300px" h="400px" borderRadius="25px">
            <Box   color="aliceblue" bg="06A77D" w="300px"  borderRadius="25px">
                    <Box bg="#005377" w="300px" h="300px" borderRadius="25px">
                        <Avatar></Avatar>
                        <p>{dev.DevId}</p>
                    </Box>
                    </Box>
                    </Box>
                    </div>
                    <Spacer />     
         </SimpleGrid>
         </Box>
</div>
  );
  };
export default devCard;
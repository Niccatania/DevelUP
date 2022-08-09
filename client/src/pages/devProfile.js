import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  Box, 
  Spacer
 
} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react' 
const DevProfile = (props) => {
    return(
    
    <div>
      <h1>THis is DEV PROFILE!!!1</h1>
      {/* <SimpleGrid minChildWidth='120px' spacing='40px'>
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
                      </center>
                    </Box>
                    <Spacer />            
          </div>    
        );
      })}
         </SimpleGrid> */}
</div>
  );
};

export default DevProfile;


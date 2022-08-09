import React from "react";
import {
  Button,
  Box,
  Spacer,
} from "@chakra-ui/react";
import "./index.css"
// SimpleGrid is keeping our cards in the row and making them responsive
import { SimpleGrid } from '@chakra-ui/react' 
import { Link } from "react-router-dom";
const devCard = (props) => {
  return (
    <div>
      <SimpleGrid minChildWidth='120px' spacing='40px'>
{/* Here we use a map to render our devCards with prop data provided in DevData */}
      {props.devData.map((dev) => {
        return (
          <div key={dev.id}>
            <div className="cardClass">
            <Box bg="#9DCBBA" w="300px" h="400px">
            <Box   color="aliceblue" bg="06A77D" w="300px" h="00px" border= 'px'>
                    <Box bg="#005377" w="300px" h="300px">
                      <center>
                        <h1>{dev.name}</h1>
                        <img
                         borderRadius='full'
                         boxSize='10px'
                          alt="Developer profile"
                          src={`${process.env.PUBLIC_URL}${dev.image}`}
                        />
                        <Link to="/DevProfile" >
                        <Button colorScheme="blue" to="/devProfile/user">
                          View Profile
                        </Button>
                        </Link>
                      </center>
                    </Box>
                    </Box>
                    </Box>
                    </div>
                    <Spacer />            
          </div>    
        );
      })}
         </SimpleGrid>
</div>
  );
};
export default devCard;

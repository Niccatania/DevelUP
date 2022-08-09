import React from "react";
import {
  Button,
  Box,
  Spacer,
  Avatar,
  WrapItem,
  List,
  ListItem,
  ListIcon,
  

} from "@chakra-ui/react";
import "./index.css"
// SimpleGrid is keeping our cards in the row and making them responsive
import { SimpleGrid } from '@chakra-ui/react' 
import { Link } from "react-router-dom";
const devCard = (props) => {
  return (
    <div className="rcorners1">
     <Box >
      <SimpleGrid minChildWidth='120px' spacing='40px'>
{/* Here we use a map to render our devCards with prop data provided in DevData */}
      {props.devData.map((dev) => {
        return (
          <div key={dev.id}>
            <div className="cardClass">
            <Box bg="#4EA699" w="300px" h="400px" borderRadius="25px">
            <Box   color="aliceblue" bg="#7CFFC4" w="300px"  borderRadius="25px">
                    <Box bg="#4EA699" w="300px" h="300px" borderRadius="25px">
                      <center>
                        <h1>{dev.name}</h1>
                        {/* <img
                         borderRadius='full'
                         boxSize='10px'
                          alt="Developer profile"
                          src={`${process.env.PUBLIC_URL}${dev.image}`}
                        /> */}
                          
    <Avatar size='2xl' name='Developer' src={`${process.env.PUBLIC_URL}${dev.image}`} />

                         
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
         </Box>
</div>
  );
};
export default devCard;

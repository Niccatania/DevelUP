import React from "react";
import devData from "./devData";
import {
  Button,
  Box,
  Spacer,
  Avatar,
  WrapItem,
  List,
  ListItem,
  ListIcon,
  Flex
  

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
          <div Flex>
          <div Flex key={dev.devId}>
            <div Flex className="cardClass">
            <Box Flex bg="#4EA699" w="300px" h="400px" borderRadius="25px">
            <Box Flex  color="aliceblue" bg="#7CFFC4" w="300px"  borderRadius="25px">
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
 
                        
                        <ul>
                        <a href={dev.portfolio}>
                        <Button colorScheme="blue"  to="/devProfile/">
                          Portfolio
                        </Button>
                        </a>
                          <Link to="{dev.github}">
                            <p>Github</p></Link>
                          <a href={dev.portfolio}><p>portfolio</p> </a>
                          <Link to="{dev.linkedin}"><p>linkedin</p></Link>

                        </ul>
                        <Button colorScheme="purple"  to="/devProfile/">
                          Hire me!
                        </Button>

                        {/* <ul>
                          <li>
                            mad good website maker
                          </li>
<p>Super good skills</p>
<li>
                            best sites ever
                          </li>
</ul> */}
{/* <Button colorScheme="green" m={"9rem"} to="/devProfile/user">
                          Hire me!
                        </Button> */}
                      </center>
  
                    </Box>
                    </Box>
                    </Box>
                    </div>
                    <Spacer />  

          </div>    
          </div>
        );
      })}
         </SimpleGrid>
         </Box>
</div>

  );
};
export default devCard;
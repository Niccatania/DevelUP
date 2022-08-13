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
  Flex,
} from "@chakra-ui/react";
import "./index.css";
// SimpleGrid is keeping our cards in the row and making them responsive
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const devCard = (props) => {
  return (
    <div className="rcorners1">
      <Box>
        <SimpleGrid minChildWidth="120px" spacing="40px">
          {/* Here we use a map to render our devCards with prop data provided in DevData */}
          {props.devData.map((dev) => {
            return (
              <div Flex>
                <div Flex key={dev.devId}>
                  <div Flex className="cardClass">
                    <Box
                      Flex
                      bg="#4EA699"
                      w="300px"
                      h="400px"
                      borderRadius="25px"
                    >
                      <Box
                        Flex
                        color="aliceblue"
                        bg="#7CFFC4"
                        w="300px"
                        borderRadius="25px"
                      >
                        <Box
                          bg="#4EA699"
                          w="300px"
                          h="300px"
                          borderRadius="25px"
                        >
                          <center>
                            <h1>{dev.name}</h1>

                            <Avatar
                              size="2xl"
                              name="Developer"
                              src={`${process.env.PUBLIC_URL}${dev.image}`}
                            />
                            <Box bg="#4EA679"
                            w="300px"
                            h="160px">
                            <ul>
                              
                              <a href={dev.portfolio}>
                                <Button
                                size="lg"
                                  m="1rem"
                                  colorScheme="blue"
                                  // to="/devProfile/"
                                >
                                  Portfolio
                                </Button>
                              </a>
                             
                              
                              <a href={dev.github}>
                              <Button
                              size="lg"
                                  m="1rem"
                                  colorScheme="blue"
                                  // to="/github/"
                                >
                                 GitHub
                                </Button>
                              </a>
                             
                              {/* <li>
                              <a href={dev.linkedin}>
                              <Button
                              size="lg"
                                  m="1rem"
                                  colorScheme="blue"
                                  to="/github/"
                                >
                               linkedin
                                </Button>
                              </a>
                              </li> */}
                            </ul>
                            <Link to="/services/select">
                              <Button size="lg" m="1.2rem" colorScheme="purple">
                                Hire me!
                              </Button>
                            </Link>
                            </Box>
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

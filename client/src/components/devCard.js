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
  Flex, Card, CardHeader,Heading,Text,IconButton,BsThreeDotsVertical,CardBody,Image,CardFooter,BiChat,BiShare,BiLike

} from "@chakra-ui/react";
import "./index.css";
// SimpleGrid is keeping our cards in the row and making them responsive
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const devCard = () => {
  return (
    <div>

    </div>
    // <Box>
    //   <SimpleGrid minChildWidth="120px" spacing="40px">
    //     {props.devData.map((dev) => {
    //       return (
    //         <Box 
    //           key={dev.devId}
    //           bg="#4EA699"
    //           borderRadius="25px"
    //           w={{ xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "%" }}
    //           h={{ xs: "400px", sm: "400px", md: "400px", lg: "400px", xl: "400px" }}
    //         >
    //           <Box 
    //             color="aliceblue"
    //             bg="#7CFFC4"
    //             borderRadius="25px"
    //             w={{ xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
    //           >
    //             <Box
    //               bg="#4EA699"
    //               borderRadius="25px"
    //               w={{ xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
    //               h={{ xs: "300px", sm: "300px", md: "300px", lg: "300px", xl: "300px" }}
    //             >
    //               <center>
    //                 <h1>{dev.name}</h1>
    //                 <Avatar
    //                   size="2xl"
    //                   name="Developer"
    //                   src={`${process.env.PUBLIC_URL}${dev.image}`}
    //                 />
    //                 <Box 
    //                   bg="#4EA679"
    //                   w={{ xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
    //                   h={{ xs: "160px", sm: "160px", md: "160px", lg: "160px", xl: "160px" }}
    //                 >
    //                   <ul>
    //                     <a href={dev.portfolio}>
    //                       <Button
    //                         size="lg"
    //                         m="1rem"
    //                         colorScheme="blue"
    //                       >
    //                         Portfolio
    //                       </Button>
    //                     </a>
    //                     <a href={dev.github}>
    //                       <Button
    //                         size="lg"
    //                         m="1rem"
    //                         colorScheme="blue"
    //                       >
    //                         GitHub
    //                       </Button>
    //                     </a>
    //                   </ul>
    //                   <Link to="/services/select">
    //                     <Button size="lg" m="1.2rem" colorScheme="purple">
    //                       Hire me!
    //                     </Button>
    //                   </Link>
    //                 </Box>
    //               </center>
    //             </Box>
    //           </Box>
    //         </Box>
    //       );
    //     })}
    //   </SimpleGrid>
    // </Box>
  );
};
export default devCard
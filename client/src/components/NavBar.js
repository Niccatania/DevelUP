import React from "react";
import { SimpleGrid } from '@chakra-ui/react' 
const Navbar = () => {
    return(
       
        
             <SimpleGrid minChildWidth='120px' spacing='40px'>
                <div>
         <nav >
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Team</li>
                <li>client</li>
            </ul>
         </nav> 
         </div>
         </SimpleGrid>
       
    )
}
export default Navbar
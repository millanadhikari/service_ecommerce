import { Box, Flex, Grid, GridItem, Heading, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import Addon from "./Addon";

// interface Props {
//   addons: [];
//   setAddons: React.Dispatch<React.SetStateAction<[]>>;
// }
const Addons = ({ addons, setAddons, bloading }) => {
  return (
    <Box
      
      rounded="md"
      py={{ base: 8, md: 16 }}
      px={{ base: "1", md: "16" }}
      my={{ md: 10 }}
      backgroundColor="gray.100"
      w="100%"
    >
      {!bloading && <Heading fontSize={14} pl={{ md: 5 }}>
        Please select from following options: 
      </Heading>}

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        my={5}
        w="100%"
        
      >
       <>
        {addons.map((item) => (
          <GridItem mx={4} key={item.id} my={{md:4}}>
           {!bloading ? 
           <Addon item={item} addons={addons} setAddons={setAddons} /> :
           <Skeleton h="50px" w="180px" rounded="md" my={3} mx="auto" /> }
           
          </GridItem>
        ))}</> 
        
     

      </Grid>
    </Box>
  );
};

export default Addons;


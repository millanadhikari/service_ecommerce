import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import Addon from "./Addon";

// interface Props {
//   addons: [];
//   setAddons: React.Dispatch<React.SetStateAction<[]>>;
// }
const Addons = ({ addons, setAddons }) => {
  return (
    <Flex
      flexDirection="column"
      rounded="md"
      py={{ base: 8, md: 16 }}
      px={{ base: "1", md: "16" }}
      my={{ md: 10 }}
      backgroundColor="gray.100"
      w="100%"
    >
      <Heading fontSize={16} pl={{ md: 5 }}>
        Please select from following options:
      </Heading>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        my={5}
      >
        {addons.map((item) => (
          <GridItem mx={4} key={item.id}>
            <Addon item={item} addons={addons} setAddons={setAddons} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Addons;

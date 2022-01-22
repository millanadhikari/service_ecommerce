import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Addon = ({ item, addons, setAddons }) => {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    addons && addons.map((addon) => addon.id === item.id && setMatch(!match));
    console.log(addons);
  }, [addons]);
  return (
    <Flex
      position="relative"
      alignItems="center"
      justifyContent="center"
      my={4}
      border="1px solid gray"
      flexDirection="column"
      borderColor="blue.500"
      w="150px"
      h="150px"
      px={5}
      backgroundColor={match ? 'blue.600' : 'white'}
      color={!match ? 'blue.600' : 'white'}
      rounded="md"
      cursor="pointer"
      pl={6}
      onClick={() => setAddons([{ ...addons }, item])}
    >
      <Box mr={3} fontSize="40px" textAlign="center" mx="auto" >
        {item.icon}
      </Box>
      

      <Box fontWeight="semibold" textAlign="center" mt={3} >
        {item.title}
      </Box>
     {match &&  <Box position="absolute" right="2" top="0"><CheckCircleIcon/></Box>}
    </Flex>
  );
};

export default Addon;

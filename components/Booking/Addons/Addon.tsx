import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Admin/app/hooks";
import { setAdons } from "../customerBookingSlice";

const Addon = ({ item, addons, setAddons }) => {
  const [match, setMatch] = useState(false);
  const dispatch = useAppDispatch();
  const adon = useAppSelector((state) => state.cBookings.cBookings.addons);

  const handleAdd = () => {
    // setAddons([ ...addons , item])
    // const newAddons = addons.filter(a => a.id !== item.id)

    const newData = addons.map((addon) => {
      if (addon.id === item.id) {
        return {
          ...addon,
          complete: !addon.complete,
        };
      }
      return addon;
    });

    setAddons(newData);
  };
  // match && setAddons(newAddons)

  useEffect(() => {
    dispatch(setAdons(addons.map((adon) => {
      if(adon.isSelected) { 
        adon
      }
    })));
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
      w="140px"
      h="120px"
      px={5}
      backgroundColor={item.complete ? "blue.600" : "white"}
      color={!item.complete ? "blue.600" : "white"}
      rounded="md"
      cursor="pointer"
      pl={6}
      pb={4}
      onClick={handleAdd}
    >
      <Box mr={3} fontSize="26px" textAlign="center" mx="auto">
        {item.icon}
      </Box>

      <Box fontWeight="semibold" textAlign="center" mt={3} fontSize="13px">
        {item.title}
      </Box>
      {item.complete && (
        <Box position="absolute" right="2" top="0">
          <CheckCircleIcon />
        </Box>
      )}
      {item.complete && (
        <Box position="absolute" right="2" bottom="1">
          x 1
        </Box>
      )}
      {/* {item.complete && (
        <Box position="absolute" left="2" bottom="1">
          + 0 -
        </Box>
      )} */}
    </Flex>
  );
};

export default Addon;

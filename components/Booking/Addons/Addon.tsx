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
    dispatch(
      setAdons(
        addons.map((adon) => {
          if (adon.isSelected) {
            adon;
          }
        })
      )
    );
  }, [addons]);
  return (
    <Flex>
      <Flex
        position="relative"
        alignItems="center"
        my={4}
        border="1px solid gray"
        borderColor="blue.500"
        textAlign="left"
        px={5}
        py={6}
        gap={4}
        w="100%"
        backgroundColor={item.complete ? "blue.600" : "white"}
        color={!item.complete ? "blue.600" : "white"}
        rounded="md"
        cursor="pointer"
        onClick={handleAdd}
      >
        <Box fontSize="23px" textAlign="center">
          {item.icon}
        </Box>

        <Box fontWeight="semibold" textAlign="center" fontSize="12px">
          {item.title}
        </Box>
        {item.complete && (
          <Box position="absolute" right="2" top="0" fontSize="12px">
            <CheckCircleIcon />
          </Box>
        )}
        {item.complete && (
          <Box position="absolute" right="2" bottom="1" fontSize="11px">
            x 1
          </Box>
        )}
        {/* {item.complete && (
        <Box position="absolute" left="2" bottom="1">
          + 0 -
        </Box>
      )} */}
      </Flex>
      <Box>lkjsdf</Box>
    </Flex>
  );
};

export default Addon;

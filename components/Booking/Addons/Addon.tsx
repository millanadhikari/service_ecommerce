import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { GiCoinsPile } from "react-icons/gi";
import { MdAddCircle } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../Admin/app/hooks";
import { defaultAdons, removeAdons, setAdons } from "../customerBookingSlice";

const Addon = ({ item, addons, setAddons }) => {
  const [match, setMatch] = useState(false);
  const dispatch = useAppDispatch();
  const adon = useAppSelector((state) => state.cBookings.cBookings.addons);
  const [quan, setQuan] = useState(0);

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
   
    quan == 0 && setAddons(newData);

    dispatch(setAdons({ ...item, complete:!item.complete, quantity: quan + 1 }));
    setQuan(quan + 1)
  };

  useEffect(() => {
    !item.complete && dispatch(setAdons({ ...item}))
    !item.complete && setQuan(0)
    
     },[item]);
  return (
    <Flex alignItems="center" flexDirection={{md:'column'}} gap={{base:4, md:0}}>
      <Flex
        position="relative"
        alignItems="center"
        my={2}
        border="1px solid gray"
        borderColor="blue.500"
        textAlign="left"
        px={5}
        py={4}
        gap={4}
        w={{base:"60%", sm: "100%", md:"220px"}}
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
            x {quan}
          </Box>
        )}
        {/* {item.complete && (
        <Box position="absolute" left="2" bottom="1">
          + 0 -
        </Box>
      )} */}
      </Flex>
      {item.complete && (
        <Flex alignItems="center" gap={4} fontSize="18px">
          <Text color="green.600">
            <MdAddCircle
              cursor="pointer"
              onClick={() => {
                setQuan(quan + 1);
                dispatch(setAdons({ ...item, quantity: quan + 1}));
              }}
            />
          </Text>
          <Text>{quan}</Text>
          <Text color="red.500">
            <AiFillMinusCircle
              cursor="pointer"
              onClick={() => {
                quan > 1 && setQuan(quan - 1);
                quan > 1 ? dispatch(setAdons({ ...item, quantity: quan - 1 })) : dispatch(setAdons({ ...item, quantity: 1 }))
              }}
            />
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Addon;

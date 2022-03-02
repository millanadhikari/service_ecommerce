import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { BiBed } from "react-icons/bi";
import { FaToilet } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../Admin/app/hooks";
import { setBedroom, setToilet } from "../../customerBookingSlice";
const arr2 = [
  {id: 0, num:0, price: 150}, 
  {id: 1, num:1, price: 200}, 
  {id: 2, num:2, price: 250}, 
  {id: 3, num:3, price: 380}, 
  {id: 4, num:4, price: 450}, 
  {id: 5, num:5, price: 500}, 
  {id: 6, num:6, price: 580}, 
  {id: 7, num:7, price: 720}
]

const arr3 = [
  
  {id: 1, num:1, price: 50}, 
  {id: 2, num:2, price: 100}, 
  {id: 3, num:3, price: 150}, 
  {id: 4, num:4, price: 200}, 
  {id: 5, num:5, price: 250}, 
  {id: 6, num:6, price: 300}, 
  {id: 7, num:7, price: 400}
]
const arr1 = [1, 2, 3, 4, 5, 6, 7];

interface Props {
  toilets: number;
  setToilets: React.Dispatch<React.SetStateAction<number>>;
  bedrooms: number;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
}
const Toilets = ({ toilets, setToilets, bedrooms, setBedrooms }: Props) => {
  const dispatch = useAppDispatch();
  const main = useAppSelector((state) => state.cBookings.cBookings.toilets);
  const next = useAppSelector((state) => state.cBookings.cBookings.bedrooms);
  return (
    <Box textAlign="left" px={4}>
      <Heading fontSize={18} mb={6}>
        How many bedrooms and bathrooms are in your home ?
      </Heading>

      <Box
        backgroundColor="white"
        p={2}
        py={{ base: 4 }}
        px={{ md: 16 }}
        my={4}
        rounded="md"
        display="flex"
        alignItems="center"
      >
        <Box mr={{ base: 0.5 }} color="blue.600">
          {" "}
          <BiBed size="20px" />
        </Box>

        {arr2.map((item) => (
          <Flex
            backgroundColor={next.id == item.id ? "blue.600" : "gray.100"}
            color={next.id == item.id ? "white" : "black"}
            rounded="md"
            cursor="pointer"
            key={item.id}
            p={2}
            px="9px"
            ml={{ base: 2.5, md: 4 }}
            onClick={() => dispatch(setBedroom(item))}
          >
            <Text key={item.id} fontWeight="light" fontSize="10px">
              {item.num}
            </Text>
          </Flex>
        ))}
      </Box>

      <Box
        backgroundColor="white"
        p={2}
        py={4}
        px={{ md: 10 }}
        my={4}
        rounded="md"
        display="flex"
        alignItems="center"
      >
        <Box mr={0.5} color="blue.600">
          {" "}
          <FaToilet size="20px" />
        </Box>

        {arr3.map((item) => (
          <Flex
            backgroundColor={main.id === item.id ? "blue.600" : "gray.100"}
            color={main.id == item.id? "white" : "black"}
            rounded="md"
            cursor="pointer"
            key={item.id}
            p={2}
            px="9px"
            ml={{ base: 2.5, md: 4 }}
            onClick={() => dispatch(setToilet(item))}
          >
            <Text key={item.id} fontWeight="light" fontSize="10px">
              {item.num}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Toilets;

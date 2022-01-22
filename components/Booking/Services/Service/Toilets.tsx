import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { BiBed } from "react-icons/bi";
import {FaToilet} from 'react-icons/fa'
const arr = [1, 2, 3, 4, 5, 6, 7];

interface Props {
  toilets: number;
  setToilets: React.Dispatch<React.SetStateAction<number>>;
  bedrooms: number;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
}
const Toilets = ({ toilets, setToilets, bedrooms, setBedrooms }: Props) => {
  return (
    <Box textAlign="left">
      <Heading fontSize={20} mb={6}>
        How many bedrooms and bathrooms are in your home ?
        </Heading>

        <Box
          backgroundColor="white"
          p={2}
          py={4}
          my={4}
          rounded="md"
          display="flex"
          alignItems="center"
        >
          <Box mr={0.5} color="blue.600">
            {" "}
            <BiBed size="28px" />
          </Box>

          {arr.map((item) => (
            <Flex
              backgroundColor={bedrooms == item ? "blue.600" : "gray.100"}
              color={bedrooms == item ? 'white' : "black"}
              rounded="md"
              cursor="pointer"
              p={2}
              px={2.5}
              ml={2.5}
              onClick={() => setBedrooms(item)}
            >
              <Text key={item} fontWeight="light" fontSize="12px">
                {item}
              </Text>
            </Flex>
          ))}
        </Box>

        <Box
          backgroundColor="white"
          p={2}
          py={4}
          my={4}
          rounded="md"
          display="flex"
          alignItems="center"
        >
          <Box mr={0.5} color="blue.600">
            {" "}
            <FaToilet size="28px" />
          </Box>

          {arr.map((item) => (
            <Flex
              backgroundColor={toilets == item ? "blue.600" : "gray.100"}
              color={toilets == item ? 'white' : "black"}
              rounded="md"
              cursor="pointer"
              p={2}
              px={2.5}
              ml={2.5}
              onClick={() => setToilets(item)}
            >
              <Text key={item} fontWeight="light" fontSize="12px">
                {item}
              </Text>
            </Flex>
          ))}
        </Box>
    </Box>
  );
};

export default Toilets;

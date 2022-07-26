import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaBed, FaToilet } from "react-icons/fa";
import { GiDogHouse, GiHouseKeys } from "react-icons/gi";
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

interface Props { 
    service: string;
    setService: (service: string) => void;
    bedroom: number;
    setBedroom: any
    toilet:number
    setToilet: any

}

const One = ({ service, setService, bedroom, setBedroom, toilet, setToilet }: Props) => {
  return (
    <Box color="gray.500">
      <Heading fontSize="16" fontWeight="semibold">
        Select Service(s)
      </Heading>
      <Flex gap={8} color="gray.400" alignItems="center" my={4} justifyContent="center">
        <Flex
          gap={2}
          alignItems="center"
          flexDirection="column"
          border="1px solid gray"
          shadow={service === "endoflease" ? "2xl" : "none"}
          borderColor={service === "endoflease" ? "blue.700" : "gray.200"}
          color={service === "endoflease" ? "blue.700" : "gray.200"}
          onClick={() => setService("endoflease")}
          textAlign="center"
          px={3}
          py={4}
          w={130}
        >
          <Box fontSize="50">
            <GiHouseKeys />
          </Box>
          <Text
            fontSize="13"
            fontWeight={service === "endoflease" ? "bold" : "semibold"}
            color={service === "endoflease" ? "blue.600" : "gray.200"}
          >
            End of Lease Cleaning
          </Text>
        </Flex>
        <Flex
          gap={2}
          alignItems="center"
          flexDirection="column"
          border="1px solid gray"
          shadow={service === "generalclean" ? "2xl" : "none"}
          borderColor={service === "generalclean" ? "blue.700" : "gray.200"}
          color={service === "generalclean" ? "blue.700" : "gray.200"}
          onClick={() => setService("generalclean")}
          textAlign="center"
          px={3}
          py={4}
          w={130}
        >
          <Box fontSize="50">
            <GiDogHouse />
          </Box>
          <Text fontSize="13" fontWeight="semibold">
            General House Cleaning
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" my={6} mt={10} >
        <Flex alignItems="center" gap={4}>
          <Box fontSize="24" color="blue.700">
              <FaBed/>
          </Box>
          <Heading fontSize="16" color="blue.700" fontWeight="semibold">Bedrooms</Heading>
        </Flex>
        <Flex alignItems="center" gap={3}>
          <Text onClick={() => bedroom > 0 && setBedroom(bedroom - 1)} fontSize={14} backgroundColor="gray.100" px={2.5} py={2.5} rounded="md"><GrFormSubtract/></Text>
          <Text color="blue.700" fontWeight="semibold">{bedroom}</Text>
          <Text onClick={() => setBedroom(bedroom + 1)} fontSize={14} backgroundColor="gray.100" px={2.5} py={2.5} rounded="md"><GrFormAdd/></Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" my={6}>
        <Flex alignItems="center" gap={4}>
          <Box fontSize="24" color="blue.700">
              <FaToilet/>
          </Box>
          <Heading fontSize="16" color="blue.700" fontWeight="semibold">Toilets</Heading>
        </Flex>
        <Flex alignItems="center" gap={3}>
          <Text onClick={() => toilet > 0 && setToilet(toilet - 1)} fontSize={14} backgroundColor="gray.100" px={2.5} py={2.5} rounded="md"><GrFormSubtract/></Text>
          <Text color="blue.700" fontWeight="semibold">{toilet}</Text>
          <Text onClick={() => setToilet(toilet + 1)} fontSize={14} backgroundColor="gray.100" px={2.5} py={2.5} rounded="md"><GrFormAdd/></Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default One;

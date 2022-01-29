import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { GiHouseKeys, GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineHouseboat } from "react-icons/md";

interface Props {
  selectedService: string;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
}

const CleaningType = ({ selectedService, setSelectedService }: Props) => {
  return (
    <Box  textAlign="left">
      <Heading fontSize={20}>
        What kind of clean would you like to schedule?
      </Heading>
      <Flex w={{md:"400px"}} mx="auto">
        <Box
          my={10}
          px={6}
          py={10}
          textAlign="left"
          rounded="md"
          boxShadow="xl"
          cursor="pointer"
          backgroundColor={
            selectedService === "House Cleaning" ? "blue.600" : "white"
          }
          color={selectedService === "House Cleaning" ? "white" : "blue.600"}
          onClick={() => setSelectedService("House Cleaning")}
          fontWeight={selectedService === "House Cleaning" && "semibold"}
        >
          <Flex alignItems="center" justify="center">
            {" "}
            <GiVacuumCleaner size="50px" />
          </Flex>
          <Text mt={4} fontSize="16px">
            House Cleaning{" "}
          </Text>
        </Box>
        <Spacer />
        <Box
          my={10}
          px={6}
          py={10}
          textAlign="center"
          rounded="md"
          boxShadow="xl"
          cursor="pointer"
          backgroundColor={
            selectedService === "Bond Cleaning" ? "blue.600" : "white"
          }
          color={selectedService === "Bond Cleaning" ? "white" : "blue.600"}
          onClick={() => setSelectedService("Bond Cleaning")}
          fontWeight={selectedService === "Bond Cleaning" && "semibold"}
        >
          <Flex alignItems="center" justify="center">
            {" "}
            <GiHouseKeys size="50px" />
          </Flex>
          <Text mt={4} fontSize="16px">
            Bond Cleaning{" "}
          </Text>
        </Box>{" "}
      </Flex>
    </Box>
  );
};

export default CleaningType;

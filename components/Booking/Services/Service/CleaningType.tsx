import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { GiHouseKeys, GiVacuumCleaner } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../Admin/app/hooks";
import { toggleType } from "../../customerBookingSlice";

interface Props {
  selectedService: string;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
}

const CleaningType = ({ selectedService, setSelectedService }: Props) => {

  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.cBookings);


  return (
    <Box  textAlign="left" px={{base:4}} >
      <Heading fontSize={18}>
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
            book.cBookings.selectedService === "House Cleaning" ? "blue.600" : "white"
          }
          color={book.cBookings.selectedService === "House Cleaning" ? "white" : "blue.600"}
          onClick={() => dispatch(toggleType(("House Cleaning")))}
          fontWeight={book.cBookings.selectedService === "House Cleaning" && "semibold"}
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
            book.cBookings.selectedService === "Bond Cleaning" ? "blue.600" : "white"
          }
          color={book.cBookings.selectedService === "Bond Cleaning" ? "white" : "blue.600"}
          onClick={() => dispatch(toggleType(("Bond Cleaning")))}
          fontWeight={book.cBookings.selectedService === "Bond Cleaning" && "semibold"}
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

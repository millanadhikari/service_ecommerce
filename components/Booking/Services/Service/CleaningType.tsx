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
    <Box  textAlign="left" px={{base:7}} >
      <Heading fontSize={15}>
        What kind of clean would you like to schedule?
        
      </Heading>
      <Flex w={{md:"400px"}} mx="auto">
        <Flex
          my={5}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={5}
          textAlign="left"
          rounded="md"
          boxShadow="xl"
          h="120px"

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
            <GiVacuumCleaner size="30px" />
          </Flex>
          <Text mt={3} fontSize="13px" w={20} textAlign="center" >
            House Cleaning
          </Text>
        </Flex>
        <Spacer />
        <Flex
           my={5}
           flexDirection="column"
           alignItems="center"
           justifyContent="center"
           px={5}
           textAlign="left"
           rounded="md"
           boxShadow="xl"
           h="120px"
 
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
            <GiHouseKeys size="30px" />
          </Flex>
          <Text mt={3} fontSize="13px" w={20} textAlign="center" >
            Bond Cleaning{" "}
          </Text>
        </Flex>{" "}
      </Flex>
    </Box>
  );
};

export default CleaningType;

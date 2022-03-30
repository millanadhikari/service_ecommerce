import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GiHouseKeys, GiVacuumCleaner } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../Admin/app/hooks";
import { toggleType } from "../../customerBookingSlice";

interface Props {
  selectedService: string;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
  bloading: boolean;
}

const CleaningType = ({
  selectedService,
  setSelectedService,
  bloading,
}: Props) => {
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.cBookings);

  return (
    <Box textAlign="left" px={{ base: 7 }}>
        {!bloading && <Heading fontSize={14} color="gray.600">
          What kind of clean would you like to schedule?
        </Heading>
}
      <Flex w={{ sm: "80%", md: "300px" }} mx="auto">
        {bloading ? (
          <Skeleton isLoaded={!bloading} h="120px" w="120px" my={5} rounded="md"></Skeleton>
        ) : (
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
              book.cBookings.selectedService === "House Cleaning"
                ? "blue.600"
                : "white"
            }
            color={
              book.cBookings.selectedService === "House Cleaning"
                ? "white"
                : "blue.600"
            }
            onClick={() => dispatch(toggleType("House Cleaning"))}
            fontWeight={
              book.cBookings.selectedService === "House Cleaning" && "semibold"
            }
          >
            <Flex alignItems="center" justify="center">
              {" "}
              <GiVacuumCleaner size="30px" />
            </Flex>
            <Text mt={3} fontSize="13px" w={20} textAlign="center">
              House Cleaning
            </Text>
          </Flex>
        )}
        <Spacer />
        {bloading ? (
          <Skeleton isLoaded={!bloading} h="120px" w="120px" mt="5" rounded="md"></Skeleton>
        ) : (
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
              book.cBookings.selectedService === "Bond Cleaning"
                ? "blue.600"
                : "white"
            }
            color={
              book.cBookings.selectedService === "Bond Cleaning"
                ? "white"
                : "blue.600"
            }
            onClick={() => dispatch(toggleType("Bond Cleaning"))}
            fontWeight={
              book.cBookings.selectedService === "Bond Cleaning" && "semibold"
            }
          >
            <Flex alignItems="center" justify="center">
              {" "}
              <GiHouseKeys size="30px" />
            </Flex>
            <Text mt={3} fontSize="13px" w={20} textAlign="center">
              Bond Cleaning{" "}
            </Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default CleaningType;

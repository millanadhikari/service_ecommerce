import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillSunFill, BsStars } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";
import Question from "./Question";

const Service = () => {
  return (
    <Box
      mt={{ base: "2300px", sm: "2200px", md: "1400px", lg: "1350px" }}
      textAlign="center"
      w={{base:"380px",sm:"100%"}}
      zIndex="2"
    >
      <Image src="./thumb.png" h={7} w={7} mx="auto" mb={3} />
      <Text mb={6} fontWeight="bold">
        OUR SERVICE
      </Text>
      <Box
        fontSize="22px"
        fontWeight="semibold"
        textAlign="center"
        display={{ md: "flex" }}
        justifyContent="center"
        w="100%"
      >
        <Text>Service programs offered on </Text>
        <Text ml={{ md: "3" }} color="#2297ea">
          WeDoCLEAN
        </Text>
      </Box>
      <Text color="gray.400" my={3} fontSize="13px" fonWeight="light" mx={8}>
        There are serveral choices of services that WeDo Clean provides, there
        are three tyopes of options to suit your needs.
      </Text>

      <Box display={{ md: "flex" }} w={{ md: "1000px" }} mx="auto" zIndex="-1">
        <Flex
          my={8}
          flexDirection="column"
          textAlign="left"
          backgroundColor="#080927"
          color="gray.200"
          w={{ base: "300px" }}
          rounded="xl"
          p="6"
          mx="auto"
        >
          <MdNightlight fontSize="30px" />
          <Text mt={4} fontSize="20px" fontWeight="semibold">
            Basic Care
          </Text>
          <Text mt={10} fontSize="13px" color="gray.300">
            Packages with a choice of cleaning services with or without
            equipment include Bedroom, Bathroom, Living Room, Kitchen. Cleaning
            Duration 3-5 hours.
          </Text>
        </Flex>

        <Flex
          my={8}
          flexDirection="column"
          textAlign="left"
          backgroundColor="#080927"
          color="gray.200"
          w={{ base: "300px" }}
          rounded="xl"
          p="6"
          mx="auto"
        >
          <BsStars fontSize="30px" />
          <Text mt={4} fontSize="20px" fontWeight="semibold">
            Medium Care
          </Text>
          <Text mt={10} fontSize="13px" color="gray.300">
            Detailed cleaning for specific areas such as deep cleaning for
            kitcens bathrooms, mattresses and so on. Can be ordered in addition
            to Basic Care or separately.
          </Text>
        </Flex>

        <Flex
          my={8}
          flexDirection="column"
          textAlign="left"
          backgroundColor="#080927"
          color="gray.200"
          w={{ base: "300px" }}
          rounded="xl"
          p="6"
          mx="auto"
        >
          <BsFillSunFill fontSize="30px" />
          <Text mt={4} fontSize="20px" fontWeight="semibold">
            Special Care
          </Text>
          <Text mt={10} fontSize="13px" color="gray.300">
            Service packages for vacant homes before occupancy or after
            renovation including windows, balconies and wardrobes. Cleaning time
            is approximately 4-5 hours.
          </Text>
        </Flex>
      </Box>
      <Flex
        alignItems="center"
        backgroundColor="#e4f0ff"
        mt={{ base: "14", md: "-160" }}
        pt={{ base: "10", md: "160" }}
      >
        {" "}
        <Question />
      </Flex>
    </Box>
  );
};

export default Service;

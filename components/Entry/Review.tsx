import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillSunFill, BsStars } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";
import Question from "./Question";

const Review = () => {
  return (
    <Box
      textAlign="center"
      zIndex="2"
    >
      <Image src="./thumb.png" h={7} w={7} mx="auto" mb={3} />
      <Text mb={6} fontWeight="bold">
        TESTIMONIALS
      </Text>
      <Box
        fontSize="30px"
        fontWeight="bold"
        fontFamily="sans-serif"
        texttAlign="center"
        display={{ md: "flex" }}
        justifyContent="center"
        w="100%"
      >
        <Text>Dont Believe </Text>
        <Text ml={{ md: "3" }} color="#2297ea">
          WeDO
        </Text>
        
        <Text> Check Clients Says </Text>

      </Box>
      <Text color="gray.400" my={3} fontSize="13px" fonWeight="light" mx={8}>
        There are serveral choices of services that WeDo Clean provides, there
        are three tyopes of options to suit your needs.
      </Text>

      <Box display={{ md: "flex" }} w={{ md: "1000px" }} mx="auto" zIndex="-1" >
        
      </Box>
     
    </Box>
  );
};

export default Review;

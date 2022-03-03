import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillSunFill, BsStars } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";
import Question from "./Question";

const Review = () => {
  return (
    <Box textAlign="center" zIndex="2">
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
          WeDO?
        </Text>

        <Text> Check Clients Says </Text>
      </Box>
      <Text color="gray.400" my={3} fontSize="13px" fonWeight="light" mx={8}>
        There are serveral choices of services that WeDo Clean provides, there
        are three tyopes of options to suit your needs.
      </Text>

      <Box display={{ md: "flex" }} w={{ md: "1000px" }} mx="auto" zIndex="-1" my={10}>
        <Box w="100%">
          <Box
            backgroundColor="#080927"
            color="gray.100"
            px={10}
            py={5}
            rounded="lg"
            m={5}
            pb={32}
            
            
          >
            <Flex alignItems="center" justifyContent="space-between" w="100%">
              <Flex alignItems="center" gap={4}>
                <Image
                  src="data:image/jpeg;base64,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"
                  h={12}
                  w={12}
                  objectFit="cover"
                  rounded="full"
                  border="1.5px solid gray"
                  borderColor="gray.100"
                />
                <Box textAlign="left">
                  <Text fontSize="15px" fontWeight="semibold">
                   Shree Ram Thapa
                  </Text>
                  <Text mt={1} fontSize="11px" color="gray.400">
                    Surry Hills, Sydney NSW
                  </Text>
                </Box>
              </Flex>
              <Flex fontSize="10px" gap={1} color="#c29e3b">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />

              </Flex>
            </Flex>
            
          </Box>
          <Box backgroundColor="white" mx={14} mt="-32" rounded="lg" p={6} shadow="lg">
            <Heading fontSize="15px" fontFamily="Raleway" textAlign="left">
             5 star deserved cleaning company. Well done team! House is Sparkling.
            </Heading>
            <Text fontSize="11px" lineHeight="1.5rem" textAlign="left" mt={7} fontWeight="semibold" color="gray.400"> This guys has cleaned my house beyond my expectation. I celebrated my great festival with a very clean house. Thank you WeDo for your five star service. Will definately recommend to the colleagues.</Text>
          </Box>
        </Box>
        <Box w="100%" mt={{base:16, md:"0"}} >
          <Box
            backgroundColor="#080927"
            color="gray.100"
            px={10}
            py={6}
            rounded="lg"
            m={5}
            pb={32}
            
            
          >
            <Flex alignItems="center" justifyContent="space-between" w="100%">
              <Flex alignItems="center" gap={4} >
                <Image
                  src="data:image/jpeg;base64,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"
                  h={12}
                  w={12}
                  objectFit="cover"
                  rounded="full"
                  border="1.5px solid gray"
                  borderColor="gray.100"
                />
                <Box textAlign="left">
                  <Text fontSize="15px" fontWeight="semibold">
                   S. Prasai
                  </Text>
                  <Text mt={1} fontSize="11px" color="gray.400">
                    Rockdale, Sydney NSW
                  </Text>
                </Box>
              </Flex>
              <Flex fontSize="10px" gap={1} color="#c29e3b">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />

              </Flex>
            </Flex>
            
          </Box>
          <Box backgroundColor="white" mx={14} mt="-32" rounded="lg" p={6} shadow="lg">
            <Heading fontSize="15px" fontFamily="Raleway" textAlign="left">
              Thank you very much for excellent and very professional job today!
            </Heading>
            <Text fontSize="11px" lineHeight="1.5rem" textAlign="left" mt={7} fontWeight="semibold" color="gray.400"> Really Appreciate and Thank you very much for excellent and very professional job today! You always do more than we expecting. Will recommend to friends and family. I wish you Merry Christmas! THANKS!</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;

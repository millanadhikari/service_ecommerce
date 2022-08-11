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
        are three types of options to suit your needs.
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
            <Heading fontSize="15px" fontFamily="Raleway" textAlign="left" lineHeight="1.6rem">
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5EzCyKyGdakrRPUyCG--o4_PywNz22ahgg&usqp=CAU"
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
            <Heading fontSize="15px" fontFamily="Raleway" textAlign="left" lineHeight="1.6rem">
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

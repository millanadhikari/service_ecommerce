import { CalendarIcon, CheckIcon, StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";

const Banner = ({ heading, desc }) => {
  return (
    <Box
      position="absolute"
      top="-20"
      left="0"
      right="0"
      // mt="-110px"
      minW="378px"
      zIndex="-1"
      backgroundColor="#5395f6"
      pb={{ base: "280px", sm: "305px", md: "83px", lg: "130px" }}
      color="white"
    >
      <Box
        pt={48}
        display={{ base: "", md: "flex" }}
        w={{ base: "100%", md: "800px", lg: "1100px" }}
        mx="auto"
        pb={5}
      >
        <Box w={{ base: "100%", md: "80%", lg: "90%" }} px={{ base: "20px" }}>
          <Heading
            fontSize={{ base: "29px", md: "42px" }}
            textAlign={{ base: "center", sm: "left" }}
            letterSpacing="0.9px"
            color="white"
            fontWeight="bold"
          >
            {heading}
          </Heading>
          <Text
            mt={4}
            fontSize="15px"
            lineHeight={1.5}
            letterSpacing="0.9px"
            color="gray.200"
            textAlign={{ base: "center", sm: "left" }}
          >
            {desc}
          </Text>
          <Stack
            mt={9}
            fontSize="12px"
            w="100%"
            direction={["row", "row"]}
            spacing="10px"
            textAlign="center"
            px={{ base: 3, sm: 0 }}
          >
            <Flex
              alignItems="center"
              backgroundColor="#3979db"
              px={6}
              py={3.5}
              rounded="3xl"
            >
              <StarIcon mr={3} />
              <Text fontWeight="semibold" color="gray.100">
                4.9/5
              </Text>
            </Flex>

            <Flex
              alignItems="center"
              backgroundColor="#3979db"
              px={4}
              py={3.5}
              rounded="3xl"
            >
              <StarIcon mr={3} />
              <Text fontWeight="semibold" color="gray.100">
                Reliable
              </Text>
            </Flex>

            <Flex
              alignItems="center"
              backgroundColor="#3979db"
              px={4}
              py={3.5}
              rounded="3xl"
            >
              <StarIcon mr={3} />
              <Text fontWeight="semibold" color="gray.100">
                Trusted
              </Text>
            </Flex>
          </Stack>
        </Box>

        <Box
          position="relative"
          mt="50px"
          // ml={{ base: "10" }}
          mx="auto"
          zIndex="1"
          w="100%"
          px="auto"
        >
          <Box
            position="absolute"
            h={{ base: "300px", md: "400px" }}
            w={{ base: "300px", md: "400px" }}
            backgroundColor="#3979db"
            rounded="100%"
            top="0"
            left="5"
            zIndex="1"
            color="white"
            overflow="hidden"
          >
            <Image
              position="absolute"
              src="/girl.png"
              objectFit="cover"
              h={{ base: "300px", sm: "324px", md: "418px", lg: "400px" }}
              pt={6}
              left={5}
              mx="auto"
              zIndex="1"
            />
          </Box>
          <Flex
            position="absolute"
            top={{ base: "200px", md: "260px" }}
            left={{ base: "150px", sm: "200px", md: "300" }}
            backgroundColor="white"
            color="black"
            zIndex="1"
            pr="33px"
            pl={2}
            alignItems="center"
            py={{ base: "3", md: "4" }}
            rounded="xl"
            boxShadow="md"
          >
            <Image
              borderRadius="full"
              boxSize="40px"
              mr={3}
              objectFit="fill"
              src="/Saroj.jpg"
            />
            <Box>
              <Stack
                direction={["row", "row"]}
                spacing="4px"
                color="#f9bf16"
                fontSize="10px"
              >
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Stack>
              <Heading mt={1.5} mb={0.5} fontSize="16px">
                Saroj KP
              </Heading>
              <Text fontSize="11px" color="gray.500" fontWeight="semibold">
                Sydney, NSW
              </Text>
            </Box>
          </Flex>

          <Box
            zIndex="1"
            position="absolute"
            top={{ base: "10", md: "28" }}
            left="6"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              position="absolute"
              opacity="0.3"
              display="flex"
              alignItems="center"
              justify="center"
              h="90px"
              w="90px"
              backgroundColor="#f9bf16"
              zIndex="-1"
              rounded="100%"
            ></Box>

            <Flex
              alignItems="center"
              justifyContent="center"
              backgroundColor="#f9bf16"
              zIndex="2"
              h={16}
              w={16}
              m={1}
              mx="auto"
              rounded="100%"
            >
              <Flex
                backgroundColor="white"
                color="#f9bf16"
                alignItems="center"
                rounded="100%"
                p={2}
                zIndex="2"
              >
                <MdAttachMoney />
              </Flex>
            </Flex>
          </Box>
          <Box
            zIndex="1"
            position="absolute"
            top="10"
            left={{ base: "280", sm: "290px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              position="absolute"
              opacity="0.3"
              display="flex"
              alignItems="center"
              justify="center"
              h="80px"
              w="80px"
              backgroundColor="green.700"
              zIndex="-1"
              rounded="100%"
            ></Box>

            <Flex
              alignItems="center"
              justifyContent="center"
              backgroundColor="green.400"
              zIndex="2"
              h={14}
              w={14}
              m={1}
              mx="auto"
              rounded="100%"
            >
              <Flex
                backgroundColor="white"
                color="green.400"
                alignItems="center"
                rounded="100%"
                p={2.5}
                zIndex="2"
              >
                <CalendarIcon fontSize="12px" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

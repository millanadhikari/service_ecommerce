import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Why = () => {
  return (
    <Box
      position="relative"
      w={{ base: "100%", md: "100%" }}
      top={{ base: "2230px", sm: "2150", md: "1350px", lg: "1300px" }}
      mx={{ base: "4", sm: "4", md: "auto" }}
      my={{ md: 10 }}
    >
      <Flex
        position="relative"
        textAlign="center"
        backgroundColor="#418bf7"
        w={{ base: "350px", sm:'400px', md: "760px", lg: "1000px" }}
        mx="auto"
        color="white"
        py={12}
        px={6}
        rounded="xl"
        justify="center"
        overflow="hidden"
      >
        <Box
          display={{ base: "none", md: "block" }}
          position={{ base: "absolute" }}
          left="80px"
          top={{ base: "190px", md: "30" }}
          h="300px"
          w="300px"
          backgroundColor="#427fdb"
          rounded="full"
        ></Box>
        <Image
          display={{ base: "none", md: "block" }}
          position="absolute"
          left="0"
          bottom={{ base: "0" }}
          src="/lady.png"
          alt="End of lease clean"
          w="400px"
          h="400px"
        />
        <Box zIndex="2" ml={{ base: 4, md: "380px", lg: "400px" }}>
          <Heading textAlign="left" fontSize="25px">
            Why Order WeDo Home Cleaning Services?{" "}
          </Heading>
          <List spacing={3} textAlign="left" px={3} my={8} fontSize="13px">
            <ListItem display="flex" alignItems="center">
              <ListIcon
                mr={4}
                fontSize="24px"
                as={AiFillCheckCircle}
                color="white"
              />
              More than two years established, no negative comments
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon
                mr={4}
                as={AiFillCheckCircle}
                color="white"
                fontSize="24px"
              />
              Have a very reliable workforce to help clean your house
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon
                mr={4}
                as={AiFillCheckCircle}
                color="white"
                fontSize="24px"
              />
              WeDo Cleaning prioritizes client omfort and always maintains the
              quality of employee work
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem display="flex" alignItems="center" mb={6}>
              <ListIcon
                mr={4}
                as={AiFillCheckCircle}
                color="white"
                fontSize="24px"
              />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <Button
              colorScheme="green"
              fontSize="14x"
              rounded="3xl"
              fontWeight="light"
              boxShadow="md"
              px={8}
            >
              Learn More
            </Button>
          </List>
        </Box>
        <Box
          position="absolute"
          bottom="0"
          right={{ base: "0", md: "auto" }}
          left={{ md: "100px" }}
          zIndex="1"
        >
          <Box position="relative">
            <Box
              position="absolute"
              bottom={{ base: "-10", md: "-16" }}
              right={{ base: "0", md: "-8" }}
              rounded="full"
              h={36}
              w={36}
              backgroundColor="#f7bc16"
            ></Box>
            <Box
              position="absolute"
              bottom="2"
              right={{ base: "-2", md: "7" }}
              rounded="full"
              h={20}
              w={20}
              backgroundColor="#3bbe77"
            ></Box>
            <Box
              position="absolute"
              bottom="-8"
              right={{ base: "-8", md: "12" }}
              rounded="full"
              h={20}
              w={20}
              backgroundColor="#4287ef"
            ></Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Why;

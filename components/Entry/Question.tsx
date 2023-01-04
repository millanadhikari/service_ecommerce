import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import EntryTabs from "./EntryTabs";

const Question = () => {
  return (
    <Box mx="auto" w="100%">
      <Flex
        mt={5}
        py={4}
        direction={{ base: "column" }}
        w={{ base: "100%", md: "1000" }}
        px={{ base: "5" }}
        textAlign="left"
        bg="#e4f0ff"
      >
        <Flex alignItems="center" mx="auto">
          <Image
            src="/wave.png"
            alt="End of lease clean"
            w="30px"
            h="30px"
            mr={4}
          />{" "}
          <Text w={{ md: "400px" }} fontWeight="bold" fontSize="18px">
            FREQUENTLY ASKED QUESTIONS
          </Text>
        </Flex>
        <Spacer my={4} />
        <Flex
          textAlign="left"
          direction={{ base: "column", md: "row" }}
          px={{ base: "5", md: "none" }}
          mx="auto"
          w={{ md: "1000px" }}
        >
          <Heading w="100%">Hello, How Can I Help You?</Heading>
          <Spacer mb={2} />
          <Text w={{ md: "70%" }} fontSize="sm" color="gray.600">
            Some questions that might help you in getting to know WeDo Clean,
            these questions are collected according to the results of research
            questions that often arise
          </Text>
        </Flex>
      </Flex>
      <EntryTabs />
    </Box>
  );
};

export default Question;

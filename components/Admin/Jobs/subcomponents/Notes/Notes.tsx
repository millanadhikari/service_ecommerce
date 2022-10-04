import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  useMenuState,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";

const Notes = () => {
  const [input, setInput] = useState("");
  return (
    <Box
      my={8}
      bg="white"
      py={5}
      mr={{ base: 2, md: "10" }}
      px={6}
      rounded="md"
      shadow="md"
    >
      <Flex gap={2} alignItems="center">
        <Flex alignItems="center" w="100%">
          <Flex gap={2} mb={3} alignItems="center">
            <Heading fontSize="15px" alignItems={"center"} color="gray.600">
              Internal job notes
            </Heading>
            <Text color="gray.400">|</Text>
            <Text color="gray.400" fontWeight="semibold" fontSize="14px">
              Files
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={4}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add note"
          size="sm"
        ></Input>
        <Button
          bg="blue.700"
          fontSize="13px"
          rounded="full"
          px={6}
          _hover={{bg:"blue.600", color:"gray.200"}}
          size="sm"
          color="white"
        >
          Save note
        </Button>
      </Flex>
    </Box>
  );
};

export default Notes;

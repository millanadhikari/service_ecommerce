import { AddIcon, ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";
import Transactions from "./Transactions";

export const Accounts = () => {
  return (
    <Box bg="white" py={4} px={4} rounded="md">
      <Flex justifyContent="space-between">
        <Box>
          <Heading color="gray.600">$5,550</Heading>
          <Flex alignItems="center" gap={1} fontSize="sm" mt={1} color="gray.500">
            <Text>Monthly</Text>
            <MdOutlineExpandMore/>
          </Flex>
        </Box>
        <Image src="/accounts.png" h="20" w="30"/>
      </Flex>
      <Flex gap={4} my={8}>
        <Button
          leftIcon={<AddIcon />}
          color="purple.600"
          size="sm"
          border="none"
          bg="purple.100"
          py={2}
          fontSize="13px"
          variant="solid"
        >
          Add money
        </Button>
        <Button
          leftIcon={<ArrowForwardIcon />}
          color="purple.600"
          size="sm"
          border="none"
          bg="purple.100"
          py={2}
          fontSize="13px"
          variant="solid"
        >
          Send
        </Button>
        <Button
          color="purple.600"
          size="sm"
          border="none"
          bg="purple.100"
          py={2}
          fontSize="133x"
          variant="solid"
        >
          <FiMoreHorizontal />
        </Button>
      </Flex>
      <Flex fontWeight="semibold" justifyContent="space-between" my={8}>
        <Text fontSize="14px" color="gray.500">Transactions</Text>
        <Text cursor="pointer" fontSize="14px" color="purple.600">See all</Text>
      </Flex>
      <Transactions/>
    </Box>
  );
};

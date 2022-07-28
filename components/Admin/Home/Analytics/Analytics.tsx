import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SpendChart from "./SpendChart";
import VisitorChart from "./VisitorChart";

export function Analytics() {
  return (
    <Box px={4} py={4}>
      <Text
        fontSize="15px"
        color="gray.500"
        letterSpacing="0.7px"
        fontWeight="semibold"
      >
        Analytics
      </Text>
      <Flex gap={4}>
        <Flex
          bg="white"
          py={4}
          px={4}
          my={4}
          rounded="md"
          flexDirection="column"
          h="180px"
        >
          <Flex flexDirection="column" gap={1}>
            <Text fontSize="sm" color="gray.500">
              Visitor this week
            </Text>
            <Text fontWeight="semibold">80</Text>
            <Flex color="red.500" alignItems="center" gap={2}>
              <AddIcon fontSize="8px" />
              10
            </Flex>
          </Flex>
          <Flex w="100%">
            <VisitorChart />
          </Flex>
        </Flex>
        <Flex
          bg="white"
          py={4}
          px={4}
          my={4}
          rounded="md"
          flexDirection="column"
          h="180px"
          w="170px"
          
        >
          <Flex flexDirection="column" gap={1}>
            <Text fontSize="sm" color="gray.500">
              Spent this week
            </Text>
            <Text fontWeight="semibold">$80 / $300</Text>
            <Flex color="gray.500" fontSize="13px" alignItems="center" gap={2}>
              <AddIcon fontSize="8px" />
              12 days left
            </Flex>
          </Flex>
          <Flex w="100%" size="md" justifyContent="center" alignItems="center" mt="8">
            <SpendChart />
            
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

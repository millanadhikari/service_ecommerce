import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

const ChecklistItem = () => {
  return (
    <Box my={10} border="1px solid gray" borderColor="gray.200" px={8} py={5} rounded="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex fontSize="14" alignItems="top" gap={2}>
          <Text fontWeight="semibold">Default Checklist</Text>
          <BsQuestionCircle cursor="pointer" />
        </Flex>
        <Button
          bg="blue.700"
          color="white"
          fontSize="12"
          rounded="3xl"
          px={8}
          letterSpacing="1.4px"
          _hover={{ bg: "blue.600" }}
        >
          Add Item
        </Button>
      </Flex>
    </Box>
  );
};

export default ChecklistItem;

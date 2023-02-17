import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ChecklistItem from "./ChecklistItem";
const JobChecklist = ({ handleChange }) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        cursor="pointer "
        gap={4}
        onClick={() => handleChange("checklist")}
      >
        <IoIosArrowBack />
        <Text fontWeight="semibold">Job Checklist </Text>
      </Flex>
      <ChecklistItem/>
    </Box>
  );
};

export default JobChecklist;

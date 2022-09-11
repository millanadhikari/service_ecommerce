import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Timeline = ({timeline}) => {
   console.log(timeline.icon)
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center" gap={4}>
        <Box textAlign="center">
          <Box fontSize="16px" color="gray.500">
          {timeline.icon === 'AiOutlinePlusCircle' && <AiOutlinePlusCircle/>}
          </Box>
          <Text color="gray.300">|</Text>
        </Box>
        <Box>
          <Text fontWeight="semibold" fontSize="13px">
           {timeline.title}
          </Text>
          <Text mt={1} fontSize="12px" color="gray.500">
            {timeline.date}
            
          </Text>
        </Box>
      </Flex>
      <Box fontWeight='semibold'>{timeline.createdBy}</Box>
    </Flex>
  );
};

export default Timeline;

import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";

const Timeline = ({timeline}) => {
   console.log('hey', timeline)
   let l = timeline.date
   l = new Date(l)
   console.log(l)

  return (
    <Flex justifyContent="space-between" mb={4}>
      <Flex alignItems="center" gap={4}>
        <Box textAlign="center">
          
          <Box fontSize="16px" color="gray.500">
          {timeline.icon === 'AiOutlinePlusCircle' && <AiOutlinePlusCircle/>}
          <Box color="green.600" >{timeline.icon === 'GiConfirmed' && <GiConfirmed/>}</Box>
          </Box>
          <Text color="gray.300">|</Text>
        </Box>
        <Box>
          <Text fontWeight="semibold" fontSize="13px">
           {timeline.title}
          </Text>
          <Text mt={1} fontSize="12px" color="gray.500">
            
            {l.toString().split("", 21)}
          </Text>
        </Box>
      </Flex>
      <Box fontSize="12px"  color="gray.500" fontWeight='light'>{timeline.createdBy}</Box>
    </Flex>
  );
};

export default Timeline;

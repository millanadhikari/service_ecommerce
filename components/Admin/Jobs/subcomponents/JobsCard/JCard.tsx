import { Box, Flex, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import CustomToolTip from "./CustomToolTip";

const JCard = ({ icon1, icon2, num, title, color, bg }) => {
  return (
    <Box bg="white" w="200px" py={3} pb={7} px={2} my={4} shadow="md">
      <CustomToolTip></CustomToolTip>
      <Flex
        alignItems="center"
        justifyContent="center "
        textAlign="center"
        bg={bg}
        mx="auto"
        color={color}
        rounded="full"
        h={14}
        w={14}
      >
        <Icon fontSize="25px" as={icon2} />
      </Flex>
      <Heading fontSize="25px" my={3} color="gray.600" textAlign="center">
        {title === "Average Jobs" && 'Largest Jobs' ? `$ ${num}` : num}
      </Heading>
      <Text
        textAlign="center"
        fontSize="13px"
        color="gray.400"
        fontWeight="semibold"
      >
        {title}
      </Text>
    </Box>
  );
};

export default JCard;

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const BlogsBottom = () => {
  return (
    <Box mx={{ base: 5 }} my={{ base: 0, md: 7 }}>
      <Box>
        <Heading fontSize="17px" color="gray.700">
          The Benefits of Using UV-C Light in the Hospitality industry
        </Heading>
        <Text my={2} fontSize="15px" color="gray.400">
          Experience clean air and easier breathing at your restaurant with the
          latest in chemical free cleaning technology.
        </Text>
        <Text
          w="28%"
          fontSize="15px"
          color="blue.600"
          borderBottom="1px solid gray"
          borderColor="blue.600"
          cursor="pointer"
          fontWeight="semibold"
        >
          Read in 3 minutes
        </Text>
      </Box>
      <Box my={8}>
        <Heading fontSize="17px" color="gray.700">
          What is UV-C Light
        </Heading>
        <Text my={2} fontSize="15px" color="gray.400">
          Experience clean air and easier breathing at your restaurant with the
          latest in chemical free cleaning technology.
        </Text>
        <Text
          w="28%"
          fontSize="15px"
          color="blue.600"
          borderBottom="1px solid gray"
          borderColor="blue.600"
          cursor="pointer"
          fontWeight="semibold"
        >
          Read in 5 minutes
        </Text>
      </Box>
    </Box>
  );
};

export default BlogsBottom;

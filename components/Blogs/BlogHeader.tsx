import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

function BlogHeader() {
  return (
    <Box my="10" mx="5">
      <Heading color="#5395f6">
        Time to Get your House Clean and in order.
      </Heading>
      <Text my={3}>
        To have a good quality of cleaning is not a signal. Whereas the priority
        for cleaning house is really prestigious.{" "}
      </Text>
      <Button colorScheme="blue" size="sm" letterSpacing="1.5px">
        Read Article
      </Button>
    </Box>
  );
}

export default BlogHeader;

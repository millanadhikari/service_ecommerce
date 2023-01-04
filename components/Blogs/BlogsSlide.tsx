import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const BlogsSlide = ({ item }) => {
  return (
    <Box w="240px" >
      <Box my={5}>
        <Image
          src={
            item.img
          }
          h={140}
          w={240}
          rounded="md"
          shadow="lg"
        />
        <Text
          w="350px"
          my="2"
          fontSize="17px"
          fontWeight="bold"
          color="blue.700"
        >
         {item?.title}
        </Text>
        <Text fontSize="14px" color="blue.700">
          {" "}
          We have all learned about the germs the hard way --sickness.
        </Text>
        <Button
          cursor="pointer"
          my={4}
          size="sm"
          color="blue.400"
          backgroundColor="white"
          border="1px solid gray"
          fontSize="12px"
          borderColor="blue.600"
        >
          Read Article
        </Button>
      </Box>
    </Box>
  );
};

export default BlogsSlide;

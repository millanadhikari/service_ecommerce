import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function BlogContents({ item }) {
  return (
    <Box position="relative" mx={{ base: "5", sm: "5", md: "5" }} mb={10} w={{md:"50%"}}>
      <Image src={item.img.src} h={200} w={340} rounded="md" shadow="lg" />
      <Box rounded="md" position="absolute" top="0" bg="blue.400" opacity="0.6" h={200} w={{base:335, sm:340}}></Box>
      <Text w={340} my="3" fontSize="18px" fontWeight="bold" color="blue.700" noOfLines={[1, 1]}>
        {item.title}
      </Text>
      <Text w={340} fontSize="15px" color="blue.700" noOfLines={[2, 3]}>
        {" "}
        {item.subTitle}{" "}
      </Text>
      <Button
        cursor="pointer"
        size="sm"
        mt={4}
        color="blue.400"
        backgroundColor="white"
        border="1px solid gray"
        fontSize="12px"
        borderColor="blue.600"
      >
        Read Article
      </Button>
    </Box>
  );
}

export default BlogContents;

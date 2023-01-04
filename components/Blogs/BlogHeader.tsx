import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function BlogHeader({ item }) {
  const router = useRouter();
  return (
    <Box my="10" mx="5" h={{ base: "260px", sm: "260px", md: "420px" }}>
      <Box pt={{ base: 14, sm: 12, md: 52 }} zIndex={999}>
        <Heading fontSize="22px" color="blue.900">
          {item.title}
        </Heading>
        <Text my={3} fontSize={{ base: 13, md: 16 }}>
          {item.subTitle}
        </Text>
        <Button
          onClick={() => router.push(`/blogs/${item._id}`)}
          colorScheme="blue"
          fontSize="12"
          size="sm"
          letterSpacing="1px"
        >
          Read Article
        </Button>
      </Box>
      <Image
        position="absolute"
        my={-10}
        mx={{ base: "-5" }}
        zIndex={-1}
        h={{ base: "300px", sm: "300px", md: "470px" }}
        w={{ base: "100%", md: "1150px" }}
        top="0"
        src="https://i2.wp.com/nswcommercialcleaning.com.au/wp-content/uploads/2018/04/iStock-609094288.jpg?resize=860%2C480&ssl=1"
      />
      <Box
        position="absolute"
        my={-10}
        mx={{ base: "-5" }}
        zIndex={-1}
        h={{ base: "300px", sm: "300px", md: "470px" }}
        w={{ base: "100%", md: "1150px" }}
        top="0"
        bgGradient="linear(gray.700 0%, gray.400 25%, #fcf5f5 50%)"
        opacity="0.8"
      ></Box>
    </Box>
  );
}

export default BlogHeader;

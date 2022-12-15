import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import BlogsSlide from "./BlogsSlide";

const BlogsHorizontal = () => {
  return (
    <Box mx={{ base: 5, md: 5 }}>
      <Heading fontSize="18px">The Science Behind SmartUV</Heading>

     <BlogsSlide/>
    </Box>
  );
};

export default BlogsHorizontal;

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import BlogsSlide from "./BlogsSlide";

const data = [
  {
    id: 1,
    title: "Chemical Free Cleaning",
    img: "https://cdn.mos.cms.futurecdn.net/bM54NtBQwS7QR4T8M2AjCo-768-80.jpg",
    desc: "We have all learned about the germs the hard way sickness.",
  },
  {
    id: 2,
    title: "Chemical End Cleaning",
    img: "https://www.bondcleaninginadelaide.com.au/wp-content/uploads/2020/01/Home-cleaning-tips-for-everyone-1.jpg",
    desc: "We have all learned about the germs the hard way sickness.",
  },
  {
    id: 3,
    title: "Chemical Free Cleaning",
    img: "https://cdn.mos.cms.futurecdn.net/bM54NtBQwS7QR4T8M2AjCo-768-80.jpg",
    desc: "We have all learned about the germs the hard way sickness.",
  },
  {
    id: 4,
    title: "Chemical Free Cleaning",
    img: "https://cdn.mos.cms.futurecdn.net/bM54NtBQwS7QR4T8M2AjCo-768-80.jpg",
    desc: "We have all learned about the germs the hard way sickness.",
  },
];

const BlogsHorizontal = () => {
  return (
    <Box
      ml={{ base: 5, md: 5 }}
      overflowX="auto"
      my={4}
      __css={{
        "&::-webkit-scrollbar": {
          w: "2",
        },
        "&::-webkit-scrollbar-track": {
          w: "1",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10",
          bg: `white`,
        },
      }}
    >
      <Heading fontSize="18px">The Science Behind SmartUV</Heading>
      <Flex gap={10} w={{ base: "100%" }}>
        {data.map((item) => (
          <BlogsSlide key={item.id} item={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default BlogsHorizontal;

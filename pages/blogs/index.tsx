import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiToolbox } from "react-icons/gi";
import BlogContents from "../../components/Blogs/BlogContents";
import BlogHeader from "../../components/Blogs/BlogHeader";
import BlogsBottom from "../../components/Blogs/BlogsBottom";
import BlogsHorizontal from "../../components/Blogs/BlogsHorizontal";
import Footer from "../../components/Entry/Footer";
import Navbar from "../../components/Entry/Navbar";

const data = [
  {
    id: 1,
    title: "Time to Get Your House Clean and in Order",
    desc: "$100 non grade product. Which can be accessible easily.",
    img: "https://cdn.mos.cms.futurecdn.net/bM54NtBQwS7QR4T8M2AjCo-768-80.jpg",
  },
  {
    id: 2,
    title: "How VOC Affects Your Indooe Air in Quality",
    desc: "Using UV light to disinfection is becoming on essential hygiene.",
    img: "data:image/jpeg;base64,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",
  },
];

const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://wedo-backend.herokuapp.com/v1/blog/all"
      );
      console.log(result);
      result.data.status === "success" && setData(result.data.paginatedResults);
    };

    fetchData();
  }, []);
  return (
    <Box>
      <Box backgroundColor="#5395f6">
        <Navbar />
      </Box>

      <Box w={{ base: "100%", md: "1160px" }} mx="auto">
        {data &&
          data.map(
            (item) =>
              item.label === "main" && <BlogHeader key={item._id} item={item} />
          )}
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            {data &&
              data.map(
                (item) =>
                  item.label === "blog_contents" && (
                    <BlogContents key={item._id} item={item} />
                  )
              )}
          </Flex>
          <Box mx={{ base: 5 }} my={{ base: 0 }} w={{ md: "50%" }}>
            {data &&
              data.map(
                (item) =>
                  item.label === "blog_contents_right" && (
                    <Box key={item._id} mb={5}>
                      <Heading fontSize="17px" color="gray.700">
                        {item.title}
                      </Heading>
                      <Text
                        my={2}
                        fontSize="15px"
                        color="gray.400"
                        noOfLines={[3, 4]}
                      >
                        {item.subTitle}
                      </Text>
                      <Text
                        w={{ base: "40%", sm: "30%", md: "35%" }}
                        fontSize="15px"
                        color="blue.600"
                        borderBottom="1px solid gray"
                        borderColor="blue.600"
                        cursor="pointer"
                        fontWeight="semibold"
                      >
                        Read in {item.author.minRead} minutes
                      </Text>
                    </Box>
                  )
              )}

            {/* <Box my={8}>
              <Heading fontSize="17px" color="gray.700">
                What is UV-C Light
              </Heading>
              <Text my={2} fontSize="15px" color="gray.400">
                Experience clean air and easier breathing at your restaurant
                with the latest in chemical free cleaning technology.
              </Text>
              <Text
                w="25%"
                fontSize="15px"
                color="blue.600"
                borderBottom="1px solid gray"
                borderColor="blue.600"
                cursor="pointer"
                fontWeight="semibold"
              >
                Read in 5 minutes
              </Text>
            </Box> */}
          </Box>
        </Flex>
        <BlogsHorizontal />
        <Flex alignItems="top" flexDir={{ base: "column", md: "row" }}>
          <BlogsBottom />
          <Box w="90%" mx={{ base: "5" }}>
            <Image
              rounded="xl"
              w={550}
              h={320}
              mb={6}
              src="https://cdn.mos.cms.futurecdn.net/bM54NtBQwS7QR4T8M2AjCo-768-80.jpg"
            />
            <Heading fontSize="17px" color="gray.700">
              The Benefits of Using UV-C Light in the Hospitality industry
            </Heading>
            <Text my={2} fontSize="15px" color="gray.400">
              Experience clean air and easier breathing at your restaurant with
              the latest in chemical free cleaning technology.
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
        </Flex>
        <BlogsHorizontal />
      </Box>

      <Footer />
    </Box>
  );
};

export default Blogs;

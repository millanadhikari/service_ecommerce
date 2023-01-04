import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Footer from "../../Entry/Footer";

const FullBlog = () => {
  const router = useRouter();

  return (
    <Box mt={40} w={{ base: "100%", md: "1100px" }} mx="auto">
      <Text
        color="blue.500"
        textAlign={{base:'right', md:'left'}}
        mx={5}
        cursor="pointer"
        onClick={() => router.push("/blogs")}
      >
        Back to Blogs
      </Text>
      <Box
        textAlign={{ base: "left", md: "center" }}
        mx={{ base: 5, md: "auto" }}
        w="70%"
      >
        <Text color="blue.400" fontWeight="semibold">
          {" "}
          Hiring Remotely{" "}
        </Text>
        <Heading my={3}>
          {" "}
          How to Answer "What Can you Contribute to This Company?"{" "}
        </Heading>
        <Text fontSize="15" color="gray.600">
          There's a good chance you'll be asked something along the lines of
          "What can you contribute to this company?" in your next job interview.
        </Text>
      </Box>

      <Image
        mt={{ base: 10, md: 40 }}
        mx="auto"
        src="http://go.forrester.com/wp-content/uploads/2020/08/05954868cd6f441bb3987babaa6ef168.jpeg"
      />
      <Flex
        w={{ base: "100%", md: "1000px" }}
        position={{ md: "absolute" }}
        top={{ base: "120px", md: "200px" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex mx={5} gap={3} my={6}>
          <Image
            rounded="full"
            h={12}
            w={12}
            src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajesh-khanna-4856-16-05-2018-12-46-23.jpg"
          />
          <Box>
            <Text fontWeight="semibold" fontSize="16">
              Olivia Rhye
            </Text>
            <Flex gap={2} fontSize="13" color="gray.500">
              <Text>11 Feb 2022</Text>
              <Text>•</Text>
              <Text>11 min read</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex gap={2.5} mr={5}>
          <Box
            border="1px solid gray"
            p={1.5}
            rounded="lg"
            borderColor="gray.400"
            cursor="pointer"
            _hover={{ color: "blue.100" }}
            color="gray.400"
            fontSize="21"
          >
            {" "}
            <AiOutlineTwitter />{" "}
          </Box>
          <Box
            border="1px solid gray"
            p={1.5}
            rounded="lg"
            borderColor="gray.400"
            cursor="pointer"
            _hover={{ color: "blue.100" }}
            color="gray.400"
            fontSize="21"
          >
            <BsFacebook />
          </Box>
          <Box
            border="1px solid gray"
            p={1.5}
            rounded="lg"
            borderColor="gray.400"
            cursor="pointer"
            _hover={{ color: "blue.100" }}
            color="gray.400"
            fontSize="21"
          >
            <AiFillLinkedin />
          </Box>
        </Flex>
      </Flex>
      <Box mx={5} my={{ base: 3, md: 10 }}>
        <Text textAlign="left" mb={5}>
          There's a good chance yo7u'll be asked something along the lines of
          "What can you contribute to this company?" in your next job interview.
          It's one of the most ommon job interview questions because it helps
          the hireing managers assess whether or not you'd be a good fit for the
          company's specific needs. It's one of the most ommon job interview
          questions because it helps the hireing managers assess whether or not
          you'd be a good fit for the company's specific needs.
        </Text>
        <Text textAlign="left">
          There's a good chance yo7u'll be asked something along the lines of
          "What can you contribute to this company?" in your next job interview.
          It's one of the most ommon job interview questions because it helps
          the hireing managers assess whether or not you'd be a good fit for the
          company's specific needs. It's one of the most ommon job interview
          questions because it helps the hireing managers assess whether or not
          you'd be a good fit for the company's specific needs.
        </Text>
        <Text
          textAlign="left"
          my={6}
          fontWeight="semibold"
          borderLeft="3px solid blue"
          borderColor="blue.500"
          pl={5}
        >
          There's a good chance you'll be asked something along the lines of
          "What can you contribute to this company?" in your next job interview.
          It's one of the most ommon job interview questions because it helps
          the hireing managers assess whether or not you'd be a good fit for the
          company's specific needs.
        </Text>
        <Text textAlign="left">
          There's a good chance yo7u'll be asked something along the lines of
          "What can you contribute to this company?" in your next job interview.
          It's one of the most ommon job interview questions because it helps
          the hireing managers assess whether or not you'd be a good fit for the
          company's specific needs. It's one of the most ommon job interview
          questions because it helps the hireing managers assess whether or not
          you'd be a good fit for the company's specific needs.
        </Text>
        <Image
          mt={{ base: 10, md: 30 }}
          h={{ base: "100%", md: 400 }}
          mx="auto"
          src="https://u6a7g6r4.stackpathcdn.com/wp-content/uploads/2019/05/050119-spring-clean.jpg"
        />
        <Text textAlign="left" my={8} mb={14}>
          There's a good chance yo7u'll be asked something along the lines of
          "What can you contribute to this company?" in your next job interview.
          It's one of the most ommon job interview questions because it helps
          the hireing managers assess whether or not you'd be a good fit for the
          company's specific needs. It's one of the most ommon job interview
          questions because it helps the hireing managers assess whether or not
          you'd be a good fit for the company's specific needs.
        </Text>
      </Box>
      <Footer />
    </Box>
  );
};

export default FullBlog;

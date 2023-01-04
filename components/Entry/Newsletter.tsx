import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Newsletter = () => {
  return (
    <Flex
      backgroundColor="#418bf7"
      w={{ base: "360px", sm:"380px", lg: "1000px" }}
      mx={{base:"2.5", sm:"auto"}}
      my={10}
      mt={20}
      color="white"
      py={12}
      rounded="xl"
      position="relative"
    >
      <Flex
        flexDirection="column"
        gap={6}
        w={{ base: "100%", md: "70%" }}
        px={{ base: 10, md: 16 }}
      >
        <Heading fontSize="27px">Follow Our Newsletter</Heading>
        <Text color="gray.200" fontSize="14px" lineHeight="1.8rem">
          Keep an eye on our activities, there will be some promos that we
          always offer you when you subscribe to us. For that lets join us for
          better offer.
        </Text>
        <InputGroup size="md" w={{ base: "100%", md: "350px" }}>
          <Input
            pr="4.5rem"
            _placeholder={{ fontSize: "12px", color: "gray.200", px: 2 }}
            backgroundColor="#3e7dda"
            rounded="3xl"
            border="none"
            placeholder="Email Address"
          />
          <InputRightElement width="4.5rem">
            <Flex
              fontSize="11px"
              alignItems="center"
              fontWeight="semibold"
              h="1.75rem"
              size="sm"
              mr={6}
              rounded="2xl"
              backgroundColor="gray.100"
              px={4}
              py="15px"
              cursor="pointer"
              color="gray.600"
            >
              Subscribe
            </Flex>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Box
        position="absolute"
        right="0"
        bottom="0"
        display={{ base: "none", md: "inline" }}
      >
        <Image src="/girl.png" h={350} w={320} />
      </Box>
    </Flex>
  );
};

export default Newsletter;

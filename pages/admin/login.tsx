import { WarningTwoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErroremail] = useState(false);
  const [errorPassword, setErrorpassword] = useState(false);

  const handleLogin = () => {
    !email && setErroremail(!errorEmail);
    email !== "" && setErroremail(!errorEmail);

    !password && setErrorpassword(!errorPassword);
  };
  return (
    <Box
      position="relative"
      backgroundColor="blue.50"
      w="100%"
      zIndex="-1"
      h="full"
      overflow="hidden"
    >
      <Box
        left="-20"
        bottom={{base:20, md:"100"}}
        position="absolute"
        backgroundColor="blue"
        h={10}
        w="50%"
        zIndex="-1"
        transform="rotate(-19deg)"
        opacity="0.5"
      ></Box>
           <Box
        right="-20"
        top={{base:10, md:"100"}}
        position="absolute"
        backgroundColor="blue"
        h={10}
        w="50%"
        zIndex="-1"
        transform="rotate(-14deg)"
        opacity="0.5"
        
      ></Box>
       <Box
        top={{base:5, md:"100"}}
        position="absolute"
        right="20"
        backgroundColor="teal"
        h={10}
        w="20%"
        zIndex="-1"
        transform={"skewX(-10deg)"}
        opacity="0.5"
      ></Box>
      <Box px={{ base: "16px", sm: "60px" }} zIndex="999" py="26px">
        <Heading textAlign={{ md: "center" }} mb={6}>
          crm
        </Heading>
        <Box
          backgroundColor="white"
          py={10}
          px={6}
          rounded="md"
          boxShadow="lg"
          maxWidth={{ sm: "400px" }}
          mx="auto"
        >
          <Heading fontSize="23px">Sign in to your account</Heading>

          <Text
            mt={6}
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="gray.600"
            fontSize="14px"
          >
            Email
          </Text>
          <Input
            mt={2.5}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <Flex
              fontSize="13px"
              mt={4}
              fontWeight="semibold"
              alignItems="center"
              color="red.500"
            >
              <WarningTwoIcon mr={3} />
              <Text textAlign="center">Please enter your email</Text>
            </Flex>
          )}
          <Flex alignItems="center" justifyContent="space-between">
            <Text
              mt={5}
              fontFamily="sans-serif"
              fontWeight="semibold"
              color="gray.600"
              fontSize="14px"
            >
              Password
            </Text>
            <Text
              mt={5}
              fontFamily="sans-serif"
              fontSize="13px"
              cursor="pointer"
              fontWeight="semibold"
              color="blue.300"
            >
              Forgot your password?
            </Text>
          </Flex>
          <Input
            mt={2.5}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && (
            <Flex
              fontSize="13px"
              mt={4}
              fontWeight="semibold"
              alignItems="center"
              color="red.500"
            >
              <WarningTwoIcon mr={3} />
              <Text textAlign="center">Incorrect email or password.</Text>
            </Flex>
          )}

          <Flex my={6} alignItems="center">
            <Checkbox defaultIsChecked> </Checkbox>
            <Text
              fontFamily="sans-serif"
              fontSize="14px"
              cursor="pointer"
              fontWeight="semibold"
              color="gray.600"
            >
              Stay signed in for a week
            </Text>
          </Flex>
          <Button
            w="100%"
            colorScheme="messenger"
            fontSize="14px"
            fontFamily="sans-serif"
            letterSpacing="0.9px"
            onClick={handleLogin}
            py={3}
          >
            Continue
          </Button>
          <Text
            textAlign="center"
            mt={8}
            fontFamily="sans-serif"
            fontSize="13px"
            cursor="pointer"
            color="blue.600"
            fontWeight="semibold"
          >
            Use single sign-on (SSO) instead
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default login;

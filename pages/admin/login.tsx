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
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../components/Admin/api/userApi";
import { useAppSelector } from "../../components/Admin/app/hooks";
import {
  loginFail,
  loginPending,
  loginSuccess,
} from "../../components/Admin/auth/loginSlice";
import {getUserProfile} from '../../components/Admin/user/userAction'

interface isAuth {
  status: string;
  message: string;
}

const Login = () => {
  const [email, setEmail] = useState("asraf@gmail.com");
  const [password, setPassword] = useState("Manakamana123");
  const [errorEmail, setErroremail] = useState(false);
  const [errorPassword, setErrorpassword] = useState();

const {isLoading} = useAppSelector((state) => state.login)
  const dispatch = useDispatch();
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target.value;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill up the form");
    }
    dispatch(loginPending());

    try {
      const isAuth: any = await userLogin({ email, password });
      if (isAuth.status === "error") {
        setErroremail(true)
        setErrorpassword(isAuth.message)
        return dispatch(loginFail(isAuth.message));
      }
        dispatch(loginSuccess());
        dispatch(getUserProfile());
        router.push("/admin/bookings")
      
      
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };
  return (
    <Box
      position="relative"
      backgroundColor="blue.50"
      w="100%"
      zIndex="1"
      h="100vh"
      overflow="hidden"
    >
      <Box
        left="-20"
        bottom={{ base: 80, md: 80 }}
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
        top={{ base: 32, md: "100" }}
        position="absolute"
        backgroundColor="blue"
        h={10}
        w="50%"
        zIndex="-1"
        transform="rotate(-14deg)"
        opacity="0.5"
      ></Box>
      <Box
        top={{ base: 16, md: "100" }}
        position="absolute"
        right="30"
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
          px={10}
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
            // mt={2.5}
            value={email}
            name="email"
            type="email"
            onChange={handleChange}
          />
          {/* {errorEmail && (
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
          )} */}
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
            name="password"
            type="password"
            zIndex="999"
            onChange={handleChange}
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
              <Text textAlign="center">{errorPassword}</Text>
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
            isLoading={isLoading}
            colorScheme="messenger"
            fontSize="14px"
            fontFamily="sans-serif"
            letterSpacing="0.9px"
            onClick={handleLogin}
            loadingText="Loading"
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

export default Login;

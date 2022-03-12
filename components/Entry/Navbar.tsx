import { CheckIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillShopping } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { HiShoppingBag, HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const [show, handleShow] = useState(false)

  const transitionNavbar = () => {
      if (window.scrollY > 20) {
          handleShow(true)
      } else{
          handleShow(false)
      }
  }
  useEffect(() => {
      window.addEventListener("scroll", transitionNavbar)
      return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])

  return (
    <Flex
      // backgroundColor="#5395f6"
      // backgroundColor="red"
      py={2}
      alignItems="center"
      px={{base:"20px", md:"40px"}}
      w={{base:"100%", md:"100%", lg:"100%"}}
      mx="auto"
      zIndex="999"
      position="sticky"
      top="0"
      backgroundColor={show && 'gray.50'}
      shadow={show ? 'md' :  'none'}
      
    >
      <Flex alignItems="center">
        <Flex
          alignItems="center"
          justifyContent="right"
          fontWeight="extrabold"
          backgroundColor="#f9bf16"
          rounded="100%"
          h={14}
          w={14}
          fontSize="16px"
        >
          WeDo
        </Flex>
        <Text fontWeight="bold" fontSize="18px" color={show ?  '#5395f6' : 'white'}>
          CLEANING
        </Text>
      </Flex>
      <Spacer />
      <Stack
        direction={["column", "row"]}
        spacing="40px"
        display={{ base: "none", md: "inline-flex" }}
        color={show ?  '#5395f6' : "white"}
        cursor="pointer"
        letterSpacing="1.5px"
      >
        <Box>Home</Box>
        <Flex alignItems="center">
          <Text>Service</Text>
          <Box>
            <ChevronDownIcon fontSize="18px" />
          </Box>
        </Flex>
        <Flex alignItems="center" justify="center">
          <Text mr={1.5}>Shop</Text>
          <Flex alignItems="center" justify="center">
            <BsFillBagCheckFill fontSize="14px" />{" "}
            
          </Flex>
        </Flex>
        <Box>Blog</Box>
      </Stack>
      <Spacer />
      <Button display={{ base: "block", md: "none" }}>
        <HamburgerIcon />
      </Button>
      <Button
        display={{ base: "none", md: "block" }}
        rounded="3xl"
        px={5}
        colorScheme="gray"
        fontSize="14px"
        fontWeight="bold"
      >
        Sign Up
      </Button>
    </Flex>
  );
};

export default Navbar;

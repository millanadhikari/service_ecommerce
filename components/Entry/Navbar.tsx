import { CheckIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter()

  const transitionNavbar = () => {
    if (window.scrollY > 20) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <Flex
      // backgroundColor="#5395f6"
      // backgroundColor="red"
      py={2}
      alignItems="center"
      px={{ base: "20px", md: "40px" }}
      w={{ base: "100%", md: "100%", lg: "100%" }}
      mx="auto"
      zIndex="999"
      position="sticky"
      top="0"
      backgroundColor={show && "white"}
      shadow={show ? "md" : "none"}
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
        <Text
          fontWeight="bold"
          fontSize="18px"
          color={show ? "#5395f6" : "white"}
        >
          CLEANING
        </Text>
      </Flex>
      <Spacer />
      <Stack
        direction={["column", "row"]}
        spacing="40px"
        display={{ base: "none", md: "inline-flex" }}
        color={show ? "#5395f6" : "white"}
        letterSpacing="1.5px"
      >
        <Box cursor="pointer" onClick={() => router.push('/')}>Home</Box>
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
        <Box onClick={() => router.push('/')}>Blog</Box>
      </Stack>
      <Spacer />
      <Box fontSize="30px" mr={5} color={!show ? "gray.100" : '#5395f6'} onClick={() => window.open("tel:+61415976451")} cursor="pointer">
        <BiPhoneCall />
      </Box>
      <Button display={{ base: "block", md: "none" }} _focus={{border:"none"}}  onClick={() => setOpenMenu(!openMenu)} >
        <HamburgerIcon/>
      </Button>
     
      <Button
        display={{ base: "none", md: "block" }}
        rounded="3xl"
        px={5}
        colorScheme={show ? "blue" : "gray"}
        fontSize="13px"
        onClick={() => router.push('/booking')}
      >
        Book Online
      </Button>
      {openMenu && <MobileNavMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/> }
    </Flex>
  );
};

export default Navbar;

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillBagCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useAppSelector } from "../Admin/app/hooks";
import RequestQuote from "../Quote/RequestQuote";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quote, setQuote] = useState<boolean>(false);

  const router = useRouter();

  const isCustomer = useAppSelector((state) => state.user.user?.isCustomer);

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
      <RequestQuote quote={quote} setQuote={setQuote} />

      <Flex alignItems="center" onClick={() => router.push("/")}>
        <Flex
          alignItems="center"
          justifyContent="right"
          fontWeight="extrabold"
          fontFamily="Arial, sans-serif"
          backgroundColor="#f9bf16"
          rounded="100%"
          color="gray.700"
          h={"54px"}
          w={"54px"}
          fontSize="15px"
        >
          WeDo
        </Flex>
        <Text
          fontWeight="bold"
          fontSize="16px"
          letterSpacing="1px"
          ml={0.5}
          mt={0.5}
          color={show ? "#3182ce" : "white"}
        >
          CLEANING
        </Text>
      </Flex>
      <Spacer />
      <Stack
        direction={["column", "row"]}
        spacing="40px"
        display={{ base: "none", md: "inline-flex" }}
        color={show ? "#3182ce" : "white"}
        letterSpacing="1.5px"
        fontSize="15px"
      >
        <Box cursor="pointer" onClick={() => router.push("/")}>
          Home
        </Box>
        {/* <Flex
          alignItems="center"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          isOpen={isOpen}
          cursor="pointer"
        >
          <Text>Service</Text>
          <Box>
            {!isOpen ? (
              <ChevronDownIcon fontSize="18px" />
            ) : (
              <ChevronUpIcon fontSize="18px" />
            )}
          </Box>
          </Flex> */}
        <Menu>
          <MenuButton transition="all 0.2s">
            Services <ChevronDownIcon fontSize="18px" />
          </MenuButton>
          <MenuList color="blue.600">
            <MenuItem>End of Lease Clean</MenuItem>
            <MenuItem>General Clean</MenuItem>
            <MenuDivider />
            <MenuItem>Carpet Steam Clean</MenuItem>
            <MenuItem>Mould Clean</MenuItem>
          </MenuList>
        </Menu>
        {/* {isOpen && 'milan'} */}
        {/* <Box>
            {isOpen ? (
            
                <MenuList>
                  <MenuItem>New asdfasddf </MenuItem>{" "}
                </MenuList>
              
            ): null}
          </Box> */}
        <Flex alignItems="center" justify="center">
          <Text mr={1.5}>Shop</Text>
          <Flex alignItems="center" justify="center">
            <BsFillBagCheckFill fontSize="14px" />{" "}
          </Flex>
        </Flex>
        <Box cursor="pointer" onClick={() => router.push("/blogs")}>
          Blogs
        </Box>
      </Stack>
      <Spacer />
      {isCustomer && (
        <Box
          onClick={() => router.push("/customerPortal")}
          cursor="pointer"
          fontSize="40px"
          mr={3}
          color={!show ? "gray.100" : "#5395f6"}
        >
          <MdOutlineAccountCircle />
        </Box>
      )}
      <Box
        fontSize="18px"
        mr={5}
        backgroundColor="gray.100"
        p={3}
        shadow="md"
        color={!show ? "gray" : "#5395f6"}
        rounded="full"
        onClick={() => window.open("tel:+61415976451")}
        cursor="pointer"
      >
        <BsFillTelephoneFill color="#5395f6" />
      </Box>

      <Button
        display={{ base: "block", md: "none" }}
        _focus={{ border: "none" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <HamburgerIcon />
      </Button>

      <Button
        display={{ base: "none", md: "block" }}
        rounded="3xl"
        px={4}
        colorScheme={show ? "blue" : "gray"}
        fontSize="12px"
        onClick={() => setQuote(!quote)}
      >
        Get Quote
      </Button>
      {openMenu && (
        <MobileNavMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}
    </Flex>
  );
};

export default Navbar;

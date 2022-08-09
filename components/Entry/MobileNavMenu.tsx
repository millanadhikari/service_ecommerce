import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillContacts, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiTwotoneShopping } from "react-icons/ai";
import { BsChevronDown, BsFacebook, BsInfoCircleFill } from "react-icons/bs";
import { FaBlogger, FaHome, FaSignInAlt, FaSprayCan } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { userLogout } from "../Admin/api/userApi";
import { useAppDispatch, useAppSelector } from "../Admin/app/hooks";
import { logoutSuccess } from "../Admin/user/userSlice";
import CustomerAuth from "../customerAuth/CustomerAuth";

const MobileNavMenu = ({ openMenu, setOpenMenu }) => {
  const [isopen, setIsOpen] = useState(false)
  const customer = useAppSelector((state) => state.user.user)
  const isCustomer = useAppSelector((state) => state.user.user?.isCustomer)
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()
  const dispatch = useAppDispatch()


  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("service_ecommerce");
    userLogout();
    dispatch(logoutSuccess())
  };

  useEffect(() => {
    isCustomer ? setLoggedIn(true) : setLoggedIn(false)
  }, [isCustomer])
  return (

    <Drawer
      isOpen={true}

      placement="right"
      onClose={() => setOpenMenu(false)}

    // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor="blue.50" px="-10px">
        <DrawerCloseButton _focus={{ outline: "none" }} />
        <DrawerHeader display="flex" mt="10" ml="-2">

          <Flex justifyContent="space-between" alignItems="center" width="100%" >
            <Flex alignItems="center"  >
              <Flex
                alignItems="center"
                justifyContent="right"
                fontWeight="extrabold"
                fontFamily="Arial, sans-serif"
                backgroundColor="#f9bf16"
                rounded="100%"
                color="gray.700"
                h={'54px'}
                w={'54px'}

                fontSize="15px"
              >
                WeDo
              </Flex>
              <Text
                fontWeight="bold"
                fontSize="14px"
                letterSpacing="1px"
                ml={0.5}
                mt={0.5}
              >
                CLEANING
              </Text>
            </Flex>
            <Flex cursor="pointer" onClick={() => window.open("tel:+61415976451")} rounded="md" gap={2} p={2} px="3" alignItems="center" backgroundColor="#5395f6" color="white" fontSize={13} >
              <Box fontSize="22"> <MdCall /> </Box>
              Call
            </Flex>
          </Flex>
        </DrawerHeader>
        <Box letterSpacing="1px" fontSize="14px" backgroundColor="blue.600" py={3} color="gray.300"  >
         {!loggedIn ?  <Flex alignItems="center" justifyContent="center" gap={10} >
            <Box onClick={() => setIsOpen(!isopen)} borderRight="1px solid gray" borderColor="gray.100" pr={10} cursor="pointer" _hover={{ color: "gray.100" }}>
              Log in
            </Box>
            <Box cursor="pointer" onClick={() => setIsOpen(!isopen)} _hover={{ color: "gray.100" }}>
              Register
            </Box>

          </Flex> 
          : 
          <Flex px={8}>
            Hi, 
            <Text ml={3}>{customer.name}</Text>
            </Flex>
          }
        </Box>


        <Box mx="2" my={4}>

          <Flex
            justifyContent="space-between"
            alignItems="left"
            flexDirection="column"
            fontSize="15px"
            color="gray.600"
            my={3}


            gap={5}
          >
            <Flex gap={3} alignItems="center" px="4" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
              <Box fontSize="18px"><FaHome /></Box>
              <Text onClick={() => (setOpenMenu(!openMenu), router.push('/'))}
              >Home</Text>
            </Flex>
            <Flex w="100%" alignItems="center" justifyContent="space-between" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
              {/* <Text>
                Services
                </Text>
                <BsChevronDown/> */}
              <Accordion w="100%" allowMultiple allowToggle={true} my={-3} _hover={{ color: "black" }} border="1px solid blue" borderColor="blue.50">
                <AccordionItem>
                  <h2>
                    <AccordionButton _focus={{ outline: "none", border: "0px solid white" }} _hover={{ color: "blue.400" }}>
                      <Flex justifyContent="space-between" w="100%">
                        <Flex gap={3} alignItems="center" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
                          <Box fontSize="18px"><FaSprayCan /></Box>
                          <Text fontSize="15px">Services</Text>


                        </Flex>
                        <AccordionIcon />
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Flex flexDirection="column" gap={3} mx="30px" fontSize="15px" fontWeight="light" color="gray.500">
                      <Text>End of Lease Clean</Text>
                      <Text>General Cleaning</Text>
                      <Text>Carpet Cleaning</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>

              </Accordion>

            </Flex>
            <Flex gap={3} alignItems="center" px="4" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
              <Box fontSize="18px"><AiTwotoneShopping /></Box>
              <Text>Shop</Text>
            </Flex>
            <Flex onClick={() => router.push('/blogs')} gap={3} alignItems="center" px="4" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
              <Box fontSize="18px"><FaBlogger /></Box>
              <Text>Blog</Text>
            </Flex>
            <Flex gap={3} alignItems="center" px="4" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
              <Box fontSize="18px"><BsInfoCircleFill /> </Box>
              <Text>About</Text>
            </Flex>
            <Flex onClick={() => router.push('/contact')} gap={3} alignItems="center" px="4" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
              <Box fontSize="18px"><AiFillContacts /> </Box>
              <Text>Contact</Text>
            </Flex>

            <Stack direction="column" spacing={5} mx={4} mt="10px">
              <Button
                backgroundColor="#5395f6"
                color="white"
                letterspacing="7px"
                variant="solid"
                fontWeight="light"
                _focus={{ outline: "none" }}
                _hover={{ backgroundColor: "blue.300" }}
                onClick={() => router.push('/booking')}

                px={8}
                fontSize="14px"
              >
                Book Online
              </Button>
              {loggedIn ?
                <Button
                  rightIcon={<FaSignInAlt />}
                  colorScheme="skyblue"
                  borderColor="#5395f6"
                  color="#5395f6"
                  variant="outline"
                  _focus={{ outline: "none" }}
                  onClick={() => logMeOut()}
                  fontSize="14px"
                >
                  Log-out
                </Button> :
                <Button
                  rightIcon={<FaSignInAlt />}
                  colorScheme="skyblue"
                  borderColor="#5395f6"
                  color="#5395f6"
                  variant="outline"
                  _focus={{ outline: "none" }}
                  onClick={() => setIsOpen(!isopen)}
                  fontSize="14px"
                >
                  Log-in
                </Button>}
            </Stack>
          </Flex>
        </Box>
        <Flex justifyContent="center" gap={3} fontSize={24} m={5} color="gray.500">
          <BsFacebook cursor="pointer" />
          <AiFillInstagram cursor="pointer" />
          <AiFillLinkedin cursor="pointer" />
          <AiFillYoutube cursor="pointer" />
        </Flex>
        <CustomerAuth isopen={isopen} setIsOpen={setIsOpen} />
      </DrawerContent>
    </Drawer>

  );
};

export default MobileNavMenu;

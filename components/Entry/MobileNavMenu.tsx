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
import React from "react";
import { AiFillContacts, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiTwotoneShopping } from "react-icons/ai";
import { BsChevronDown, BsFacebook, BsInfoCircleFill } from "react-icons/bs";
import { FaBlogger, FaHome, FaSignInAlt, FaSprayCan } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdCall } from "react-icons/md";

const MobileNavMenu = ({ openMenu, setOpenMenu }) => {

  const router = useRouter()

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
            <Flex alignItems="center" >
              <Flex
                alignItems="center"
                justifyContent="right"
                fontWeight="extrabold"
                backgroundColor="#f9bf16"
                rounded="100%"
                h={10}
                w={10}
                fontSize="12px"
                color="white"
              >
                WeDo
              </Flex>
              <Text fontWeight="bold" fontSize="18px" color="Black">
                CLEANING
              </Text>
            </Flex>
            <Flex  onClick={() => window.open("tel:+61415976451")} rounded="md" gap={2} p={2} px="3" alignItems="center" backgroundColor="#5395f6" color="white" fontSize={13} >
              <Box fontSize="22"> <MdCall /> </Box>
              Call
            </Flex>
          </Flex>
        </DrawerHeader>

        <Flex alignItems="center" justifyContent="center" gap={10} letterSpacing="0.9px" fontSize="14px" backgroundColor="blue.600" py={3} color="gray.200" fontWeight="semibold" >
          <Box borderRight="1px solid gray" borderColor="gray.100" pr={10} cursor="pointer">
            Log in
          </Box>

          <Box cursor="pointer">
            Register
          </Box>

        </Flex>

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
            <Flex gap={3} alignItems="center" px="4" letterSpacing="0.8px" cursor="pointer" _hover={{ color: "blue.400" }}>
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
              <Button
                rightIcon={<FaSignInAlt />}
                colorScheme="skyblue"
                borderColor="#5395f6"
                color="#5395f6"
                variant="outline"
                _focus={{ outline: "none" }}

                fontSize="14px"
              >
                Log-In
              </Button>
            </Stack>
          </Flex>
        </Box>
        <Flex justifyContent="center" gap={3} fontSize={24} m={5} color="gray.500">
         <BsFacebook cursor="pointer"/>
         <AiFillInstagram cursor="pointer"/>
         <AiFillLinkedin cursor="pointer"/>
         <AiFillYoutube cursor="pointer"/>
        </Flex>
      </DrawerContent>
    </Drawer>

  );
};

export default MobileNavMenu;

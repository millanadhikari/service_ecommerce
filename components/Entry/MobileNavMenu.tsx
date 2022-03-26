import {
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
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";

const MobileNavMenu = ({ openMenu, setOpenMenu }) => {
  return (
    
      <Drawer
        isOpen={true}
        placement="right"
        onClose={() => setOpenMenu(false)}
        
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="blue.50">
          <DrawerCloseButton />
          <DrawerHeader display="flex" justifyContent="center">
            <Flex alignItems="center" >
              <Flex
                alignItems="center"
                justifyContent="right"
                fontWeight="extrabold"
                backgroundColor="#f9bf16"
                rounded="100%"
                h={16}
                w={16}
                fontSize="18px"
                color="white"
              >
                WeDo
              </Flex>
              <Text fontWeight="bold" fontSize="20px" color="Black">
                CLEANING
              </Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              fontSize="14px"
              fontWeight="semibold"
              gap={4}
            >
              <Flex  alignItems="center" justifyContent="center" cursor="pointer" _hover={{textDecoration:"underline"}}>
                Home
              </Flex>
              <Flex  alignItems="center" justifyContent="center" cursor="pointer" _hover={{textDecoration:"underline"}}>
                Services
              </Flex>
              <Flex  alignItems="center" justifyContent="center" cursor="pointer" _hover={{textDecoration:"underline"}}>
                Shop
              </Flex>
              <Flex  alignItems="center" justifyContent="center" cursor="pointer" _hover={{textDecoration:"underline"}}>
                Blog
              </Flex>
              <Stack direction="column" spacing={3}>
                <Button
                  rightIcon={<FaSignInAlt />}
                  backgroundColor="red"
                  colorScheme=" skyblue"
                  variant="solid"
                  px={8}
                  fontSize="13px"
                >
                  Booking
                </Button>
                <Button
                  rightIcon={<FaSignInAlt />}
                  colorScheme="skyblue"
                  variant="outline"
                  fontSize="13px"
                >
                  Log-In
                </Button>
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    
  );
};

export default MobileNavMenu;

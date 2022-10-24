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
  Input,
} from "@chakra-ui/react";
import React from "react";
import { GrAnalytics } from "react-icons/gr";

const DrawerLayout = ({
  children,
  isOpen,
  onClose,
  ref,
  onSubmit,
  isLoading,
  setLoading,
  title,
}) => {
  return (
    <Box fontFamily="sans-serif">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={ref}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent rounded="xl" my={10}>
          <Box borderBottom="1px solid gray" mx={5} borderColor="gray.300">
            <DrawerHeader
              fontSize="18px"
              fontWeight="semibold"
              fontFamily="sans-serif"
              ml={-6}
            >
              Add Quote
            </DrawerHeader>
            <DrawerCloseButton _focus={{ outline: "none" }} />
          </Box>
          <DrawerBody>
            <div>{children}</div>
          </DrawerBody>

          <DrawerFooter>
            <Flex w="100%" gap={4}>
              {/* <Button w="100%%" variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button> */}
              <Button
                onClick={onClose}
                _hover={{ bg: "gray.500" }}
                size="sm"
                fontSize="14px"
                rounded="full"
                bg="gray.400"
                color="white"
                w="50%"
              >
                Cancel
              </Button>
              <Button
                _hover={{ bg: "gray.500" }}
                size="sm"
                fontSize="14px"
                rounded="full"
                bg="blue.700"
                color="white"
                w="50%"
                onClick={onSubmit}
              >
                {isLoading ? "Loading" : "Save"}
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerLayout;

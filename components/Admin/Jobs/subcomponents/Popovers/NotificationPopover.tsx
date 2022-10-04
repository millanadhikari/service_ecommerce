import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import {
  AiFillBell,
  AiFillSetting,
  AiOutlineCaretDown,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { MdMessage } from "react-icons/md";
const NotificationPopver = () => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Flex
          bg="gray.200"
          rounded="xl"
          color="gray.600"
          px={2}
          py={2}
          cursor="pointer"
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={AiFillBell} fontSize="20px" />
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        w="400px"
        h="330px"
        mr={6}
        px={4}
        py={1.5}
        _focus={{ outline: "none" }}
      >
        <PopoverArrow />

        <PopoverBody>
          <Text
            fontWeight="semibold"
            color="gray.400"
            fontSize="14px"
            letterSpacing="1px"
          >
            Notifications
          </Text>
          <Box textAlign="center" color="gray.300" mt="20">
            <Icon fontSize="60px" as={MdMessage} />
            <Text fontWeight="semibold" letterSpacing="1px" fontSize="14px" mt={2}>All clear! No notifications!</Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopver;

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

const NotificationPopver = ({ notifications }) => {
  const displayNotifications = ({ senderName, type }) => {
    let action;
    if (type === 1) {
      action = "created";
    } else {
      action = "edited";
    }
    return (
      <Box my={4} fontSize="14px" color="gray.500">
        {`${senderName} ${action} a new quote`}
      </Box>
    );
  };
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Flex
          bg="gray.200"
          rounded="xl"
          color="gray.600"
          px={2.5}
          py={2}
          cursor="pointer"
          position="relative"
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={AiFillBell} fontSize="20px" />
          {notifications.length > 0 && (
            <Text
              position="absolute"
              left="25.5px"
              top="2"
              textAlign="center"
              fontSize="8"
              bg="red"
              rounded="full"
              w={3}
              h={3}
              color="white"
            >
              {notifications.length}
            </Text>
          )}
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
          {/* <Box textAlign="center" color="gray.300" mt="20">
            <Icon fontSize="60px" as={MdMessage} />
            <Text fontWeight="semibold" letterSpacing="1px" fontSize="14px" mt={2}>All clear! No notifications!</Text>
          </Box> */}
          {notifications.map((n) => displayNotifications(n))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopver;

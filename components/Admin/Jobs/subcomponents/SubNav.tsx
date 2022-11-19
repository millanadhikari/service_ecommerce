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
import React, { useState, useEffect } from "react";
import {
  AiFillBell,
  AiFillSetting,
  AiOutlineCaretDown,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { useAppSelector } from "../../app/hooks";
import NotificationPopver from "./Popovers/NotificationPopover";
import ProfilePopover from "./Popovers/ProfilePopover";

const SubNav = () => {
  const Socket = useAppSelector((state) => state.user.Socket);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    Socket?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [Socket, notifications]);

  console.log(notifications);
  return (
    <Flex
      alignItems="center"
      gap={4}
      py={4}
      justifyContent={{ base: "right", md: "right" }}
      px={6}
    >
      <ProfilePopover />

      <Flex
        bg="gray.200"
        rounded="xl"
        color="gray.600"
        px={2}
        py={2}
        cursor="pointer"
        _hover={{ bg: "gray.300" }}
      >
        <Icon as={AiOutlineMenuFold} fontSize="20px" />
      </Flex>
      <Flex
        bg="gray.200"
        rounded="2xl"
        color="gray.600"
        alignItems="center"
        gap={2}
        px={4}
        py={2}
        cursor="pointer"
        _hover={{ bg: "gray.300" }}
      >
        <Icon as={BiHelpCircle} fontSize="20px" />
        <Text fontSize="14px" fontWeight="semibold">
          Help
        </Text>
      </Flex>
      <Flex
        bg="gray.200"
        rounded="xl"
        color="gray.600"
        px={2}
        py={2}
        cursor="pointer"
        _hover={{ bg: "gray.300" }}
      >
        <Icon as={AiFillSetting} fontSize="20px" />
      </Flex>
     
        <NotificationPopver notifications={notifications} />
     
    </Flex>
  );
};

export default SubNav;

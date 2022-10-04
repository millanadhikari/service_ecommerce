import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { useAppSelector } from "../../app/hooks";

const SidebarLink = ({ item }) => {
  const router = useRouter();
  const sidebarOpen = useAppSelector((state) => state.user.sidebarOpen) || undefined;

  return (
    <Link href={item.href}>
      <Flex
        my={1}

        px="8"
        py="2"
        w="100%"
        alignItems="center"
        cursor="pointer"
        fontSize="13px"
        letterSpacing="0.5px"
        gap={2}
        _hover={{
          backgroundColor:
            router.asPath === item.href ? "#e1ddf8" : "gray.100",
        }}
        backgroundColor={
          router.asPath === item.href ? "#e1ddf8" : undefined
        }
      >
        <Icon
          fontSize="20px"
          maxW="30px"
          aria-label="Search database"
          textAlign="center"
          color={router.asPath === item.href ? "#7c68ee" : "none"}
          
          as={router.asPath === item.href ? item.icon1 : item.icon2}
        />
        <Text
          fontWeight={router.asPath === item.href ? "semibold" : "none"}
          color={router.asPath === item.href ? "#7c68ee" : "none"}
          ml={2}
        >
         {sidebarOpen && item.title}
        </Text>
      </Flex>
    </Link>
  );
};

export default SidebarLink;

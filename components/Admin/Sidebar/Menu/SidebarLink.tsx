import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { useAppSelector } from "../../app/hooks";

const SidebarLink = ({ item }) => {
  const router = useRouter();
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;

  return (
    <Link href={item.href}>
      <Flex
        pl={
          sidebarOpen
            ? router.asPath === item.href && sidebarOpen
              ? "5"
              : "6"
            : "6"
        }
        ml={0.5}
        py="9px"
        alignItems="center"
        cursor="pointer"
        justifyContent="start"
        gap={4}
        fontSize="13px"
        letterSpacing="0.5px"
        borderLeft={router.asPath === item.href ? "3px solid gray" : "none"}
        borderColor="#7c68ee"
        _hover={{
          backgroundColor: router.asPath === item.href ? "#e1ddf8" : "gray.100",
        }}
        backgroundColor={router.asPath === item.href ? "#e1ddf8" : undefined}
      >
        <Box w="22px">
          <Icon
            fontSize={
              sidebarOpen
                ? router.asPath === item.href
                  ? "22"
                  : "19"
                : router.asPath === item.href
                ? "21"
                : "19"
            }
          
            aria-label="Search database"
            textAlign="left"
            mx={sidebarOpen ? 0 : "auto"}
            color={router.asPath === item.href ? "#7c68ee" : "none"}
            as={router.asPath === item.href ? item.icon1 : item.icon2}
          />
        </Box>
        <Text
          fontWeight={router.asPath === item.href ? "semibold" : "none"}
          color={router.asPath === item.href ? "#7c68ee" : "none"}
          pb={1}
          pl={
            sidebarOpen
              ? router.asPath === item.href && sidebarOpen
                ? "1px"
                : "0px"
              : "0"
          }
        >
          {sidebarOpen && item.title}
        </Text>
      </Flex>
    </Link>
  );
};

export default SidebarLink;

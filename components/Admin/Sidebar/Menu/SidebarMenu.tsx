import React, { useState } from "react";
import { Box, Flex, Icon, Link, Spacer, Text } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { AiFillHome, AiOutlineHome as Aioutlinehome } from "react-icons/ai";
import { BiBellMinus } from "react-icons/bi";
import { GiTargetPrize } from "react-icons/gi";
import { useAppSelector } from "../../app/hooks";
import { useRouter } from "next/router";
import { BsBellFill, BsFillPeopleFill, BsPeople } from "react-icons/bs";
import { RiNewspaperFill, RiNewspaperLine } from "react-icons/ri";


const SidebarMenu = () => {
  const [showLess, setShowLess] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("home");
  const sidebarOpen = useAppSelector((state) => state.user.sidebarOpen) || undefined;
  const isSuperAdmin = useAppSelector((state) => state.user.isSuperAdmin)
  
  const router = useRouter();
  const url = window.location.href

  return (
    <Box
      position="absolute"
      color="gray.500"
      mt="20px"
      w={sidebarOpen ? "300px" : "80px"}
      fontSize="13px"
    >
      <Flex
        role="group"
        px="8"
        py="2"
        _hover={{
          backgroundColor: router.asPath === "/admin/home" ? "#e1ddf8" : "gray.100",
        }}
        backgroundColor={router.asPath === "/admin/home" ? "#e1ddf8" : undefined}
        w="100%"
        alignItems="center"
        borderLeft={router.asPath === "/admin/home" ? "4px solid black" : undefined}
        borderColor="#7c68ee"
        cursor="pointer"
        fontSize="13px"
        letterSpacing="0.5px"
        onClick={(e) => {
          e.preventDefault() 
          router.push("/admin/home") 
          setIsActive("home");
        }}
      >
        <Icon
          fontSize="20px"
          aria-label="Search database"
          textAlign="center"
          color={router.asPath === "/admin/home" ? "#7c68ee" : "none"}
          mr="3"
          as={router.asPath === "/admin/home" ? AiFillHome : Aioutlinehome}
        />

        <Text
          fontWeight={router.asPath === "/admin/home" ? "semibold" : "none"}
          color={router.asPath === "/admin/home" ? "#7c68ee" : "none"}
        >
          {sidebarOpen && "Home"}
        </Text>
      </Flex>
      <Flex
        role="group"
        px="8"
        py="2"
        _active={{ backgroundColor: "purple" }}
        _hover={{
          backgroundColor:
            isActive === "notifications" ? "#e1ddf8" : "gray.100",
        }}
        backgroundColor={isActive === "notifications" ? "#e1ddf8" : undefined}
        borderLeft={
          isActive === "notifications" ? "4px solid black" : undefined
        }
        borderColor="#7c68ee"
        w="100%"
        alignItems="center"
        cursor="pointer"
        fontSize="13px"
        letterSpacing="0.5px"
        onClick={() => {
          router.push("/notifications"), setIsActive("notifications");
        }}
      >
        <Icon
          fontSize="20px"
          aria-label="Search database"
          color={isActive === "notifications" ? "#7c68ee" : "none"}
          textAlign="center"
          mr="3"
          as={isActive === "notifications" ? BsBellFill : BiBellMinus}
        />
        <Text
          fontWeight={isActive === "notifications" ? "semibold" : "none"}
          color={isActive === "notifications" ? "#7c68ee" : "none"}
        >
          {" "}
          {sidebarOpen && "Notifications"}
        </Text>
      </Flex>
      {showLess && (
        <Box>
          {isSuperAdmin && (
            <Flex
              role="group"
              px="8"
              py="2"
              _hover={{
                backgroundColor: isActive === "users" ? "#e1ddf8" : "gray.100",
              }}
              backgroundColor={isActive === "users" ? "#e1ddf8" : undefined}
              w="100%"
              alignItems="center"
              borderLeft={isActive === "users" ? "4px solid black" : undefined}
              borderColor="#7c68ee"
              cursor="pointer"
              fontSize="13px"
              letterSpacing="0.5px"
              onClick={() => {
                router.push("/users"), setIsActive("users");
              }}
            >
              <Icon
                fontSize="20px"
                aria-label="Search database"
                textAlign="center"
                color={isActive === "users" ? "#7c68ee" : "none"}
                mr="3"
                as={isActive === "users" ? BsFillPeopleFill : BsPeople}
              />

              <Text
                fontWeight={isActive === "users" ? "semibold" : "none"}
                color={isActive === "users" ? "#7c68ee" : "none"}
              >
                {sidebarOpen && "Users"}
              </Text>
            </Flex>
          )}
          <Link href="/admin/bookings">
            <Flex
             role="group"
             px="8"
             py="2"
             _hover={{
               backgroundColor: router.asPath === "/admin/bookings" ? "#e1ddf8" : "gray.100",
             }}
             backgroundColor={router.asPath === "/admin/bookings" ? "#e1ddf8" : undefined}
             w="100%"
             alignItems="center"
             borderLeft={router.asPath === "/admin/bookings" ? "4px solid black" : undefined}
             borderColor="#7c68ee"
             cursor="pointer"
             fontSize="13px"
             letterSpacing="0.5px"
              onClick={() => {
                setIsActive("bookings");
              }}
            >
              <Icon
                textDecoration="none"
                fontSize="20px"
              
                backgroundColor={router.asPath === "/admin/bookings" ? 'none' : "white"}
                color={router.asPath === "/admin/bookings" ? "#7c68ee" : "none"}

                aria-label="Search database"
                textAlign="center"
                mr="3"
                as={GiTargetPrize}
              />
              {sidebarOpen && "Bookings"}
            </Flex>
          </Link>
          <Link href="/admin/quotes">
            <Flex
              role="group"
              px="8"
              py="2"
              _hover={{ backgroundColor: "gray.100" }}
              w="100%"
              alignItems="center"
              cursor="pointer"
              fontSize="13px"
              letterSpacing="0.5px"
              onClick={() => {
                setIsActive("quotes");
              }}
            >
              <Icon
                textDecoration="none"
                _hover={{ background: "gray.100" }}
                fontSize="20px"
                _groupHover={{ backgroundColor: "gray.100" }}
                backgroundColor="white"
                aria-label="Search database"
                textAlign="center"
                mr="3"
                as={isActive === 'quote' ? RiNewspaperLine : RiNewspaperFill }
              />
              {sidebarOpen && "Quotes"}
            </Flex>
          </Link>
        </Box>
      )}
      {showLess ? (
        <Box onClick={() => setShowLess(!showLess)}>
          <Flex
            role="group"
            px="8"
            py="2"
            _hover={{ backgroundColor: "gray.100" }}
            w="100%"
            alignItems="center"
            cursor="pointer"
            fontSize="13px"
            letterSpacing="0.5px"
          >
            <Icon
              _hover={{ background: "gray.100" }}
              fontSize="20px"
              _groupHover={{ backgroundColor: "gray.100" }}
              backgroundColor="white"
              aria-label="Search database"
              textAlign="center"
              mr="3"
              as={ArrowUpIcon}
            />
            {sidebarOpen && "Show less"}
          </Flex>
        </Box>
      ) : (
        <Box onClick={() => setShowLess(!showLess)}>
          <Flex
            role="group"
            px="8"
            py="2"
            _hover={{ backgroundColor: "gray.100" }}
            w="100%"
            alignItems="center"
            cursor="pointer"
            fontSize="13px"
            letterSpacing="0.5px"
          >
            <Icon
              _hover={{ background: "gray.100" }}
              fontSize="20px"
              _groupHover={{ backgroundColor: "gray.100" }}
              backgroundColor="white"
              aria-label="Search database"
              textAlign="center"
              mr="3"
              as={ArrowDownIcon}
            />
            {sidebarOpen && "Show more"}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default SidebarMenu;

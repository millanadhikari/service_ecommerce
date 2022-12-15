import React from "react";
import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  Slide,
  Fade,
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  SettingsIcon,
  Search2Icon,
  DragHandleIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import SidebarMenu from "./Menu/SidebarMenu";
import SpaceAccordion from "./Sidebar_Accordion/SpaceAccordion";
import {
  AiFillSchedule,
  AiOutlineQuestionCircle,
  AiOutlineSchedule,
} from "react-icons/ai";

import { BiChevronDown } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../Admin/app/hooks";
import {
  BsBookmarkCheck,
  BsBookmarkCheckFill,
  BsFillPeopleFill,
  BsPeople,
  BsPeopleFill,
  BsPersonDash,
  BsPersonDashFill,
  BsToggleOn,
} from "react-icons/bs";
import { userLogout } from "../api/userApi";
import { useRouter } from "next/router";
import { getSidebarStatus } from "../user/userSlice";
import withAuth from "../privateRoute/withAuth";
import SidebarLink from "./Menu/SidebarLink";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
  RiFilePaper2Line,
  RiFilePaperFill,
  RiMoneyDollarBoxFill,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlineRequestPage, MdRequestQuote } from "react-icons/md";

const menuItems = [
  {
    href: "/admin/home",
    title: "Home",
    icon1: AiFillHome,
    icon2: AiOutlineHome,
  },
  {
    href: "/admin/bookings",
    title: "Bookings",
    icon1: BsFillPeopleFill,
    icon2: BsPeople,
  },
  {
    href: "/admin/quotes",
    title: "Quotes",
    icon2: MdOutlineRequestPage,
    icon1: MdRequestQuote,
  },
  {
    href: "/admin/scheduling",
    title: "Scheduling",
    icon2: AiOutlineSchedule,
    icon1: AiFillSchedule,
  },
  {
    href: "/admin/technicians",
    title: "Technicians",
    icon2: BsPersonDash,
    icon1: BsPersonDashFill,
  },
  {
    href: "/admin/discount",
    title: "Discount",
    icon2: RiMoneyDollarBoxLine,
    icon1: RiMoneyDollarBoxFill,
  },
  {
    href: "/admin/pricing",
    title: "Pricing",
    icon2: BsBookmarkCheck,
    icon1: BsBookmarkCheckFill,
  },
  {
    href: "/admin/reports",
    title: "Reports",
    icon2: RiFilePaper2Line,
    icon1: RiFilePaperFill,
  },
];
const Sidebar = () => {
  const { isAuth } = useAppSelector((state) => state.login) || undefined;
  const user = useAppSelector((state) => state.user) || undefined;

  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;
  const dispatch = useAppDispatch();
  const Socket = useAppSelector((state) => state.user.Socket);

  const Router = useRouter();

  const handleSidebar = () => {
    dispatch(getSidebarStatus(!sidebarOpen));
  };
  const logmeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("service_ecommerce");
    userLogout();
    // Socket?.on("disconnect", () => {});
    Socket?.disconnect();
    Router.replace("/admin/login");
  };

  // console.log(user);

  return (
    <>
      <Box
        position="fixed"
        // display={{base:"hidden", md:"inline"}}
        top="0"
        w={sidebarOpen ? "300px" : "80px"}
        h="100vh"
        borderRight="1px solid "
        borderColor="gray.200"
        fontFamily="sans-serif"
      >
        <Flex p={5} pt={2} alignItems="center">
          <Flex alignItems="center">
            <Image
              src="https://app-cdn.clickup.com/assets/images/brand/clickup-symbol_color.svg"
              w={!sidebarOpen ? 5 : 6}
              h={sidebarOpen ? 7 : 6}
              mr={sidebarOpen ? 2 : 6}
              ml={!sidebarOpen && 2.5}
              objectFit="contain"
            />
            {sidebarOpen && (
              <Text fontWeight="bold" fontSize="1.3rem">
                CrmUp
              </Text>
            )}
          </Flex>
          <Spacer />
          <Flex alignItems="center">
            {sidebarOpen && (
              <IconButton
                backgroundColor="white"
                aria-label="Search database"
                textAlign="center"
                icon={
                  <SettingsIcon w={4} h={4} cursor="pointer" color="#7b68ee" />
                }
              />
            )}
            <IconButton
              backgroundColor="white"
              aria-label="Search database"
              textAlign="center"
              _focus={{ active: "none" }}
              onClick={handleSidebar}
              ml={!sidebarOpen && 2}
              icon={
                sidebarOpen ? (
                  <ArrowLeftIcon w={3} h={3} cursor="pointer" color="#7b68ee" />
                ) : (
                  <ArrowRightIcon
                    w={3}
                    h={3}
                    cursor="pointer"
                    color="#7b68ee"
                  />
                )
              }
            />
          </Flex>
        </Flex>
        {sidebarOpen && (
          <Flex px={5}>
            <InputGroup w="80%" size="sm">
              <InputLeftAddon>{<Search2Icon />} </InputLeftAddon>
              <Input
                placeholder="Search"
                variant="filled"
                focusBorderColor="gray.100"
              />
            </InputGroup>
            <Spacer />
            <IconButton
              backgroundColor="gray.100"
              aria-label="Search database"
              textAlign="center"
              size="sm"
              focusBorderColor="gray.100"
              icon={
                <DragHandleIcon
                  w={3}
                  h={3}
                  cursor="pointer"
                  color="#7b68ee"
                  size="sm"
                />
              }
            />
          </Flex>
        )}
        <Box mt={4}>
          {menuItems.map((item) => (
            <SidebarLink key={item.href} item={item} />
          ))}
        </Box>
        {sidebarOpen && (
          <Box mt="20rem">
            <SpaceAccordion />
          </Box>
        )}
        <Flex
          w={sidebarOpen ? "300px" : "80px"}
          position="fixed"
          bottom="0"
          justifyContent="space-between"
          px={5}
          py={3}
          borderTop="1px solid gray"
          borderbottom="1px solid gray"
          borderColor="gray.300"
          alignItems="center"
          color="gray.400"
        >
          <Popover>
            <PopoverTrigger>
              <Flex alignItems="center" cursor="pointer">
                <Flex
                  position="relative"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize="13px"
                  backgroundColor="red"
                  rounded="full"
                  h={9}
                  w={9}
                >
                  {user.user.firstName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  {user.user.lastName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  <Box
                    backgroundColor="green.500"
                    border="0.5px solid white"
                    h={2}
                    w={2}
                    rounded="full"
                    position="absolute"
                    top="0"
                    right="0.5"
                  ></Box>
                </Flex>
                <BiChevronDown />
              </Flex>
            </PopoverTrigger>
            <PopoverContent
              w="200px"
              ml={10}
              top={10}
              _focus={{ border: "1px solid gray", borderColor: "gray.200" }}
            >
              <Box>
                <PopoverCloseButton />
              </Box>
              <Flex mt={5} mx={5} alignItems="center">
                <Flex
                  position="relative"
                  mr={2}
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize="10px"
                  backgroundColor="red"
                  rounded="full"
                  h={8}
                  w={8}
                >
                  {user.user.firstName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  {user.user.lastName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  <Box
                    backgroundColor="green.500"
                    border="0.5px solid white"
                    h={2}
                    w={2}
                    rounded="full"
                    position="absolute"
                    top="0"
                    right="0.5"
                  ></Box>
                </Flex>
                <Text
                  fontSize="12px"
                  fontFamily="sans-serif"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  {user.user.firstName}
                  {"  "}
                  {user.user.lastName}
                </Text>
              </Flex>
              <Box
                fontSize="13px"
                letterSpacing="0.3px"
                fontFamily="sans-serif"
                fontWeight="light"
                color="gray.600"
                my={5}
                px={6}
              >
                <Flex
                  cursor="pointer"
                  direction="column"
                  gap={2}
                  borderBottom="1px solid gray"
                  borderColor="gray.300"
                  pb={4}
                >
                  <Text>My Settings</Text>
                  <Text>Notifications</Text>
                  <Text>Apps</Text>
                  <Text>My Settings</Text>
                </Flex>

                <Flex direction="column" gap={2} mt={4} cursor="pointer">
                  <Text onClick={logmeOut}>Logout</Text>
                  <Text>Help</Text>
                  <Flex alignItems="center" justifyContent="space-between">
                    Dark Mode
                    <Box fontSize="18px" color="gray.400">
                      <BsToggleOn />
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </PopoverContent>
          </Popover>

          {sidebarOpen && (
            <Box _hover={{ color: "purple.600" }} cursor="pointer">
              <AiOutlineQuestionCircle fontSize="20px" />
            </Box>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default withAuth(Sidebar);

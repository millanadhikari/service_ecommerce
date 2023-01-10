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
import { useRouter } from "next/router";
import { useAppSelector } from "../../../app/hooks";
import { userLogout } from "../../../api/userApi";
const ProfilePopover = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);

  const logmeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("service_ecommerce");
    userLogout();
    // Socket?.on("disconnect", () => {});

    router.replace("/admin/login");
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Flex gap={4} alignItems="center" cursor="pointer">
          <Text fontWeight="semibold" color="gray.600">
            {user?.firstName}
          </Text>
          <Flex alignItems="center" gap={2}>
            {user?.profilePic?.src !== "" ? (
              <Image
                h={10}
                w={10}
                rounded="full"
                src={user?.profilePic?.src ? user?.profilePic?.src : ""}
              />
            ) : (
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iCpiWXk0d2jGf57Uskp8MVgYJBrYK-f3w&usqp=CAU"
                alt=""
                height="30px"
                border="2px solid blue"
                borderColor="purple.500"
                rounded="full"
                width="30px"
              />
            )}
            <Icon as={AiOutlineCaretDown} />
          </Flex>
        </Flex>
      </PopoverTrigger>
      <PopoverContent w="240px" p={4} _focus={{ outline: "none" }}>
        <PopoverArrow />

        <PopoverBody>
          <Box>
            <Flex alignItems="center" gap={4}>
              {user?.profilePic?.src !== "" ? (
                <Image
                  height="60px"
                  border="2px solid blue"
                  borderColor="purple.500"
                  rounded="full"
                  width="60px"
                  src={user?.profilePic?.src}
                />
              ) : (
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iCpiWXk0d2jGf57Uskp8MVgYJBrYK-f3w&usqp=CAU"
                  alt=""
                  height="60px"
                  border="2px solid blue"
                  borderColor="purple.500"
                  rounded="full"
                  width="60px"
                />
              )}
              <Box fontSize="14px">
                <Text mb={1} fontWeight="semibold">
                  {user?.firstName} {user?.lastName}
                </Text>
                <Text>Admin</Text>
              </Box>
            </Flex>
            <Text
              borderBottom="1px solid gray"
              pb={3}
              borderColor="gray.300"
              cursor="pointer"
              textAlign="center"
              my={4}
              fontWeight="semibold"
              color="gray.600"
              fontSize="14px"
              onClick={() => router.push("/admin/Viewprofile")}
            >
              View Profile
            </Text>
            <Text
              textAlign="center"
              color="gray.400"
              fontWeight="semibold"
              onClick={logmeOut}
              cursor="pointer"
            >
              Sign Out
            </Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopover;

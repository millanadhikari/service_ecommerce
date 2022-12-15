import { Image, Box, Flex, Icon, Text, Input } from "@chakra-ui/react";

import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useAppSelector } from "../../components/Admin/app/hooks";
import SubNav from "../../components/Admin/Jobs/subcomponents/SubNav";
import ProfileInfo from "../../components/Admin/Profile/ProfileInfo";

const ViewProfile = () => {
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;

  return (
    <Box
      pl={{ base: 0, md: sidebarOpen ? "320px" : "115px" }}
      backgroundColor="gray.100"
      fontFamily="sans-serif"
      w="100%"
      h="100%"
    >
      <SubNav />
      <Flex
        alignItems="left"
        cursor="pointer"
        position="relative"
        flexDir="column"
        backgroundColor="gray.100"
        _hover={{ color: "gray.600" }}
        mt={5}
        px={5}
        pb={4}

        // onClick={() => router.push("/admin/quotes")}
      >
        {/* <Icon as={MdArrowBackIosNew} /> */}
        <Text fontWeight="semibold" fontSize="19" color="blue.700">
          My Profile{" "}
        </Text>

        <Text fontWeight="semibold" my={4} fontSize="16" color="blue.700">
          Profile Picture
        </Text>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iCpiWXk0d2jGf57Uskp8MVgYJBrYK-f3w&usqp=CAU"
          alt=""
          height="90px"
          border="2px solid blue"
          borderColor="purple.500"
          rounded="full"
          width="90px"
        />
      </Flex>
      <Box px={5}>
        <Input
          px={6}
          bg="white"
          rounded="full"
          py={2}
          mb={2}
          fontSize="12"
          type="file"
          id="myFile"
        ></Input>
        <Text as={"em"} fontSize="12">
          Minimum square image size: 200px x 200px
        </Text>
      </Box>
      <ProfileInfo />
    </Box>
  );
};

export default ViewProfile;

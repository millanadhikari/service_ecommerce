import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineDown } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { useAppSelector } from "../../../components/Admin/app/hooks";
import JobDetails from "../../../components/Admin/Jobs/subcomponents/JobDetails";
import SubNav from "../../../components/Admin/Jobs/subcomponents/SubNav";

const BookingDetail = () => {
  const router = useRouter();

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
      {/* Jobs */}
      <SubNav />
      <Flex
        alignItems="center"
        cursor="pointer"
        gap={3}
        position="absolute"
        _hover={{ color: "gray.600" }}
        top="24px"
        onClick={() => router.push("/admin/bookings")}
      >
        <Icon as={MdArrowBackIosNew} />
        <Text color="blue.700">Jobs</Text>
      </Flex>
      <Flex justifyContent="space-between" mr={2} mx={{ base: "0" }} my={2}>
        <Box>
          <Heading color="gray.600" fontSize="27px">
            #21212020220
          </Heading>
          <Text mt={3} color="gray.500" fontSize="14px">
            20, September 2022
          </Text>
        </Box>
        <Flex
          alignItems="center"
          gap={4}
          position="absolute"
          right="5"
          top="116px"
        >
          {subMenu()}
          <Button
            size="sm"
            letterSpacing={1}
            _hover={{ bg: "blue.600", color: "white" }}
            px={5}
            py={3}
            rounded="full"
            fontSize="12px"
            border="1px solid blue"
            borderColor="blue.600"
            color="purple.600"
            fontWeight="light"
          >
            Send ETA text
          </Button>
          <Button
            size="sm"
            letterSpacing={"1"}
            _hover={{ bg: "yellow.500" }}
            px={6}
            py={3}
            rounded="full"
            fontSize="12px"
            bg="#ffba4b"
            color="white"
          >
            Edit Job
          </Button>
        </Flex>
      </Flex>
      {/* <JobDetails /> */}
    </Box>
  );
};

export default BookingDetail;

const subMenu = () => {
  return (
    <Flex alignItems="center" gap={4}>
      <Flex fontSize="13px" alignItems="center" gap={1} color="blue.600">
        <Text _hover={{ fontWeight: "bold" }} cursor="pointer">
          Send reminder
        </Text>
        <Icon as={AiOutlineDown} fontSize="9px" color="blue.700" />
      </Flex>
      <Text
        _hover={{ fontWeight: "bold" }}
        cursor="pointer"
        fontSize="13px"
        color="blue.600"
        textDecoration="underline"
      >
        Cancel job
      </Text>
      <Text
        _hover={{ fontWeight: "bold" }}
        cursor="pointer"
        fontSize="13px"
        color="blue.600"
        textDecoration="underline"
      >
        View/ send invoice
      </Text>
      <Flex fontSize="13px" alignItems="center" gap={1} color="blue.600">
        <Text _hover={{ fontWeight: "bold" }} cursor="pointer">
          Delete/duplicate
        </Text>
        <Icon as={AiOutlineDown} fontSize="9px" color="blue.700" />
      </Flex>
    </Flex>
  );
};

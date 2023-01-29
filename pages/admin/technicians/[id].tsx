import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Text,
  toast,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

import { AiOutlineDown } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { useAppSelector } from "../../../components/Admin/app/hooks";
import SubNav from "../../../components/Admin/Jobs/subcomponents/SubNav";
import QuoteDetails from "../../../components/Admin/Quotes/QuoteDetails";
import DrawerLayout from "../../../components/Admin/UI/DrawerLayout";
import Infos from "../../../components/Admin/Quotes/subcomponents/AddQuote/Infos";
import axios from "axios";
import TechnicianDetails from "../../../components/Admin/Technicians/TechnicianDetails";
import JobsCard from "../../../components/Admin/Jobs/subcomponents/JobsCard/JobsCard";
import BookingHistory from "../../../components/Admin/Technicians/subcomponents/BookingHistory";
import TechInfos from "../../../components/Admin/Technicians/subcomponents/TechInfos";

const mockData = {
  bathrooms: 0,
  bedrooms: 0,
  email: "",
  companyName: "",
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
  startHour: "09",
  startMin: "00",
  startMode: "AM",
  endHour: "12",
  endMin: "00",
  endMode: "PM",
  bookingDate: new Date(),
  subscription: "One Time Cleaning",
  customerNotes: "",
  service: "End of Lease",
  notes: [],
  phone: "",
  products: [],
  quoteStatus: "",
};

const TechnicianDetail = ({ data }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [display, setDisplay] = useState(data.result[0]);
  let details = data.result[0];
  const toast = useToast();

  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;

  const changeDateFormat = (ok) => {
    let l = new Date(ok);
    return <Text>{l.toString().substring(0, 16)}</Text>;
  };

  const onSubmit = async () => {
    setLoading(true);
    const result = await axios.put(
      `http://localhost:3001/v1/technician/${details._id}`,
      display
    );
    if (result.data.status === "success") {
      toast({
        position: "bottom-left",
        render: () => (
          <Box w={"250px"} bg="white" rounded="xl" mt={4}>
            <Text
              color="white"
              py={2}
              fontWeight="semibold"
              roundedTop={"xl"}
              bg="blue.700"
              textAlign="center"
            >
              Alert
            </Text>
            <Text fontSize="13px" py={4} px={4}>
              Successfully edited quote.
            </Text>
          </Box>
        ),
        duration: 6000,
        isClosable: true,
      });

      setLoading(false);

      onClose();
      router.replace(router.asPath);
    }
  };

  useEffect(() => {
    const maintainData = () => {
      setDisplay({ ...details });
    };
    maintainData();
  }, [data]);

  // useEffect(() => {
  //   details = data.result[0]
  // }, [data])

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
      <Heading fontSize="22">
        {details.firstName} {details.lastName}
      </Heading>
      <JobsCard buttonTitle={'Edit Technician'} title={data.firstName} ref={btnRef} onOpen={onOpen} />

      <Flex
        alignItems="center"
        cursor="pointer"
        gap={3}
        position="absolute"
        _hover={{ color: "gray.600" }}
        top="24px"
        onClick={() => router.push("/admin/technicians")}
      >
        <Icon as={MdArrowBackIosNew} />
        <Text fontWeight="semibold" color="blue.700">
          Technicians{" "}
        </Text>
      </Flex>
      {/* <Flex justifyContent="space-between" mr={2} mx={{ base: "0" }} my={2}>
        <Box>
          <Heading color="gray.600" fontSize="27px">
            #{details?.quoteReference}
          </Heading>
          <Text mt={3} color="gray.500" fontSize="14px">
            {changeDateFormat(details?.createdAt)}
          </Text>
        </Box>
      </Flex> */}
      <Flex flexDir={{ base: "column", md: "row" }} gap={6}>
        <Box bg="white" p={6} px="7" shadow="md" w="50%">
          {" "}
          <Flex justifyContent="space-between">
            <Flex gap={8} minW="60%">
              <Image
                src={
                  details.profilePic.src !== ""
                    ? details?.profilePic?.src
                    : "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                }
                rounded="full"
                border="3px solid gray"
                borderColor="purple.400"
                h="20"
                w="20"
              ></Image>
              <Box>
                <Flex gap={2} fontWeight="semibold">
                  <Text color="gray.500">{details.firstName}</Text>
                  <Text color="gray.500">{details.lastName}</Text>
                </Flex>
                <Box color="gray.500" fontSize="14">
                  <Text mt={2}>{details?.address}</Text>
                  <Text>{details?.address1}</Text>
                  <Text>{details?.address2}</Text>
                  <Text>{details?.phone}</Text>
                  <Text>{details?.email}</Text>
                </Box>
              </Box>
            </Flex>
            <Box textAlign="right">
              <Text fontWeight="semibold" mb={12}>
                Teams
              </Text>
              <Text fontSize="11" as="i" color="gray.400">
                Click the button blow to toggle activation status
              </Text>
              <Box
                bg="blue.400"
                w="24"
                fontSize="12"
                textAlign="center"
                py={1}
                ml="auto"
                mt="1"
                cursor="pointer"
                _hover={{ bg: "blue.300" }}
                color="white"
                rounded="full"
                size="sm"
                px={3}
                colorScheme="teal"
              >
                Active
              </Box>
            </Box>
          </Flex>
          <Box my={4}>
            <Text fontSize="14" color="gray.600" fontWeight="semibold">
              Internal technician notes
            </Text>
            <Flex mt={5} gap={4}>
              <Input
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Add a note"
                size="sm"
              ></Input>
              <Button
                bg="blue.700"
                fontSize="13px"
                rounded="full"
                px={8}
                _hover={{ bg: "blue.600", color: "gray.200" }}
                size="sm"
                color="white"
              >
                Save note
              </Button>
            </Flex>
          </Box>
        </Box>
        <Box w="50%" bg="white" shadow="md" px="4" py={5}>
          <Text>Booking History</Text>
          <Text> 2 Cleanings </Text>
          <BookingHistory />
        </Box>
      </Flex>

       <DrawerLayout
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
        title="Edit Technician"
        onSubmit={onSubmit}
        isLoading={isLoading}
        setLoading={setLoading}
      >
      <TechInfos title="Technician" display={display} setDisplay={setDisplay}/>
      </DrawerLayout>
    </Box>
  );
};

export default TechnicianDetail;

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

// This gets called on every request
export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { id } = params;

  // Fetch data from external API
  // const res = await fetch(`https://wedo-backend.herokuapp.com/v1/quote/${id}`);
  const res = await fetch(`http://localhost:3001/v1/technician/${id}`);
  const data = await res.json();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } };
}

// const rootUrl = "https://wedo-backend.herokuapp.com/v1/";

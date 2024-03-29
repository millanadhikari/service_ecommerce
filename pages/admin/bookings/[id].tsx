import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDown } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { useAppSelector } from "../../../components/Admin/app/hooks";
import JobDetails from "../../../components/Admin/Jobs/subcomponents/JobDetails";
import SubNav from "../../../components/Admin/Jobs/subcomponents/SubNav";
import axios from "axios";
import DrawerLayout from "../../../components/Admin/UI/DrawerLayout";
import Infos from "../../../components/Admin/Quotes/subcomponents/AddQuote/Infos";

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
  bookingReference: "",
  customerNotes: "",
  service: "End of Lease",
  notes: [],
  phone: "",
  products: [],
  bookingStatus: "",
};
const BookingDetail = ({ data }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [display, setDisplay] = useState(mockData);

  let details = data.result[0];
  const toast = useToast();
  console.log("LA", details);
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;

  const changeDateFormat = (ok) => {
    let l = new Date(ok);
    return <Text>{l.toString().substring(0, 16)}</Text>;
  };

  const onSubmit = async () => {
    setLoading(true);
    const result = await axios.put(
      `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
      display
    );
    console.log(result.data);
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

  const changeStatus = async (lm) => {
    setDisplay({ ...display, bookingStatus: lm });
    setLoading(true);

    const result = await axios.put(
      `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
      { ...display, bookingStatus: lm }
    );
    console.log(result.data);
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
              Successfully edited Quote Status.
            </Text>
          </Box>
        ),
        duration: 6000,
        isClosable: true,
      });

      setLoading(false);

      router.replace(router.asPath);
    }
  };

  const changeTime = async (e, value) => {
    setDisplay({ ...display, [value]: e.target.value });
    setLoading(true);
  };

  const saveTime = async () => {
    setLoading(true);

    const result = await axios.put(
      `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
      { ...display }
    );
    console.log(result.data);
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
              Successfully edited Job Time.
            </Text>
          </Box>
        ),
        duration: 6000,
        isClosable: true,
      });

      setLoading(false);

      router.replace(router.asPath);
    }
  };

  useEffect(() => {
    const maintainData = () => {
      setDisplay({ ...details });
    };
    maintainData();
  }, [data]);

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
            #{display?.bookingReference}
          </Heading>
          <Text mt={3} color="gray.500" fontSize="14px">
            {new Date(display.bookingDate).toString().substring(0, 16)}
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
            onClick={onOpen}
            rounded="full"
            fontSize="12px"
            bg="#ffba4b"
            color="white"
          >
            Edit Job
          </Button>
        </Flex>
      </Flex>
      <JobDetails
        details={display}
        changeStatus={changeStatus}
        saveTime={saveTime}
        setDetails={setDisplay}
        changeTime={changeTime}
      />
      <DrawerLayout
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
        title="Edit Jobs"
        onSubmit={onSubmit}
        isLoading={isLoading}
        setLoading={setLoading}
      >
        <Infos title="Job" display={display} setDisplay={setDisplay} />
      </DrawerLayout>
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

// This gets called on every request
export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { id } = params;

  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/v1/booking/${id}`);
  // const res = await fetch(
  //   `https://wedo-backend.herokuapp.com/v1/booking/${id}`
  // );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

// const rootUrl = "https://wedo-backend.herokuapp.com/v1/";

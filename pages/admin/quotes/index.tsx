import { Box, Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/Admin/app/hooks";
import { QuotesTab } from "../../../components/Admin/Home/QuotesTab";
import JobsTab from "../../../components/Admin/Jobs/JobsTab";
import JobsCard from "../../../components/Admin/Jobs/subcomponents/JobsCard/JobsCard";
import SubNav from "../../../components/Admin/Jobs/subcomponents/SubNav";
import { fetchAllQuotes } from "../../../components/Admin/QuotePage/quoteAction";
import QuotePagination from "../../../components/Admin/QuotePage/QuotePagination";
import QuoteTab from "../../../components/Admin/Quotes/QuoteTab";
import Infos from "../../../components/Admin/Quotes/subcomponents/AddQuote/Infos";
import PromptLayout from "../../../components/Admin/Quotes/subcomponents/Prompt/PromptLayout";
import DrawerLayout from "../../../components/Admin/UI/DrawerLayout";

// please note that the types are reversed

const initialState = [
  {
    _id: 1,
    job: "112122323232",
    serviceDate: "09/30/2022",
    createDate: "09/09/2022",
    customer: "Grace Silwal",
    status: "Scheduled",
    selected: false,
    assigned: "Not Assigned",
    total: 240,
  },
  {
    _id: 2,
    job: "232122323232",
    serviceDate: "20/30/2022",
    createDate: "10/09/2022",
    customer: "Binod Adhikari",
    status: "In Progress",
    selected: false,
    assigned: "Not Assigned",
    total: 240,
  },
  {
    _id: 3,
    job: "242122323232",
    serviceDate: "20/30/2022",
    createDate: "10/09/2022",
    customer: "Amy Shrestha",
    status: "In Progress",
    selected: false,
    assigned: "Not Assigned",
    total: 300,
  },
];

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

const newData = {
  ...mockData,
  products: [],
};
const Quotes = () => {
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;
  const [all, setAll] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(mockData);
  const [pageNumber, setPageNumber] = useState<Number>(1);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [confirmDelete, setConfirmDelete] = useState<Boolean>(false);
  const [filter, setFilter] = useState(new Date());

  const [isLoading, setLoading] = useState<Boolean>(false);
  const btnRef = React.useRef();
  const toast = useToast();
  const quotes = useAppSelector(
    (state) => state.quotes.quotes.paginatedResults
  );
  const Socket = useAppSelector((state) => state.user.Socket);

  const userName = useAppSelector((state) => state.user.user.name) || undefined;

  const onSubmit = async () => {
    setLoading(true);
    const result = await axios.post("https://wedo-backend.herokuapp.com/v1/quote", display);
    console.log("hey", result.data.status);
    if (result.data.status === "success") {
      Socket?.emit("sendNotification", {
        senderName: userName,
        type: 1,
      });
      console.log("bhayankar", Socket);

      setLoading(false);

      onClose();
      dispatch(fetchAllQuotes(pageNumber, search, filter));
    }
  };

  const customerToast = () => {
    return (
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
          Successfully deleted jobs
        </Text>
      </Box>
    );
  };

  const deleteQuote = async () => {
    setConfirmDelete(!confirmDelete);
    const id = selected[0];
    const result = await axios.delete(`https://wedo-backend.herokuapp.com/v1/quote/${id}`);
    if (result.data.status === "success") {
      toast({
        position: "top-right",
        render: () => customerToast(),
        duration: 6000,
        isClosable: true,
      });
      setConfirmDelete(!confirmDelete);
      // prompt("Success");
      dispatch(fetchAllQuotes(pageNumber, search, filter));
      setSelected([]);
    }
  };

  // const deleteQuotes = async () => {
  //   const id = selected;
  //   // const result = await axios.post(
  //   //   "http://localhost:3001/v1/quote/deletequotes",
  //   //   selected
  //   // );
  //   // console.log(result);
  //   // if (result.data.status === "success") {
  //   //   // prompt("Success");
  //   //   dispatch(fetchAllQuotes(pageNumber, search));
  //   //   setSelected([]);
  //   // }
  // };

  useEffect(() => {
    dispatch(fetchAllQuotes(pageNumber, search, filter));
    setAll(quotes);
  }, [dispatch, pageNumber, search, display]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://wedo-backend.herokuapp.com/v1/product")
        .then((data: any) => {
          setDisplay({ ...display, products: [...data?.data.result] });
        });
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  // }, [socket])
  return (
    <Box
      pl={{ base: 0, md: sidebarOpen ? "320px" : "115px" }}
      pb={10}
      backgroundColor="gray.100"
      fontFamily="sans-serif"
      w="100%"
      h="100%"
    >
      <SubNav />
      <JobsCard title="Quotes" ref={btnRef} onOpen={onOpen} />

      <Box>
        <QuoteTab
          confirmDelete={confirmDelete}
          setConfirmDelete={setConfirmDelete}
          selected={selected}
          setSelected={setSelected}
          search={search}
          setSearch={setSearch}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Box>
      <DrawerLayout
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
        title="Add Quote"
        onSubmit={onSubmit}
        isLoading={isLoading}
        setLoading={setLoading}
      >
        <Infos display={display} setDisplay={setDisplay} />
      </DrawerLayout>
      <PromptLayout
        isOpen={confirmDelete}
        onClose={setConfirmDelete}
        layout={deleteQuote}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default Quotes;

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
  totals: [
    {
      _id: 1,
      title: 'Base Price',
      amount: 0,
      quantity: 0
    },
    {
      _id: 2,
      title: '1 Bathroom',
      amount: 0,
      quantity: 0
    },
    {
      _id: 3,
      title: '1 Bedroom',
      amount: 100,
      quantity: 0
    },
    {
      _id: 4,
      title: 'Extras',
      amount: 0,
      quantity: 0
    },
    {
      _id: 5,
      title: 'Tip',
      amount: 0,
      quantity: 0
    },
    {
      _id: 6,
      title: 'To be paid by customer',
      amount: 0,
      quantity: 0
    }
  ]
};


const Quotes = () => {
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;
  const [all, setAll] = useState();
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(mockData);
  const [pageNumber, setPageNumber] = useState<Number>(1);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [confirmDelete, setConfirmDelete] = useState<Boolean>(false);
  const [confirmBook, setConfirmBook] = useState<Boolean>(false);

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
    const result = await axios.post("http://localhost:3001/v1/quote", display);
    if (result.data.status === "success") {
      // Socket?.emit("sendNotification", {
      //   senderName: userName,
      //   type: 1,
      // });
      // console.log("bhayankar", Socket);

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
    const result = await axios.delete(
      `https://wedo-backend.herokuapp.com/v1/quote/${id}`
    );
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

  const bookQuote = async () => {
    setConfirmBook(!confirmBook);
    const id = selected[0];
    const result = await axios.post(
      // `https://wedo-backend.herokuapp.com/v1/booking/${id}`
      `http://localhost:3001/v1/booking/${id}`

    );
    if (result.data.status === "success") {
      toast({
        position: "top-right",
        render: () => customerToast(),
        duration: 6000,
        isClosable: true,
      });
      setConfirmBook(!confirmBook);
      // prompt("Success");
      dispatch(fetchAllQuotes(pageNumber, search, filter));
      setSelected([]);
    }
  };

  // const deleteQuotes = async () => {
  //   const id = selected;
  //   // const result = await axios.post(
  //   //   "https://wedo-backend.herokuapp.com/v1/quote/deletequotes",
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
    // setAll(quotes);
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
      <JobsCard title="Quotes" buttonTitle="Add Quote" ref={btnRef} onOpen={onOpen} />

      <Box>
        <QuoteTab
          confirmDelete={confirmDelete}
          setConfirmDelete={setConfirmDelete}
          confirmBook={confirmBook}
          setConfirmBook={setConfirmBook}
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
        <Infos title="Customer" display={display} setDisplay={setDisplay} />
      </DrawerLayout>
      <PromptLayout
        isOpen={confirmDelete}
        onClose={setConfirmDelete}
        layout={deleteQuote}
        title="delete"
        isLoading={isLoading}
      />

      <PromptLayout
        isOpen={confirmBook}
        onClose={setConfirmBook}
        layout={bookQuote}
        title="book"
        isLoading={isLoading}
      />
    </Box>
  );
};

export default Quotes;

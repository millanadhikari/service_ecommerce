import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/Admin/app/hooks";
import { fetchAllBookings } from "../../../components/Admin/BookingPage/bookingAction";
import JobsTab from "../../../components/Admin/Jobs/JobsTab";
import JobsCard from "../../../components/Admin/Jobs/subcomponents/JobsCard/JobsCard";
import SubNav from "../../../components/Admin/Jobs/subcomponents/SubNav";
import { fetchAllTechnicians } from "../../../components/Admin/Technicians/TechniciansAction";
import PromptLayout from "../../../components/Admin/Quotes/subcomponents/Prompt/PromptLayout";
import TechniciansTab from "../../../components/Admin/Technicians/TechniciansTab";
import DrawerLayout from "../../../components/Admin/UI/DrawerLayout";
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
const Technicians = () => {
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;
  const [word, setWord] = useState("");
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(mockData);
  const [pageNumber, setPageNumber] = useState<Number>(1);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [confirmDelete, setConfirmDelete] = useState<Boolean>(false);
  const [confirmBook, setConfirmBook] = useState<Boolean>(false);
  const btnRef = React.useRef();
  const [date, setDate] = useState(new Date());

  const [filter, setFilter] = useState(new Date());

  const [isLoading, setLoading] = useState<Boolean>(false);
  const toast = useToast();
  const quotes = useAppSelector(
    (state) => state.quotes.quotes.paginatedResults
  );
  const Socket = useAppSelector((state) => state.user.Socket);

  const userName = useAppSelector((state) => state.user.user.name) || undefined;
  let bookingDate = date[0] ? date[0] : null;

  let to = date[1] ? date[1] : null;


  const onSubmit = async () => {
    setLoading(true);
    const result = await axios.post(
      "https://wedo-backend.herokuapp.com/v1/technician",
      display
    );
    if (result.data.status === "success") {
    

      setLoading(false);

      onClose();
      dispatch(fetchAllTechnicians(pageNumber, search, filter, word));
    }
  };

  // const customerToast = () => {
  //   return (
  //     <Box w={"250px"} bg="white" rounded="xl" mt={4}>
  //       <Text
  //         color="white"
  //         py={2}
  //         fontWeight="semibold"
  //         roundedTop={"xl"}
  //         bg="blue.700"
  //         textAlign="center"
  //       >
  //         Alert
  //       </Text>
  //       <Text fontSize="13px" py={4} px={4}>
  //         Successfully deleted jobs
  //       </Text>
  //     </Box>
  //   );
  // };

  const deleteBooking = async () => {
    setConfirmDelete(!confirmDelete);
    const id = selected[0];
    const result = await axios.delete(
      `https://wedo-backend.herokuapp.com/v1/booking/${id}`
    );
    if (result.data.status === "success") {
      // toast({
      //   position: "top-right",
      //   render: () => customerToast(),
      //   duration: 6000,
      //   isClosable: true,
      // });
      setConfirmDelete(!confirmDelete);
      // prompt("Success");
      dispatch(fetchAllBookings(pageNumber, search, bookingDate, to));
      setSelected([]);
    }
  };

  const bookQuote = async () => {
    setConfirmBook(!confirmBook);
    const id = selected[0];
    const result = await axios.post(
      `https://wedo-backend.herokuapp.com/v1/${id}`
    );
    if (result.data.status === "success") {
      // toast({
      //   position: "top-right",
      //   render: () => customerToast(),
      //   duration: 6000,
      //   isClosable: true,
      // });
      setConfirmBook(!confirmBook);
      // prompt("Success");
      dispatch(fetchAllBookings(pageNumber, search, bookingDate, to));
      setSelected([]);
    }
  };

  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  };

  const onDateFilter = () => {
    dispatch(fetchAllBookings(pageNumber, search, bookingDate, to));
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
    dispatch(fetchAllTechnicians(pageNumber, search, filter, word));
    // setAll(quotes);
  }, [dispatch, pageNumber, display]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://wedo-backend.herokuapp.com/v1/product")
        .then((data) => {
          setDisplay({ ...display, products: [...data?.data.result] });
        });
    };

    fetchProducts();
  }, []);

  return (
    <Box
      pl={{ base: 0, md: sidebarOpen ? "320px" : "115px" }}
      backgroundColor="gray.100"
      fontFamily="sans-serif"
      w="100%"
      h="100%"
    >
      <SubNav />
      <JobsCard title="Technicians" ref={btnRef} buttonTitle="Add Technician" onOpen={onOpen} />

      <TechniciansTab
        confirmDelete={confirmDelete}
        date={date}
        setDate={setDate}
        setConfirmDelete={setConfirmDelete}
        confirmBook={confirmBook}
        setConfirmBook={setConfirmBook}
        selected={selected}
        setSelected={setSelected}
        search={search}
        setSearch={setSearch}
        pageNumber={pageNumber}
        onDateFilter={onDateFilter}
        setPageNumber={setPageNumber}
        onDateChange={onDateChange}
      />
      <DrawerLayout
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
        title="Add Technician"
        onSubmit={onSubmit}
        isLoading={isLoading}
        setLoading={setLoading}
      >
      <TechInfos title="Technician" display={display} setDisplay={setDisplay}/>
      </DrawerLayout>
      <PromptLayout
        isOpen={confirmDelete}
        onClose={setConfirmDelete}
        layout={deleteBooking}
        title="delete"
        isLoading={isLoading}
      />
    </Box>
  );
};

export default Technicians;

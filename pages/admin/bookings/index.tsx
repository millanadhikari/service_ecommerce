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
import { fetchAllQuotes } from "../../../components/Admin/QuotePage/quoteAction";
import PromptLayout from "../../../components/Admin/Quotes/subcomponents/Prompt/PromptLayout";

// import withAuth from '../../components/Admin/privateRoute/withAuth';

// const Bookings = () => {

//     const dispatch = useAppDispatch()
//     const sidebarOpen = useAppSelector((state) => state.user.sidebarOpen) || undefined;

//     const handleRefresh = (e) => {
//         e.preventDefault();
//         dispatch(fetchAllBookings(1))

//     }
//     return <Box pl={{base:0, md:sidebarOpen ? '300px' : '100px'}}   backgroundColor="white" fontFamily='sans-serif' w="100%"  >
//         <Flex backgroundColor="white"
//             border="1px solid gray" borderTop="none" borderLeft="none"
//             borderColor="gray.200" alignItems="center"
//             justifyContent="space-between"

//             fontSize="15px" pl="5"
//             position="fixed" w="100%"
//             pr={sidebarOpen ? 300 : 100}
//         >
//             <Heading mr={2} w="100%" fontSize="17px" fontWeight="semibold">Bookings</Heading>
//             <Flex alignItems="center" cursor="pointer" >
//                 <Flex >
//                     <Flex onClick={handleRefresh} pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><BiRefresh fontSize="18px" /> <Spacer ml="6px" /><Text>Refresh</Text> </Flex>

//                     <Flex alignItems="center" borderLeft="1px solid gray" borderColor="gray.200" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} px="4"><AiOutlineFullscreen /></Flex>
//                     <Flex display={{base:"none", md:"inline"}} pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><LockIcon /> <Spacer ml="6px" /><Text>Private</Text> </Flex>
//                 </Flex>
//                 <Button size="sm" fontFamily="sans-serif" fontSize="11px" py="5" px="4" colorScheme="purple">+ Add Booking</Button>
//             </Flex>
//         </Flex>

//         <Box backgroundColor="gray.100" >
//             <BookingList />
//         </Box>
//     </Box>;
// };

// const initialState = [
//   {
//     _id: 1,
//     job: "112122323232",
//     serviceDate: "09/30/2022",
//     createDate: "09/09/2022",
//     customer: "Grace Silwal",
//     status: "Scheduled",
//     selected: false,
//     assigned: "Not Assigned",
//     total: 240,
//   },
//   {
//     _id: 2,
//     job: "232122323232",
//     serviceDate: "20/30/2022",
//     createDate: "10/09/2022",
//     customer: "Binod Adhikari",
//     status: "In Progress",
//     selected: false,
//     assigned: "Not Assigned",
//     total: 240,
//   },
//   {
//     _id: 3,
//     job: "242122323232",
//     serviceDate: "20/30/2022",
//     createDate: "10/09/2022",
//     customer: "Amy Shrestha",
//     status: "In Progress",
//     selected: false,
//     assigned: "Not Assigned",
//     total: 300,
//   },
// ];
// const Bookings = () => {
//   const sidebarOpen =
//     useAppSelector((state) => state.user.sidebarOpen) || undefined;
//   const [all, setAll] = useState(initialState);
//   const [selected, setSelected] = useState([]);

//   useEffect(() => {
//     selected.length && selected.map((item) => item)
//   }, [selected]);
//   return (
//     <Box
//       pl={{ base: 0, md: sidebarOpen ? "320px" : "115px" }}
//       backgroundColor="gray.100"
//       fontFamily="sans-serif"
//       w="100%"
//       h="100%"
//     >
//       <SubNav />
//       <JobsCard />

//       <JobsTab all={all} selected={selected} setSelected={setSelected} />
//     </Box>
//   );
// };

// export default Bookings;
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
const Bookings = () => {
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
    const result = await axios.post("http://localhost:3001/v1/quote", display);
    if (result.data.status === "success") {
      Socket?.emit("sendNotification", {
        senderName: userName,
        type: 1,
      });
      console.log("bhayankar", Socket);

      setLoading(false);

      onClose();
      dispatch(fetchAllBookings(pageNumber, search, bookingDate, to));
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
    const result = await axios.delete(`http://localhost:3001/v1/booking/${id}`);
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
    const result = await axios.post(`http://localhost:3001/v1/booking/${id}`);
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
    dispatch(fetchAllBookings(pageNumber, search, bookingDate, to));
    // setAll(quotes);
    console.log("mera", date);
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
      <JobsCard title="Jobs" ref={btnRef} onOpen={onOpen} />

      <JobsTab
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

export default Bookings;

import { Box, Flex, useDisclosure } from "@chakra-ui/react";
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
import DrawerLayout from "../../../components/Admin/UI/DrawerLayout";

// import { LinkIcon, LockIcon } from '@chakra-ui/icons';
// import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
// import React from 'react';
// import { AiOutlineFullscreen } from 'react-icons/ai';
// import { BiRefresh } from 'react-icons/bi';
// import { useAppDispatch, useAppSelector } from '../../components/Admin/app/hooks';
// import BookingList from '../../components/Admin/BookingPage/BookingList';
// import {fetchAllQuotes} from '../../components/Admin/QuotePage/quoteAction'
// import QuoteList from '../../components/Admin/QuotePage/QuoteList';

// const Quotes = () => {

//     const dispatch = useAppDispatch()
//     const sidebarOpen = useAppSelector((state) => state.user.sidebarOpen) || undefined;

//     const handleRefresh = (e) => {
//         e.preventDefault();
//         dispatch(fetchAllQuotes(1))

//     }
//     return  <Box pl={{base:0, md:sidebarOpen ? '300px' : '100px'}}   backgroundColor="white" fontFamily='sans-serif' w="100%"  >
//     <Flex backgroundColor="white"
//         border="1px solid gray" borderTop="none" borderLeft="none"
//         borderColor="gray.200" alignItems="center"
//         justifyContent="space-between"
//         zIndex="999"
//         fontSize="15px" pl="5"
//         position="fixed" w="100%"
//         pr={sidebarOpen ? 300 : 100}
//     >
//         <Heading mr={2} w="100%" fontSize="17px" fontWeight="semibold">Quotes</Heading>
//         <Flex alignItems="center" cursor="pointer" >
//             <Flex >
//                     <Flex onClick={handleRefresh} pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><BiRefresh fontSize="18px" /> <Spacer ml="6px" /><Text>Refresh</Text> </Flex>

//                     <Flex alignItems="center" borderLeft="1px solid gray" borderColor="gray.200" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} px="4"><AiOutlineFullscreen /></Flex>
//                     <Flex display={{base:"none", md:"inline"}} pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><LockIcon /> <Spacer ml="6px" /><Text>Private</Text> </Flex>
//                 </Flex>
//                 <Button size="sm" fontFamily="sans-serif" fontSize="11px" py="5" px="4" colorScheme="purple">+ Add Quote</Button>
//             </Flex>
//         </Flex>

//         <Box backgroundColor="gray.100" h="90vh" py={16}>
//             <QuoteList />
//         </Box>
//     </Box>;
// };

// export default Quotes

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
  products: [
    // {
    //   id: 1,
    //   title: "Balcony",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 2,
    //   title: "Separate Toilet",
    //   price: 60,
    //   quantity: 0,
    // },
    // {
    //   id: 3,
    //   title: "Study Room",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 4,
    //   title: "Wall Wash",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 5,
    //   title: "Fridge/Freezer",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 6,
    //   title: "Garage",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 7,
    //   title: "Blinds",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 8,
    //   title: "Carpet Steam Stairs",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 9,
    //   title: "Carpet Steam Living Room",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 10,
    //   title: "Carpet Steam Stairs",
    //   price: 40,
    //   quantity: 0,
    // },
    // {
    //   id: 11,
    //   title: "Carpet Steam Hallway",
    //   price: 40,
    //   quantity: 0,
    // },
  ],
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
  const btnRef = React.useRef();

  const quotes = useAppSelector(
    (state) => state.quotes.quotes.paginatedResults
  );
  1;

  const onSubmit = async (e) => {
    const result = await axios.post("http://localhost:3001/v1/quote", display);
    console.log(result);
  };

  useEffect(() => {
    dispatch(fetchAllQuotes(pageNumber, search));
    setAll(quotes);
  }, [dispatch, pageNumber, search, display]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get("http://localhost:3001/v1/product").then((data: any) => {
        setDisplay({ ...display, products: [...data?.data.result] });
        console.log("data", data.data.result);
        console.log(display);
      });
    };

    fetchProducts();
  }, []);
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
      >
        <Infos display={display} setDisplay={setDisplay} />
      </DrawerLayout>
    </Box>
  );
};

export default Quotes;

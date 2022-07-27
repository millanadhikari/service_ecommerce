import {
    Box,
    Flex,
    Heading,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useAppDispatch, useAppSelector } from "../app/hooks";
import BookingPagination from "../BookingPage/BookingPagination";
//   import BookingPagination from "./BookingPagination";
import { fetchAllQuotes } from "./quoteAction";
import QuotePagination from "./QuotePagination";
//   import SingleBookings from "./SingleBooking/SingleBookings";
  
const generalClean = (item) => {
  return (
    <Box fontSize="12px" textAlign="left" >
      {item === 'generalclean' ? 'General' : 'End of Lease'}
    </Box>
  )
}
  
  const QuoteList = () => {
    const [modal, setModal] = useState(false);
    const [single, setSingle] = useState({});
    const [pageNumber, setPageNumber]= useState<Number>(1)
  
    const dispatch = useAppDispatch();
    const bookings = useAppSelector((state) => state.quotes);
  
    function randomColor() {
      let randomize = Math.floor(Math.random() * 16777215).toString(16);
      console.log(randomize);
      if (randomize !== "ffffff") {
        return randomize;
      }
    }
  
    useEffect(() => {
      dispatch(fetchAllQuotes(pageNumber));
  
      
    }, [dispatch, pageNumber  ]);
  
    return (
      <Box
        mx={4}
        backgroundColor="white"
        position="relative"
        rounded="md"
        overflow="hidden"
        mr={{ md: 20 }}
        h="700px"
      >
        <Flex
          borderBottom="1px solid gray"
          borderColor="gray.200"
          backgroundColor="white"
          py={1}
          pt={4}
          w="auto"
        >
          <Text
            fontWeight="semibold"
            borderColor="gray.200"
            px={4}
            pb={3}
            fontSize="16px"
          >
            Quotes List
          </Text>
        </Flex>
        <Box mt={10}>
          <Box w="100%">
            <Table variant="simple">
              <Thead backgroundColor="white">
                <Tr>
                  <Th>NAME </Th>
                  <Th>SUBURB</Th>
                  <Th >TYPE</Th>
                </Tr>
              </Thead>
              {bookings.isLoading ? (
                <Spinner />
              ) : (
                <Tbody>
                  {bookings.quotes.paginatedResults?.map((booking) => (
                    <Tr
                      key={booking.id}
                      onClick={() => (setModal(!modal), setSingle(booking))}
                      _hover={{ backgroundColor: "gray.200" }}
                      cursor="pointer"
                    >
                      <Td>
                        <Flex>
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            rounded="full"
                            backgroundColor={`#${randomColor()}`}
                            h={10}
                            minW={10}
                            fontSize="14px"
                           
                            color="white"
                            mr={4}
                          >
                            {booking.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}{" "}
                          </Flex>
                          <Box>
                            <Text
                              fontWeight="semibold"
                              fontSize="14px"
                              color="purple.500"
                            >
                              {booking.name}
                            </Text>
                            <Text
                              fontSize="13px"
                              mt={0.5}
                              fontWeight="semibold"
                              color="gray.400"
                            >
                              Guest
                            </Text>
                          </Box>
                        </Flex>
                      </Td>
                      <Td>{booking.suburb} </Td>
                      <Td >{generalClean(booking.service)}</Td>
                    </Tr>
                  ))}
                </Tbody>
              )}
            </Table>
          </Box>
  
          {/* <SingleBookings
            modal={modal}
            setModal={setModal}
            single={single}
            setSingle={setSingle}
          /> */}
        </Box>
        <Flex position="absolute" bottom="0" w="100%" >
          <QuotePagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </Flex>
      </Box>
    );
  };
  
  export default QuoteList;
  
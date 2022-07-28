import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
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
import { BsPersonFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import BookingPagination from "../BookingPage/BookingPagination";
//   import BookingPagination from "./BookingPagination";
import { fetchAllQuotes } from "./quoteAction";
import QuotePagination from "./QuotePagination";
//   import SingleBookings from "./SingleBooking/SingleBookings";

const generalClean = (item) => {
  return (
    <Box
      textAlign="center"
      w={item === "generalclean" ? "14" : "22"}
      fontSize="11px"
      fontWeight="semibold"
      color={item === "generalclean" ? "red.500" : "blue.500"}
      bg={item === "generalclean" ? "red.100" : "blue.100"}
      py={0.5}
      rounded="md"
    >
      {item === "generalclean" ? "General" : "End of Lease"}
    </Box>
  );
};

const QuoteList = () => {
  const [modal, setModal] = useState(false);
  const [single, setSingle] = useState({});
  const [pageNumber, setPageNumber] = useState<Number>(1);
  const [search, setSearch] = useState("");

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
    dispatch(fetchAllQuotes(pageNumber, search));
  }, [dispatch, pageNumber, search]);

  return (
    <Box
      mx={4}
      backgroundColor="white"
      position="relative"
      rounded="md"
      overflow="hidden"
      mr={{ md: 20 }}
      h="580px"
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
      <Box m={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="purple.500" />
          </InputLeftElement>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            _placeholder={{
              color: "gray.300",
              fontSize: "14px",
              letterSpacing: "0.9px",
            }}
            placeholder="Search by any quote parameter..."
          />
        </InputGroup>
      </Box>
      <Box mt={10}>
        <Box w="100%">
          <Table variant="simple">
            <Thead backgroundColor="white">
              <Tr>
                <Th>NAME </Th>
                <Th>CLEAN TYPE</Th>
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
                        {/* <Flex
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
                          </Flex> */}
                        <Box>
                          <Flex
                            alignItems="center"
                            gap={2}
                            fontWeight="semibold"
                            fontSize="14px"
                            color="purple.500"
                          >
                            <Box color="purple.300">
                              <BsPersonFill />
                            </Box>
                            {booking.name}
                          </Flex>
                          <Text
                            fontSize="10px"
                            fontWeight="light"
                            color="gray.400"
                            ml="6"
                          >
                            {booking.email}
                          </Text>
                        </Box>
                      </Flex>
                    </Td>
                    <Td textAlign="center">{generalClean(booking.service)}</Td>
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
      <Flex my={2} w="100%">
        <QuotePagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Flex>
    </Box>
  );
};

export default QuoteList;

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

const BookingPagination = ({ setPageNumber, pageNumber }) => {

    const isLoading = useAppSelector(
        (state) => state.bookings.isLoading
      );
  const totalPages = useAppSelector(
    (state) => state.bookings.bookings.totalPages
  );
  const prevPages = useAppSelector(
    (state) => state.bookings.bookings.previous?.page
  );

  const nextPages = useAppSelector(
    (state) => state.bookings.bookings.next?.page
  );

  const handleArray = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  };

  const setPrevious = () => {
    setPageNumber(pageNumber - 1 * 1);
  };

  const handleNext = (e) => { 
    e.preventDefault();
    setPageNumber(pageNumber + 1 * 1)
  }

  return (
    <Flex alignItems="center" justifyContent="space-between" w="100%" px={4}>
      <Text fontSize="14px" color="gray.500" >
        PAGE {pageNumber} OF {totalPages}
      </Text>
      
      <Flex alignItems="center">
        <Button disabled={isLoading || prevPages == 0} onClick={setPrevious}>
          {" "}
          <ChevronLeftIcon />{" "}
        </Button>
        <Flex alignItems="center" justifyContent="center" w="100%" fontSize="12px           ">
          {handleArray(totalPages).map((ant) => (
            <Flex
              onClick={() => setPageNumber(ant)}
              cursor="pointer"
              alignItems="center"
              justifyContent="center"
              rounded="full"
              backgroundColor={pageNumber == ant ? 'purple.500' : 'white'}
              color={pageNumber == ant ? 'white' : 'gray.600'}
              h={10}
              w={10}
              m={3}
              key={ant}
            >
              <Text>{ant}</Text>
            </Flex>
          ))}
        </Flex>
        <Button
          disabled={isLoading || nextPages > totalPages}
          onClick={(e)=> handleNext(e)}
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default BookingPagination;

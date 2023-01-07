import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

const QuotePagination = ({ setPageNumber, pageNumber }) => {
  const isLoading = useAppSelector((state) => state.quotes.isLoading);
  const totalPages = useAppSelector((state) => state.quotes.quotes.totalPages);
  const prevPages = useAppSelector(
    (state) => state.quotes.quotes.previous?.page
  );

  const nextPages = useAppSelector((state) => state.quotes.quotes.next?.page);

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
    setPageNumber(pageNumber + 1 * 1);
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" w="100%" px={4}>
      <Flex fontSize="14px" color="gray.500">
        <Text mr={1}>PAGE </Text>
        {pageNumber}
        {"  "} OF {totalPages}
      </Flex>
      {/* {prevPages} */}
      <Flex alignItems="center">
        <Button
          size="sm"
          disabled={isLoading || prevPages == 0}
          onClick={setPrevious}
        >
          {" "}
          <ChevronLeftIcon />{" "}
        </Button>

        <Flex
          //  onClick={() => setPageNumber(ant)}
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
          rounded="full"
          fontSize="11px"
          backgroundColor={pageNumber == nextPages - 1 ? "blue.600" : "white"}
          color={pageNumber == nextPages - 1 ? "white" : "gray.600"}
          h={6}
          w={6}
          m={3}
        >
          {pageNumber}
        </Flex>

        <Button
          disabled={isLoading || nextPages == 0}
          onClick={(e) => handleNext(e)}
          size="sm"
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuotePagination;

// <Flex alignItems="center" justifyContent="center" w="100%" fontSize="12px">
// {handleArray(totalPages).map((ant) => (
//   <Flex
//     onClick={() => setPageNumber(ant)}
//     cursor="pointer"
//     alignItems="center"
//     justifyContent="center"
//     rounded="full"
//     backgroundColor={pageNumber == ant ? 'purple.500' : 'white'}
//     color={pageNumber == ant ? 'white' : 'gray.600'}
//     h={10}
//     w={10}
//     m={3}
//     key={ant}
//   >
//     {/* <Text>{ant}</Text> */}

//   </Flex>
// ))}

// </Flex>

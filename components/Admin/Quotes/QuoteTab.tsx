import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NotAssigned from "../Jobs/subcomponents/NotAssigned";
import Unpaid from "../Jobs/subcomponents/Unpaid";
import { fetchAllQuotes } from "../QuotePage/quoteAction";
import QuotePagination from "../QuotePage/QuotePagination";
import AllQuotes from "./subcomponents/AllQuotes";

const QuoteTab = ({
  selected,
  setSelected,
  confirmDelete,
  setConfirmDelete,
  search,
  setSearch,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <Tabs variant="unstyled" bg="white" py={4} mr={10} shadow="md">
      <TabList
        borderBottom="1px solid gray"
        borderColor="gray.300"
        px={10}
        pb={0}
      >
        <Tab
          mr={10}
          fontWeight="semibold"
          color="gray.600"
          py={6}
          _hover={{
            borderBottom: "4px solid purple",
            borderColor: "purple.400",
          }}
          _focus={{ outline: "none" }}
          _selected={{
            borderBottom: "4px solid purple",
            borderColor: "purple.500",
          }}
        >
          All
        </Tab>
        <Tab
          mr={10}
          fontWeight="semibold"
          color="gray.600"
          py={6}
          _hover={{
            borderBottom: "4px solid purple",
            borderColor: "purple.400",
          }}
          _focus={{ outline: "none" }}
          _selected={{
            borderBottom: "4px solid purple",
            borderColor: "purple.500",
          }}
        >
          Drafts
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AllQuotes
            confirmDelete={confirmDelete}
            setConfirmDelete={setConfirmDelete}
            selected={selected}
            setSelected={setSelected}
            search={search}
            setSearch={setSearch}
          />
        </TabPanel>
        <TabPanel>
          <NotAssigned />
        </TabPanel>
        <TabPanel>
          <Unpaid />
        </TabPanel>
      </TabPanels>
      <Flex my={2} w="100%">
        <QuotePagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Flex>
    </Tabs>
  );
};

export default QuoteTab;

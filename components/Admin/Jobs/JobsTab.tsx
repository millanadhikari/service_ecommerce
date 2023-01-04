import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import QuotePagination from "../QuotePage/QuotePagination";
import AllJobs from "./subcomponents/AllJobs";
import JobPagination from "./subcomponents/JobPagination";
import NotAssigned from "./subcomponents/NotAssigned";
import Unpaid from "./subcomponents/Unpaid";

const JobsTab = ({
  selected,
  setSelected,
  confirmDelete,
  setConfirmDelete,
  confirmBook,
  setConfirmBook,
  search,
  setSearch,
  pageNumber,
  setPageNumber,
  onDateFilter,
  date,
  setDate,
  onDateChange,
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
          Not Assigned
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
          Unpaid
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AllJobs
            confirmDelete={confirmDelete}
            onDateChange={onDateChange}
            setConfirmDelete={setConfirmDelete}
            confirmBook={confirmBook}
            setConfirmBook={setConfirmBook}
            selected={selected}
            setSelected={setSelected}
            search={search}
            onDateFilter={onDateFilter}
            setSearch={setSearch}
            date={date}
            setDate={setDate}
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
        <JobPagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Flex>
    </Tabs>
  );
};

export default JobsTab;

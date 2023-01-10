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
import AllTechnicians from "./subcomponents/AllTechnicians";
import AllJobs from "./subcomponents/AllTechnicians";

// import Unpaid from "./subcomponents/Unpaid";

const TechniciansTab
 = ({
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
          Active
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
          Inactive
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
          All
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AllTechnicians
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
          {/* <NotAssigned /> */}
        </TabPanel>
        <TabPanel>
          {/* <Unpaid /> */}
        </TabPanel>
      </TabPanels>
      <Flex my={2} w="100%">
        {/* <JobPagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        /> */}
      </Flex>
    </Tabs>
  );
};

export default TechniciansTab
;

import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import AllJobs from "./subcomponents/AllJobs";
import NotAssigned from "./subcomponents/NotAssigned";
import Unpaid from "./subcomponents/Unpaid";

const JobsTab = ({all, setAll, selected, setSelected}) => {
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
         <AllJobs all={all} setAll={setAll} selected={selected} setSelected={setSelected}/>
        </TabPanel>
        <TabPanel>
          <NotAssigned />
        </TabPanel>
        <TabPanel>
          <Unpaid />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default JobsTab;

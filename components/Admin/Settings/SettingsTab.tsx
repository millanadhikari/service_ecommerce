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
import Bookingsforms from "./Bookingsforms/Bookingsforms";
import UsersTable from "./UsersTable";

const SettingsTab = () => {
  return (
    <Tabs my={4} mr={5}>
      <TabList>
        <Flex gap={{ md: 4 }} mb={4}>
          <Tab
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="semibold"
            _focus={{ outline: "none" }}
          >
            General
          </Tab>
          <Tab
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="semibold"
            _focus={{ outline: "none" }}
          >
            Users
          </Tab>
          <Tab
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="semibold"
            _focus={{ outline: "none" }}
          >
            Bookings forms & Communications
          </Tab>
          <Tab
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="semibold"
            _focus={{ outline: "none" }}
          >
            Integrations
          </Tab>
        </Flex>
      </TabList>

      <TabPanels bg="white">
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <Box>
            <UsersTable />
          </Box>
        </TabPanel>
        <TabPanel>
          <Bookingsforms />
        </TabPanel>
        <TabPanel>
          <p>four!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SettingsTab;

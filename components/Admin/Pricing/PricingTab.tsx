import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AllPricing from "./AllPricing";

const PricingTab = ({product}) => {
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
          Products
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
          Extras
        </Tab>
      </TabList>
      <TabPanels >
        <TabPanel >
          {/* <AllQuotes
            confirmDelete={confirmDelete}
            setConfirmDelete={setConfirmDelete}
            confirmBook={confirmBook}
            setConfirmBook={setConfirmBook}
            selected={selected}
            setSelected={setSelected}
            search={search}
            setSearch={setSearch}
          /> */}
          <AllPricing product={product}/>
        </TabPanel>
        <TabPanel>
          {/* <NotAssigned /> */}
        </TabPanel>
        <TabPanel>
          {/* <Unpaid /> */}
        </TabPanel>
      </TabPanels>
      <Flex  my={2} w="100%">
        {/* <QuotePagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        /> */}
      </Flex>
    </Tabs>
  );
};

export default PricingTab
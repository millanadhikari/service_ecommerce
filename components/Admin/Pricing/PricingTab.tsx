import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import AllPricing from "./AllPricing";
import React, { useState, useEffect, useRef } from "react";
import DrawerLayout from "../UI/DrawerLayout";
import ProductInfo from "./ProductInfo";

const PricingTab = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLoading, setLoading] = useState<Boolean>(false);

  const onSubmit = () => {};

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
      <TabPanels>
        <TabPanel>
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
          <AllPricing product={product} onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
        </TabPanel>
        <TabPanel>{/* <NotAssigned /> */}</TabPanel>
        <TabPanel>{/* <Unpaid /> */}</TabPanel>
      </TabPanels>



    </Tabs>
  );
};

export default PricingTab;



      
// {product.map((item) => (
//   <Flex my={2} w="100%" id={item._id}>
//     {/* <QuotePagination
//     pageNumber={pageNumber}
//     setPageNumber={setPageNumber}
//   /> */}

//     <Box>
//       <DrawerLayout
//         isOpen={isOpen}
//         onClose={onClose}
//         ref={btnRef}
//         title="Manage Product"
//         onSubmit={onSubmit}
//         isLoading={isLoading}
//         setLoading={setLoading}
//       >
//         {" "}
//         <ProductInfo item={item} />
//       </DrawerLayout>
//     </Box>
//   </Flex>
// ))}

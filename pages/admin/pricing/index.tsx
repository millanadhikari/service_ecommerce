import { Box, useDisclosure } from "@chakra-ui/react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/Admin/app/hooks";
import JobsCard from "../../../components/Admin/Jobs/subcomponents/JobsCard/JobsCard";
import SubNav from "../../../components/Admin/Jobs/subcomponents/SubNav";
import PricingTab from "../../../components/Admin/Pricing/PricingTab";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Pricing = () => {
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://wedo-backend.herokuapp.com/v1/product")
        .then((data) => {
          console.log(data);
          setProduct(data?.data.result);
          console.log(product);
        });
    };

    fetchProducts();
  }, []);
  return (
    <Box
      pl={{ base: 0, md: sidebarOpen ? "320px" : "115px" }}
      pb={10}
      backgroundColor="gray.100"
      fontFamily="sans-serif"
      w="100%"
      h="100%"
    >
      <SubNav />
      <JobsCard title="Pricing" ref={btnRef} onOpen={onOpen} buttonTitle="Add Product" />

      <Box>
        <PricingTab product={product} />
      </Box>
    </Box>
  );
};

export default Pricing;

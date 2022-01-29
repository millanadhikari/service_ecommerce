import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Entry/Banner";
import Navbar from "../components/Entry/Navbar";
import Ways from "../components/Entry/Ways";
import Why from "../components/Entry/Why";
import Service from '../components/Entry/Service'

function Entry() {
  return (
    <Box >
        <Navbar />
        <Banner />

      <Ways />
      <Why/>
      <Service />
    </Box>
  );
}

export default Entry;

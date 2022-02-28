import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "./Entry/Banner";
import Navbar from "./Entry/Navbar";
import Ways from "./Entry/Ways";
import Why from "./Entry/Why";
import Service from './Entry/Service'

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

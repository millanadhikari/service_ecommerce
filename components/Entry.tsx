import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "./Entry/Banner";
import Navbar from "./Entry/Navbar";
import Ways from "./Entry/Ways";
import Why from "./Entry/Why";
import Service from './Entry/Service'
import EntryTabs from "./Entry/EntryTabs";
import Newsletter from "./Entry/Newsletter";
import Review from "./Entry/Review";

function Entry() {
  return (
    <Box >
        <Navbar />
        <Banner />

      <Ways />
      <Why/>
      <Service />
      <EntryTabs/>
      <Newsletter/>
      <Review/>
    </Box>
  );
}

export default Entry;

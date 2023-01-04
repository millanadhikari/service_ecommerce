import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Banner from "./Entry/Banner";
import Navbar from "./Entry/Navbar";
import Ways from "./Entry/Ways";
import Why from "./Entry/Why";
import Service from "./Entry/Service";
import EntryTabs from "./Entry/EntryTabs";
import Newsletter from "./Entry/Newsletter";
import Review from "./Entry/Review";
import Footer from "./Entry/Footer";

function Entry() {
  const [quote, setQuote] = useState<boolean>(false);

  return (
    <Box position="relative">
      <Navbar />
      <Banner
        heading="Make your home as comfortable"
        desc="WeDoCleaning is a cleaning service provider for homes, apartments
       and various places that require professional cleaning. Our goal is
       to provide high standard cleaning solutions to make your living
       space clean and comfortable."
      />

      <Ways quote={quote} setQuote={setQuote} />
      <Why />
       <Service />
      {/* <EntryTabs /> */}
      <Newsletter />
      <Review />
      <Footer /> 
      <Box></Box>
    </Box>
  );
}

export default Entry;

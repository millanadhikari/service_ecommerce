import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Banner from "./Entry/Banner";
import Navbar from "./Entry/Navbar";
import Ways from "./Entry/Ways";
import Why from "./Entry/Why";
import Service from './Entry/Service'
import EntryTabs from "./Entry/EntryTabs";
import Newsletter from "./Entry/Newsletter";
import Review from "./Entry/Review";
import Footer from "./Entry/Footer";

function Entry() {
  const [maintenance, setMaintenance] = useState(true)
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
      <Footer/>
      <Box>
      <Modal isOpen={maintenance} onClose={() => setMaintenance(!maintenance)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Site Under maintenace</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
<Text>This Website is under construction. Please Call 0415976451 to book or get a quote.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => window.open("tel:+61415976451")}>
              Call Us
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </Box>
  );
}

export default Entry;

import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  TabsProvider,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NewAccordion from "./NewAccordion";

const EntryTabs = () => {
  return (
    <Box backgroundColor="#e4f0ff" pt={6}>
      <Tabs variant="enclosed">
        <TabList
          backgroundColor="#e4f0ff"
          maxW="1000"
          mx="auto"
          fontSize="12px"
          px={{ base: 10, md: "5" }}
        >
          <Tab
            _selected={{ backgroundColor: "white", fontWeight: "bold" }}
            _focus={{ outline: "none" }}
            fontSize="12px"
            fontWeight="light"
          >
            GENERAL
          </Tab>
          <Tab
            _selected={{ backgroundColor: "white", fontWeight: "bold" }}
            _focus={{ outline: "none" }}
            fontSize="12px"
            fontWeight="light"
          >
            PRICING
          </Tab>
          <Tab
            _selected={{ backgroundColor: "white", fontWeight: "bold" }}
            _focus={{ outline: "none" }}
            fontSize="12px"
            fontWeight="light"
            isDisabled={true}
          >
            PAYMENT
          </Tab>
          <Tab
            _selected={{ backgroundColor: "white", fontWeight: "bold" }}
            _focus={{ outline: "none" }}
            fontSize="12px"
            fontWeight="light"
          >
            SHIPPING
          </Tab>
        </TabList>
        <Box backgroundColor="white" pt={5}>
          <TabPanels backgroundColor="white" maxW="1000" mx="auto">
            <TabPanel>
              <NewAccordion
                section1="Are house cleaning servics worth it ?"
                section2="How long should a house cleaning take?"
                section3="My house still has furniture, is that okay?"
                desc1=" Yes, it certainly is assuming you're the type of person
                      who likes to come home to a beautiful and prisint ehome
                      without having lifted a finger. If you're a time-strapped
                      professional working a 16-hour day, a busy mom or dad
                      shuffling children between daycare."
                desc2="It depends entirely on the size of your house! The minimum booking length is 3 hours, but you can always a request a longer booking if you need one. Depending on the number of bedrooms and bathrooms you have, our checkout."
                desc3="At WeDo, we aim to provide the best end of lease cleaning possible. To work our magic, we require the property to be empty. We also need to make sure that there is power and running water.
                If for any reason you think the above conditions may not be possible, let us know in advance (via phone or email) and we will be more than happy to make alternative arrangements."
              />
            </TabPanel>
            <TabPanel>
              <NewAccordion
                section1="How much do you charge"
                section2="Is your quote final ?"
                desc1=" The cost of your end of lease clean generally depends on the size of your property.

                We charge in accordance with the number of bedrooms and bathrooms in your home.
                
                There are additional charges for extra services that are not included in the general scope of our standard bond clean. These include carpet steam cleaning, outside windows, extra balconies, full wall washing and extra blinds.
                
                If the property requires a more thorough cleaning, we may reserve the right to charge extra, this will be communicated to you before we start cleaning.
                
                Our end of lease clean starts at $318 for a one-bedroom or studio apartment and increases incrementally. All prices are inclusive of GST and our bond back guarantee."
                desc2="Yes, we've cleaned close to 50,000 Sydney homes, you could say we're experts in quoting. The price we give is our final price. If you were booking multiple properties we're happy to pass on a discount. Contact us by phone or via email to discuss pricing further."
                section3=""
                desc3=""
              />
            </TabPanel>
            <TabPanel >
              <p>three</p>
            </TabPanel>
            <TabPanel>
              <p>four</p>
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default EntryTabs;

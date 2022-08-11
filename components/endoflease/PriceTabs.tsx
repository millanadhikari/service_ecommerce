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
import NewAccordion from "../Entry/NewAccordion";

const PriceTabs = () => {
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
            SERVICES
          </Tab>
        </TabList>
        <Box backgroundColor="white" pt={5}>
          <TabPanels backgroundColor="white" maxW="1000" mx="auto">
            <TabPanel>
              <NewAccordion
                section1=" How much does a move out cleaning cost? ?"
                section2="So what happens if my landlord is still unhappy with the condition of the property after it has been cleaned?"
                section3=" How long does end of lease cleaning take?"
                desc1=" The average cost of your end of lease cleaning depends on: The size of the property - how many rooms there are, what is the size of these rooms. The condition of the property - If the property is neglected and requires more deep cleaning. The additional services you’ll need such as carpet steam cleaning, upholstery cleaning, exterior window cleaning, mattress cleaning etc."
                desc2="We provide our clients with a 72-hour period to inspect the property and notify us if there is an issue with our service. We will be happy to rectify any problems with the service for free within this time period."
                desc3="The bond service in Sydney is not hourly based, hence, it is not restricted by time. The cleaners will leave after ensuring that all areas on the cleaning checklist are thoroughly sanitised.The bond service in Sydney is not hourly based, hence, it is not restricted by time. The cleaners will leave after ensuring that all areas on the cleaning checklist are thoroughly sanitised."
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
                section3="How will I get a free Quote?"
                desc3="If you only need an estimate for the cleaning of your leased property and do not want to book yet, we have got you covered. We offer free quotes that do not incur any obligations or charges. You can contact our support team to get your free estimate today. You can also go to booking page to get quote on the website. It allows clients to understand the costing and use the quote to compare the pricing with other cleaning companies. We have no hidden charges and provide the final costing upfront so that you can make an informed decision."
              />
            </TabPanel>
            <TabPanel>
              <p>three</p>
            </TabPanel>
            <TabPanel>
              <NewAccordion
                section1=" Can I book an end of lease cleaning if I’m moving in?"
                section2="Can I have the sofa and armchairs steam cleaned, as they are rather stained?"
                desc1="Yes! We’ll be happy to help you clean your new home before you move in. However, the property should be unfurnished and free of personal belongings. You also need to make sure that the property has running water and electricity."
                desc2="Of course. However, specialised deep cleaning services are not included in the standard bond back cleaning service. Please, note that discounts would apply if you book upholstery cleaning, carpet cleaning or mattress cleaning at the same time as your end of lease cleaning."
                section3="Can I ask for a few walls to be cleaned?"
                desc3="Yes. The cleaners may be able to wash and spot clean your walls, depending on their condition. Additional costs may apply."
              />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default PriceTabs;

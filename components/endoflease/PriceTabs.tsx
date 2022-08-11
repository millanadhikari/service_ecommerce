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
                section3="How will I get a free Quote?"
                desc3="If you only need an estimate for the cleaning of your leased property and do not want to book yet, we have got you covered. We offer free quotes that do not incur any obligations or charges. You can contact our support team to get your free estimate today. You can also go to booking page to get quote on the website. It allows clients to understand the costing and use the quote to compare the pricing with other cleaning companies. We have no hidden charges and provide the final costing upfront so that you can make an informed decision."
              />
            </TabPanel>
            <TabPanel>
              <p>three</p>
            </TabPanel>
            <TabPanel>
              <NewAccordion
                section1="What is not included in your cleaning?"
                section2="What is not includedin Bond Back Guarantee?"
                desc1="Although we cover everything inside the property, there are a few things that do not fall into our checklist. Here is the list of the excluded items. We do not provide mould and mildew removal from hidden areas, such as the grout or the silicon. Our cleaners will do their best to eliminate the superficial mould, but you need specialists to eliminate them from the cracks and crevices.
                  We provide spot cleaning of walls for marks and stains. However, we do not wash them from top to bottom as it can take a lot of time.
                  Some of the walls may have developed a damp spot. We can try to dry them with paper towels, but they can quickly come back by the time of the inspection due to internal leakage and other construction problems.
                  If the property is old and has been subjected to wear and tear without any restorative work done in years, then it can be difficult to make it shine again. The discoloration due to wear and tear may not go away with cleaning.
                  While we make sure that we clean the stains on the tiles and bench tops, the composition of these materials may require the intervention of a specialist for desired
                   results."
                desc2="Although, we clean the windows and outside areas, such as balconies and the patio, we do not provide any guarantee for them. Since these areas are in the open and can get dirty again due to the external environment, it is not possible for us to guarantee their cleanliness at the time of the inspection. Wind, rain, and dust can accumulate on the windows and glass doors from outside, so we are not responsible for it. Also, we do not clean the garage and any areas that become dirty post the cleaning due to pest control or the presence of any other service provider in the house."
                section3="What do you need from us for cleaning?"
                desc3="We are fully equipped to complete the task without any help from the tenant. The only things we need are electricity and water to clean the premises perfectly. Here is what we bring along."
              />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default PriceTabs;

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const NewAccordion = ({ section1, section2, desc1, desc2, section3, desc3}) => {
  return (
    <Accordion>
      <AccordionItem >
        <h2>
          <AccordionButton _focus={{outline: 'none'}}>
            <Box flex="1" textAlign="left" fontWeight="bold" py={2}>
              {section1}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel fontSize="14px" color="gray.500" pb={4}>{desc1}</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton  _focus={{outline: 'none'}} >
            <Box flex="1" textAlign="left" fontWeight="bold"  py={2}>
              {section2}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel fontSize="14px" color="gray.500"  pb={4}>{desc2}</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton  _focus={{outline: 'none'}} >
            <Box flex="1" textAlign="left" fontWeight="bold"  py={2}>
              {section3}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel fontSize="14px" color="gray.500"  pb={4}>{desc3}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default NewAccordion;

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsDot } from "react-icons/bs";
import { data } from "./data";

// function Checklist() {
//   return (
//     <Box bg="#e4f0ff" w="100%">
//       <Box
//         w={{ base: "100%", md: "760px", lg: "1000px" }}
//         mx={{ md: "auto" }}
//         px={4}
//         py={8}
//         my={24}
//         color="gray.600"
//       >
//         <Heading textAlign="center" fontSize="1.2rem">
//           The Step-by-Step Process Our Bond Cleaners Follows on Every Job
//         </Heading>
//         <Text fontSize="0.9rem" letterSpacing="0.03rem" my={4}>
//           When the bond cleaning team arrives at your property, they’ll inspect
//           every area to confirm that everything which might need cleaning is
//           included in their checklist. They’ll note the areas that might need
//           extra cleaning to make sure everything is left spotless.
//         </Text>
//         <Flex justifyContent="top" mb={4}>
//           <BsDot size={20} />
//           <Text fontSize="0.9rem" letterSpacing="0.03rem">
//             <span style={{ fontWeight: "bold" }}>Kitchen:</span> Floors will be
//             vacuumed and mopped, benchtops and surfaces - polished; the oven
//             will be cleaned inside and out; the cooker top, hops, knobs will be
//             wiped clean; kitchen cupboards are cleaned inside and out; the sink
//             area is scrubbed; bins - washed; all electrical appliances -
//             sanitised.
//           </Text>
//         </Flex>
//         <Text
//           fontSize="0.9rem"
//           letterSpacing="0.03rem"
//           textDecoration="italics"
//           as="i"
//         >
//           Please, note that we cannot clean your refrigerator and freezer unless
//           they have been defrosted in advance. The cost for this will be
//           integrated into the final price.
//         </Text>

//         <Flex justifyContent="top" mt="4">
//           <BsDot size={20} />
//           <Text fontSize="0.9rem" letterSpacing="0.03rem">
//             <span style={{ fontWeight: "bold" }}>
//               Living room/ dining room/ common areas:
//             </span>{" "}
//             All surfaces, appliances and decoration will be dusted; carpets and
//             rugs - vacuumed (steam carpet cleaning and stain removal treatment
//             is available at discounted rates) the furniture will be polished;
//             skirting boards, light switches and window sills - wiped cleaned;
//             cobwebs will be removed; the internal windows can be washed and
//             blinds - dusted, upon request.
//           </Text>
//         </Flex>
//         <Flex alignItems="top" textAlign="left" my={4}>
//           <BsDot size={20} />
//           <Text fontSize="0.9rem" letterSpacing="0.03rem">
//             <span style={{ fontWeight: "bold" }}>Bedrooms:</span> The floors and
//             surfaces will be thoroughly cleaned; any mirrors and pictures -
//             polished; window sills and skirting boards - cleaned; cobwebs we’ll
//             carefully removed. Wardrobes, cupboards and drawers will be dusted
//             inside and out.
//           </Text>
//         </Flex>
//         <Flex alignItems="top" textAlign="left" my={4}>
//           <BsDot size={20} />
//           <Text fontSize="0.9rem" letterSpacing="0.03rem">
//             <span style={{ fontWeight: "bold" }}>Bathroom:</span> The floor will
//             be vacuumed and mopped; the sink and sink cabinet - polished; the
//             toilet, shower and bath are disinfected and sanitised; fittings,
//             bathroom accessories, taps and fixtures are wiped clean and dried.
//           </Text>
//         </Flex>
//         <Flex alignItems="top" textAlign="left" my={4}>
//           <BsDot size={20} />
//           <Text fontSize="0.9rem" letterSpacing="0.03rem">
//             <span style={{ fontWeight: "bold" }}>Additional rooms:</span> Upon
//             request balconies, garages, study rooms and any other extra rooms
//             will be thoroughly cleaned on an additional fee. The end of lease
//             cleaning is not hourly based, we determine the estimate of the job
//             by the amount of workload. You can request a customized bond
//             cleaning with a few simple clicks.
//           </Text>
//         </Flex>
//       </Box>
//     </Box>
//   );
// }

function Checklist() {
  return (
    <Box bg="#e4f0ff" w="100%">
      <Box
        w={{ base: "100%", md: "760px", lg: "1000px" }}
        mx={{ md: "auto" }}
        px={4}
        py={8}
        my={12}
        mt={20}
        color="gray.600"
      >
        <Heading fontWeight="bold" textAlign="center" fontSize="1.2rem">
          Detailed End of Lease Cleaning Checklist Including Everything We Clean
          on Your Property
        </Heading>
        <Box my={6}>
          {data.map((item) => (
            <ChecklistAccordion
              title={item.title}
              key={item.id}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Checklist;

const ChecklistAccordion = ({ title, description }) => {
  return (
    <Box mb={2} mx={{ md: 20, lg: 40 }}>
      <Accordion  allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton
              bg="blue.600"
              color="gray.50"
              _hover={{ bg: "hidden" }}
              _focus={{ outline: "none" }}
              rounded="sm"
            >
              <Box
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                letterSpacing={1}
              >
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box fontSize="14px" mx={4}>
              {" "}
              {description.map((item) => (
                <ul key={item.id}>
                  <li>{item.title}</li>
                </ul>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

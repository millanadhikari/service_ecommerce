import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsDot } from "react-icons/bs";

function Checklist() {
  return (
    <Box px={4} py={8} bg="#e4f0ff" color="gray.600"
    >
      <Heading textAlign="center" fontSize="1.2rem">
        The Step-by-Step Process Our Bond Cleaners Follows on Every Job
      </Heading>
      <Text fontSize="0.9rem" letterSpacing="0.03rem" my={4}>
        When the bond cleaning team arrives at your property, they’ll inspect
        every area to confirm that everything which might need cleaning is
        included in their checklist. They’ll note the areas that might need
        extra cleaning to make sure everything is left spotless.
      </Text>
      <Flex justifyContent="top" >
        <BsDot size="2em"  />
        <Text fontSize="0.9rem" letterSpacing="0.03rem">
          <span style={{ fontWeight: "bold" }}>Kitchen:</span> Floors will be
          vacuumed and mopped, benchtops and surfaces - polished; the oven will
          be cleaned inside and out; the cooker top, hops, knobs will be wiped
          clean; kitchen cupboards are cleaned inside and out; the sink area is
          scrubbed; bins - washed; all electrical appliances - sanitised.
        </Text>
      </Flex>
      <Text
        fontSize="0.9rem"
        letterSpacing="0.03rem"
        my={4}
        textDecoration="italics"
      >
        Please, note that we cannot clean your refrigerator and freezer unless
        they have been defrosted in advance. The cost for this will be
        integrated into the final price.
      </Text>

      <Flex justifyContent="top" >
        <BsDot size="2em"  />
        <Text fontSize="0.9rem" letterSpacing="0.03rem">
          <span style={{ fontWeight: "bold" }}>
            Living room/ dining room/ common areas:
          </span>{" "}
          All surfaces, appliances and decoration will be dusted; carpets and
          rugs - vacuumed (steam carpet cleaning and stain removal treatment is
          available at discounted rates) the furniture will be polished;
          skirting boards, light switches and window sills - wiped cleaned;
          cobwebs will be removed; the internal windows can be washed and blinds
          - dusted, upon request.
        </Text>
      </Flex>
      <Flex alignItems="top" textAlign="left" my={4} >
        <BsDot size="2em"  />
        <Text fontSize="0.9rem" letterSpacing="0.03rem">
          <span style={{ fontWeight: "bold" }}>Bedrooms:</span> The floors and
          surfaces will be thoroughly cleaned; any mirrors and pictures -
          polished; window sills and skirting boards - cleaned; cobwebs we’ll
          carefully removed. Wardrobes, cupboards and drawers will be dusted
          inside and out.
        </Text>
      </Flex>
      <Flex alignItems="top" textAlign="left" my={4} >
        <BsDot size="2em"  />
        <Text fontSize="0.9rem" letterSpacing="0.03rem">
          <span style={{ fontWeight: "bold" }}>Bathroom:</span> The floor will
          be vacuumed and mopped; the sink and sink cabinet - polished; the
          toilet, shower and bath are disinfected and sanitised; fittings,
          bathroom accessories, taps and fixtures are wiped clean and dried.
        </Text>
      </Flex>
      <Flex alignItems="top" textAlign="left" my={4} >
        <BsDot size="2em"  />
        <Text fontSize="0.9rem" letterSpacing="0.03rem">
          <span style={{ fontWeight: "bold" }}>Additional rooms:</span> Upon
          request balconies, garages, study rooms and any other extra rooms will
          be thoroughly cleaned on an additional fee. The end of lease cleaning
          is not hourly based, we determine the estimate of the job by the
          amount of workload. You can request a customized bond cleaning with a
          few simple clicks.
        </Text>
      </Flex>
    </Box>
  );
}

export default Checklist;

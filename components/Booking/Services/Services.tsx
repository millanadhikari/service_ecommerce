import { Box, CircularProgress, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CleaningType from "./Service/CleaningType";
import Postcode from "./Service/Postcode";
import Toilets from "./Service/Toilets";

interface Props {
  selectedService: string;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
  toilets: number;
  setToilets: React.Dispatch<React.SetStateAction<number>>;
  bedrooms: number;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
  postcode: string;
  setPostCode: React.Dispatch<React.SetStateAction<string>>;
  bloading: boolean;
}
const Services = ({
  selectedService,
  setSelectedService,
  toilets,
  setToilets,
  bedrooms,
  setBedrooms,
  postcode,
  setPostCode,
  bloading,
}: Props) => {
  return (
    <Box
      rounded="md"
      py={{ base: 8, md: 16 }}
      px={{ base: "1", md: "16" }}
      my={{ md: 15 }}
      backgroundColor="gray.100"
      w="100%"
      
    >

        <Box>
          <CleaningType
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            bloading={bloading}
          />
          <Toilets
            toilets={toilets}
            setToilets={setToilets}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bloading={bloading}
          />
          <Postcode postcode={postcode} setPostCode={setPostCode} bloading={bloading} />{" "}
        </Box>

    </Box>
  );
};

export default Services;

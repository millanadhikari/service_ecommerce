import { Box, Heading } from "@chakra-ui/react";
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
}:Props) => {
  return (
    <Box rounded="md" py={{base:8, md:16}} px={{base:"6", md:"16" }} my={{md:10}} backgroundColor="gray.100">
      <CleaningType
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <Toilets
        toilets={toilets}
        setToilets={setToilets}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
      />
      <Postcode postcode={postcode} setPostCode={setPostCode} />
    </Box>
  );
};

export default Services;

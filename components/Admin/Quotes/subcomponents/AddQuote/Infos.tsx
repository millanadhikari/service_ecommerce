import { Box } from "@chakra-ui/react";
import React from "react";
import CustomerInfo from "./CustomerInfo";
import JobAccor from "./JobAccor";

const Infos = ({ display, setDisplay }) => {
  return (
    <Box mx={-2} my={2}>
      <Box>
        <CustomerInfo display={display} setDisplay={setDisplay} />
        <JobAccor display={display} setDisplay={setDisplay} />
      </Box>
    </Box>
  );
};

export default Infos;

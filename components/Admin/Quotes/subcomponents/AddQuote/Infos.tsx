import { Box } from "@chakra-ui/react";
import React from "react";
import CustomerInfo from "./CustomerInfo";
import JobAccor from "./JobAccor";
import Total from "./Total";

const Infos = ({title, display, setDisplay }) => {
  return (
    <Box mx={-2} my={2}>
      <Box>
        <CustomerInfo title={title} display={display} setDisplay={setDisplay} />
        <JobAccor display={display} setDisplay={setDisplay} />
        <Total display={display} setDisplay={setDisplay}/>
      </Box>
    </Box>
  );
};

export default Infos;

import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  postcode: string;
  setPostCode: React.Dispatch<React.SetStateAction<number>>;
}

const Postcode = ({ postcode, setPostCode }) => {
  return (
    <Box textAlign="left" px={4}>
      <Heading fontSize={18} mt={10} mb={3}>
        Enter your postcode*
      </Heading>
      <Input
        
        _focus={{ borderColor: "gray.100" }}
        backgroundColor="white"
        onChange={(e)=>setPostCode(e.target.value)}
        value= {postcode}

      />
    </Box>
  );
};

export default Postcode;

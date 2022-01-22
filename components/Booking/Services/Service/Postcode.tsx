import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  postcode: number;
  setPostCode: React.Dispatch<React.SetStateAction<number>>;
}

const Postcode = ({ postcode, setPostCode }) => {
  return (
    <Box textAlign="left">
      <Heading fontSize={20} mt={10} mb={6}>
        Please enter your postcode *
      </Heading>
      <Input
        
        _focus={{ borderColor: "gray.100" }}
        backgroundColor="white"
        onChange={(e)=>setPostCode(parseInt(e.target.value))}
        value={postcode}
      />
    </Box>
  );
};

export default Postcode;

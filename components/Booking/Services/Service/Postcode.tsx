import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  postcode: string;
  setPostCode: React.Dispatch<React.SetStateAction<number>>;
}

const Postcode = ({ postcode, setPostCode }) => {
  return (
    <Box textAlign="left" px={7}>
      <Flex fontWeight="bold" fontSize={14} mt={5} mb={3}>
        Enter your postcode<Text ml={1} color="red.300">*</Text>
      </Flex>
      <Input
        
        _focus={{ borderColor: "gray.100" }}
        backgroundColor="white"
        placeholder="e.g. 2000"
        _placeholder={{fontSize:"13px"}}
        onChange={(e)=>setPostCode(e.target.value)}
        value= {postcode}

      />
    </Box>
  );
};

export default Postcode;

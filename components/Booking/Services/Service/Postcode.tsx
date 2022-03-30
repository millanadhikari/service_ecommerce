import { Box, Flex, Heading, Input, Skeleton, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  postcode: string;
  setPostCode: React.Dispatch<React.SetStateAction<string>>;
}

const Postcode = ({ postcode, setPostCode, bloading }) => {
  return (
    <Box textAlign="left" px={7}>
            <Skeleton isLoaded={!bloading} rounded="md">

      <Flex fontWeight="bold" fontSize={14} mt={5} mb={3} color="gray.600">
        Enter your postcode
        <Text ml={1} color="red.300">
          *
        </Text>
      </Flex>
      </Skeleton>
      <Skeleton isLoaded={!bloading}>
        <Input
          _focus={{ borderColor: "gray.100" }}
          backgroundColor="white"
          placeholder="e.g. 2000"
          _placeholder={{ fontSize: "13px" }}
          onChange={(e) => setPostCode(e.target.value)}
          value={postcode}
        />
      </Skeleton>
    </Box>
  );
};

export default Postcode;

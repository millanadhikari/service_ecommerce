import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import CustomerInfo from "../../Quotes/subcomponents/AddQuote/CustomerInfo";

const TechInfos = ({ title, display, setDisplay }) => {
  return (
    <Box my={2}>
      <Box>
        <Heading fontSize="18">Profile Picture</Heading>
        <Image
          maxW="64px"
          border="2px solid blue"
          borderColor="#013d82"
          rounded="full"
          my={4}
          src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
        />

        <Box my={4}>
          <form>
            <Input
              ml={-4}
              border="none"
              fontSize="12"
              type="file"
              //   onChange={onSelectFile}
            />
            <Button
              //   disabled={selectedFile === undefined}
              colorScheme="blue"
              size="xs"
              py={4}
              type="submit"
            >
              Upload
            </Button>
          </form>
          <Text as={"em"} fontSize="12">
            Minimum square image size: 200px x 200px
          </Text>
        </Box>
        <CustomerInfo title={title} display={display} setDisplay={setDisplay} />
      </Box>
    </Box>
  );
};

export default TechInfos;

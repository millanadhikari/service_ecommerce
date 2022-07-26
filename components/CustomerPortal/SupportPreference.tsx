import {
  Box,
  Heading,
  Stack,
  Input,
  Button,
  Flex,
  Text,
  Checkbox,
} from "@chakra-ui/react";

const SuppportPreference = () => {
  return (
    <Box h="60vh" mx={{ md: "auto" }}>
      <Heading fontSize="24px" textAlign="center">
        Support & Preferences
      </Heading>
      <Stack my="6">
        <Flex gap={4} flexDir="row">
          <Flex justifyContent="top" alignItems="center" gap={4}>
            <Checkbox defaultChecked></Checkbox>

            <Box>
              {" "}
              <Text>Digital Advertising</Text>
              <Text>
                From time to time we use member data to customise your web
                experience on third party websites to deliver you the best
                offers & content. Unselect this option at any time to opt out of
                having your personal data used for this purpose
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="top" alignItems="center" gap={4}>
            <Checkbox defaultChecked></Checkbox>

            <Box>
              {" "}
              <Text>Digital Advertising</Text>
              <Text>
                From time to time we use member data to bring you exclusive
                offers from program partners. Unselect this option at any time
                to opt out of having your personal data used for this purpose
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Stack>
      <Button colorScheme="blue">Update</Button>
    </Box>
  );
};

export default SuppportPreference;

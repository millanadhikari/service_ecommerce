import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMenuState,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";

const Notes = () => {
  const [input, setInput] = useState("");
  return (
    <Box
      my={8}
      bg="white"
      py={5}
      mr={{ base: 2, md: "10" }}
      px={6}
      rounded="md"
      shadow="md"
    >
      <Tabs>
        <Flex gap={2} alignItems="center">
          <Flex alignItems="center" w="100%">
            <Flex mb={3} alignItems="center">
              <TabList>
                <Tab _focus={{ outline: "none" }}>
                  <Heading
                    fontSize="15px"
                    alignItems={"center"}
                    color="gray.600"
                  >
                    Internal job notes
                  </Heading>
                </Tab>
                <Text color="gray.400" mt={2} mx={3}>
                  |
                </Text>
                <Tab _focus={{ outline: "none" }}>
                  <Text color="gray.400" fontWeight="semibold" fontSize="14px">
                    Files
                  </Text>
                </Tab>
              </TabList>
            </Flex>
          </Flex>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Flex gap={4}>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add note"
                size="sm"
              ></Input>
              <Button
                bg="blue.700"
                fontSize="13px"
                rounded="full"
                px={6}
                _hover={{ bg: "blue.600", color: "gray.200" }}
                size="sm"
                color="white"
              >
                Save note
              </Button>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Notes;

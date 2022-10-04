import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Switch,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";

const Checklist = () => {
  return (
    <Box my={8} bg="white" py={5} mr={{base:2, md:'10'}} px={6} rounded="md" shadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Flex gap={2} mb={3}>
            <Heading fontSize="15px" color="gray.600">
              Checklist
            </Heading>
            <Icon
              fontSize="12px"
              color="gray.500"
              cursor="pointer"
              as={BiHelpCircle}
            />
          </Flex>
          <Flex
            fontSize="13px"
            alignItems="center"
            fontWeight="semibold"
            color="gray.500"
            gap={4}
          >
            <Text>Use Default Checklist</Text>
            <Switch id="email-alerts" _focus={{ border: "none" }} size="md" />
          </Flex>
        </Box>
        <Button
          bg="blue.700"
          fontSize="13px"
          rounded="full"
          px={6}
          size="sm"
          color="white"
        >
          Add item
        </Button>
      </Flex>
      {checklistTable()}
    </Box>
  );
};

export default Checklist;

const checklistTable = () => {
  return (
    <Box my={2}>
      <TableContainer>
        <Table variant="simple">
          <Thead
            borderTop="1px solid gray"
            borderBottom="2px solid gray"
            borderColor="gray.200"
          >
            <Tr>
              <Th py={4} color="gray.600" fontSize="11px">
                To Do
              </Th>
              <Th color="gray.600" fontSize="11px">
                History Timeline
              </Th>
              <Th color="gray.600" fontSize="11px">
                Options
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
      <Box textAlign={"center"} w="100%" my={20}>
        <Icon fontSize="40px" color="gray.400" as={FaClipboardList} />
        <Text my={2} color="gray.400" fontWeight="semibold">No Checklist item</Text>
      </Box>
    </Box>
  );
};

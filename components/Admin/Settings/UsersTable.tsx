import {
  Box,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const UsersTable = () => {
  return (
    <TableContainer>
      <Flex
        my={4}
        fontSize="14"
        alignItems="center"
        justifyContent="right"
        gap={2}
      >
        <Text>Search: </Text>
        <Input size="sm" w="30" />
      </Flex>
      <Table variant="simple" mb={4}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Account Type</Th>
            <Th>Date Created</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr fontSize="15px" color="gray.600">
            <Td fontWeight="semibold" color="blue.600" cursor="pointer">
              Milan Adhikari
            </Td>
            <Td>Admin</Td>
            <Td>01/25/2023</Td>
            <Td>Active</Td>
            <Td>Login as tech</Td>
          </Tr>
          <Tr fontSize="15px" color="gray.600">
            <Td fontWeight="semibold" color="blue.600" cursor="pointer">
              Milan Adhikari
            </Td>
            <Td>Admin</Td>
            <Td>01/25/2023</Td>
            <Td>Active</Td>
            <Td>Login as tech</Td>
          </Tr>
          <Tr fontSize="15px" color="gray.600">
            <Td fontWeight="semibold" color="blue.600" cursor="pointer">
              Milan Adhikari
            </Td>
            <Td>Admin</Td>
            <Td>01/25/2023</Td>
            <Td>Active</Td>
            <Td>Login as tech</Td>
          </Tr>
          <Tr fontSize="15px" color="gray.600">
            <Td fontWeight="semibold" color="blue.600" cursor="pointer">
              Milan Adhikari
            </Td>
            <Td>Admin</Td>
            <Td>01/25/2023</Td>
            <Td>Active</Td>
            <Td>Login as tech</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;

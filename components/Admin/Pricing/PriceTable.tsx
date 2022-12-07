import {
  Checkbox,
  Flex,
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
import { AiOutlineQuestionCircle } from "react-icons/ai";

const PriceTable = ({ product }) => {
  return (
    <TableContainer
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Table variant="simple">
        <Thead>
          <Tr color="gray.900">
            <Th color="white">lkjdf</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Status</Th>
            <Th>Type</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        {product && product.map((item) => (
        <Tbody key={item._id}>
          <Tr fontSize="14px" cursor="pointer" _hover={{ bg: "gray.100" }}>
            <Td>
              <Text
                border="2px solid gray"
                fontWeight="semibold"
                rounded="full"
                textAlign="center"
                w="12"
                p={3}
                borderColor="blue.600"
              >
                BP
              </Text>
            </Td>
            <Td fontWeight="semibold" fontSize="14px" color="blue.600">
              {item.title}
            </Td>
            <Td fontSize="14px">Base Price for all {item.title}</Td>
            <Td fontSize="14px">Active</Td>
            <Td fontSize="14px">Standard</Td>
            <Td fontSize="14px">
              <Flex alignItems="center" gap={4}>
                <Text>$ {item.price}</Text>
                <AiOutlineQuestionCircle fontSize="18px" />
              </Flex>
            </Td>
          </Tr>
        </Tbody>
         ))}
      </Table>
    </TableContainer>
  );
};

export default PriceTable;

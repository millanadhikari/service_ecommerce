import {
  Box,
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

const BookingHistory = () => {
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
            <Th>
              <Checkbox _focus={{ outline: "none" }} />
            </Th>
            <Th>Date</Th>
            <Th>Jobs</Th>
            <Th>Customer</Th>
            <Th>Total</Th>
            
          </Tr>
        </Thead>

        <Tbody fontSize="15px">
          <Tr fontSize="14px" cursor="pointer" _hover={{ bg: "gray.100" }}>
            <Td>
              <Checkbox _focus={{ outline: "none" }} />
            </Td>
            <Td color="blue.400" fontWeight="semibold">
              <Flex alignItems="center" gap={1}>
                <Text>#</Text>
                dfsdf{" "}
              </Flex>
            </Td>
            <Td>dfdf</Td>
            <Td color="blue.400" fontWeight="semibold">
              sdff
            </Td>
            <Td py={6}>
              <Box
                fontWeight={"semibold"}
                w="100px"
                textAlign="center"
                border="1px solid gray"
                rounded="full"
                py={1}
                fontSize="12px"
                px={3}
              >
                hjhj
              </Box>
            </Td>
            <Td>
              <Box
                fontWeight={"semibold"}
                w="100px"
                textAlign="center"
                border="1px solid gray"
                rounded="full"
                py={1}
                fontSize="11px"
                px={3}
              >
                {/* {item.service === 'eol' || 'endoflease' ? "End of Lease" : 'General Clean'
                    } */}
                hjhj
              </Box>
            </Td>
            <Td>
              <Text fontWeight={"semibold"} color="gray.500">
                $ klkl
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BookingHistory;

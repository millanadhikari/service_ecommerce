import {
  Box,
  Checkbox,
  Flex,
  Spinner,
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
import { Router, useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../../app/hooks";

const QuotesTable = ({ selected, setSelected }) => {
  const router = useRouter();
  const isLoading = useAppSelector((state) => state.quotes.isLoading);
  const quotes = useAppSelector(
    (state) => state.quotes.quotes.paginatedResults
  );
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((e) => e !== value));
    }
  };

  const handleRouter = (e, _id) => {
    e.preventDefault();
    router.push(`/admin/quotes/${_id}`);
  };

  const changeDateFormat = (ok) => {
    let l = new Date(ok);
    return (
      <Text color="gray.400" fontSize="13px">
        {l.toString().substring(0, 16)}
      </Text>
    );
  };

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
            <Th>Quote</Th>
            <Th>Create Date</Th>
            <Th>Customer</Th>
            <Th>Status</Th>
            <Th>Requested Service</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        {!isLoading ? (
          quotes?.map((item) => (
            <Tbody key={item._id} fontSize="15px">
              <Tr fontSize="14px" cursor="pointer" _hover={{ bg: "gray.100" }}>
                <Td>
                  <Checkbox
                    value={item._id}
                    isChecked={item.isChecked}
                    onChange={(e) => handleCheckbox(e)}
                    _focus={{ outline: "none" }}
                  />
                </Td>
                <Td
                  color="blue.400"
                  fontWeight="semibold"
                  onClick={(e) => handleRouter(e, item._id)}
                >
                  <Flex alignItems="center" gap={1}>
                    <Text>#</Text>
                    {item.quoteReference}
                  </Flex>
                </Td>
                <Td onClick={(e) => handleRouter(e, item._id)}>
                  {changeDateFormat(item.createdAt)}
                </Td>
                <Td
                  onClick={(e) => handleRouter(e, item._id)}
                  color="blue.400"
                  fontWeight="semibold"
                >
                  {item.firstName} {item.lastName}
                </Td>
                <Td py={6}>
                  <Box
                    fontWeight={"semibold"}
                    w="100px"
                    textAlign="center"
                    color={
                      item.status === "In Progress" ? "blue.500" : "gray.400"
                    }
                    border="1px solid gray"
                    borderColor={
                      item.status === "In Progress" ? "blue.500" : "gray.300"
                    }
                    rounded="full"
                    py={1}
                    fontSize="12px"
                    px={3}
                  >
                    {item.quoteStatus}
                  </Box>
                </Td>
                <Td>
                  <Box
                    fontWeight={"semibold"}
                    w="100px"
                    textAlign="center"
                    color={
                      item.service === "end of lease" || "eol"
                        ? "blue.400"
                        : "gray.400"
                    }
                    bg={
                      item.service === "end of lease" || "eol"
                        ? "blue.100"
                        : "gray.400"
                    }
                    border="1px solid gray"
                    borderColor={
                      item.service === "End of Lease" || "eol"
                        ? "blue.500"
                        : "gray.300"
                    }
                    rounded="full"
                    py={1}
                    fontSize="11px"
                    px={3}
                  >
                    {/* {item.service === 'eol' || 'endoflease' ? "End of Lease" : 'General Clean'
                      } */}
                    {item.service === "generalclean" && "General Clean"}
                    {item.service === "end of lease" && "End of Lease"}
                    {item.service === "eol" && "End of Lease"}
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight={"semibold"} color="gray.500">
                    $ {item.subtotal.toString().substring(0, 3)}
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          ))
        ) : (
          <Spinner h={16} w={16} my={20} mx="580%" />
        )}
      </Table>
    </TableContainer>
  );
};

export default QuotesTable;

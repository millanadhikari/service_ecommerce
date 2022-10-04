import {
  Box,
  Checkbox,
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

const JobsTable = ({ all, setAll, selected, setSelected }) => {
  const router = useRouter();

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    console.log(selected);
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((e) => e !== value));
    }
  };

  const handleRouter = (e) => {
    e.preventDefault();
    router.push("/admin/bookings/1");
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr color="gray.900">
            <Th>
              <Checkbox _focus={{ outline: "none" }} />
            </Th>
            <Th>Job</Th>
            <Th>Service Date</Th>
            <Th>Create Date</Th>
            <Th>Customer</Th>
            <Th>Status</Th>
            <Th>Assigned</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        {all &&
          all.map((item) => (
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
                  onClick={(e) => handleRouter(e)}
                >
                  {item.job}
                </Td>
                <Td onClick={(e) => handleRouter(e)}>{item.serviceDate}</Td>
                <Td onClick={(e) => handleRouter(e)}>{item.createDate}</Td>
                <Td
                  onClick={(e) => handleRouter(e)}
                  color="blue.400"
                  fontWeight="semibold"
                >
                  {item.customer}
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
                    {item.status}
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight={"semibold"} color="gray.400">
                    {item.assigned}
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={"semibold"} color="gray.500">
                    $ {item.total}
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          ))}
      </Table>
    </TableContainer>
  );
};

export default JobsTable;

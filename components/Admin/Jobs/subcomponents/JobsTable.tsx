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

const JobsTable = ({ selected, setSelected }) => {
  const router = useRouter();
  const isLoading = useAppSelector((state) => state.quotes.isLoading);
  const bookings = useAppSelector(
    (state) => state.bookings.bookings.paginatedResults
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
    router.push(`/admin/bookings/${_id}`);
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
            <Th>Job</Th>
            <Th>Booking Date</Th>
            <Th>Customer</Th>
            <Th>Status</Th>
            <Th>Requested Service</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        {!isLoading ? (
          bookings?.map((item) => (
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
                    {item.bookingReference}
                  </Flex>
                </Td>
                <Td onClick={(e) => handleRouter(e, item._id)}>
                  <Text color="gray.400">
                    {item?.bookingDate !== ""
                      ? changeDateFormat(item?.bookingDate)
                      : "N/A"}
                  </Text>
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
                    color={colorPicker(item?.bookingStatus)}
                    border="1px solid gray"
                    borderColor={colorPicker(item?.bookingStatus)}
                    

                    rounded="full"
                    py={1}
                    fontSize="11px"
                    px={3}
                  >
                    {item.bookingStatus}
                  </Box>
                </Td>
                <Td>
                  <Box
                    fontWeight={"semibold"}
                    w="100px"
                    textAlign="center"
                    color={
                      item.service === "end of lease" ? "blue.400" : "red.400"
                    }
                    bg={
                      item.service === "end of lease" ? "blue.100" : "red.100"
                    }
                    border="1px solid gray"
                    borderColor={
                      item.service === "end of lease" ? "blue.400" : "red.400"
                    }
                    rounded="full"
                    py={1}
                    fontSize="11px"
                    px={3}
                  >
                    {/* {item.service === 'eol' || 'endoflease' ? "End of Lease" : 'General Clean'
                      } */}
                    {item.service === "generalclean" && "General Clean"}
                    {item.service === "general clean" && "General Clean"}
                    {item.service === "end of lease" && "End of Lease"}
                    {item.service === "eol" && "End of Lease"}
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight={"semibold"} color="gray.500">
                    $ {item?.subtotal?.toString().substring(0, 3)}
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

const colorPicker = (status) => {
  if (status === "In Progress") {
    return `blue.500`;
  } else if (status === "Scheduled") {
    return `yellow.400`;
  } else if (status === "Completed") {
    return `green.400`;
  } else {
    return `red.500`;
  }
};

export default JobsTable;

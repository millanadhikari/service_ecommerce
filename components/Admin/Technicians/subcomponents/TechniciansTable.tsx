import {
  Box,
  Checkbox,
  Flex,
  Image,
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

const TechniciansTable = ({ selected, setSelected }) => {
  const router = useRouter();
  const isLoading = useAppSelector((state) => state.technicians?.isLoading);
  const technicians = useAppSelector(
    (state) => state.technicians?.technicians?.paginatedResults
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
    router.push(`/admin/technicians/${_id}`);
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
      my={10}
    >
      <Table variant="simple">
        <Thead>
          <Tr color="gray.900">
            <Th>
              <Text color="white">lan</Text>
            </Th>
            <Th fontSize="11px">Name</Th>
            <Th fontSize="11px">Birthday</Th>
            <Th fontSize="11px">Customer</Th>
            <Th fontSize="11px">Total Booking</Th>
            <Th fontSize="11px">Cancellations</Th>
            <Th fontSize="11px">Revenue Generated</Th>
          </Tr>
        </Thead>
        {!isLoading ? (
          technicians?.map((item) => (
            <Tbody key={item._id} fontSize="15px">
              <Tr fontSize="14px" cursor="pointer" _hover={{ bg: "gray.100" }}>
                <Td>
                <Flex
                  position="relative"
                  
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize="10px"
                  
                  border="2px solid gray"
                  borderColor="blue.500"

                  rounded="full"
                  h={10}
                  w={10}
                >
                  <Image h={8} w={8} rounded="full" src={item?.profilePic?.src !== "" ? item?.profilePic?.src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iCpiWXk0d2jGf57Uskp8MVgYJBrYK-f3w&usqp=CAU'}/>
                  </Flex>
                </Td>
                <Td
                  color="blue.400"
                  fontWeight="semibold"
                  onClick={(e) => handleRouter(e, item._id)}
                >
                  <Flex alignItems="center" gap={1}>
                    {item.firstName} {item.lastName}
                  </Flex>
                </Td>
                <Td onClick={(e) => handleRouter(e, item._id)}>
                  {/* {changeDateFormat(item.createdAt)} */}
                  <Text color="gray.400">N/A</Text>
                </Td>
                <Td
                  onClick={(e) => handleRouter(e, item._id)}
                  color="blue.400"
                  fontWeight="semibold"
                >
                  <Text color="gray.400">N/A</Text>
                </Td>
                <Td py={6}>
                  <Box
                    fontWeight={"semibold"}
                    w="100px"
                    textAlign="center"
                    color={
                      item.bookingStatus === "In Progress"
                        ? "blue.500"
                        : "gray.400"
                    }
                    border="1px solid gray"
                    borderColor={
                      item.bookingStatus === "In Progress"
                        ? "blue.500"
                        : "gray.300"
                    }
                    rounded="full"
                    py={1}
                    fontSize="12px"
                    px={3}
                  >
                    {2}
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
                 {0}
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight={"semibold"} color="gray.500">
                    $ {2100}
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

export default TechniciansTable;

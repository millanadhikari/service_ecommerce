import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SingleBookings from './SingleBooking/SingleBookings';

const data = [
    { id: 1, description: "2 bedroom End of Lease", assignee: "Online", suburb: "Hornsby", priority: "Clear", completed: false, address:"2/29, Ada Street, Burwwod, NSW", customerName:"Rajesh Hamal", customerEmail:"rajeshHamal@gmail.com", customerPhone:"0434343433", dateOpen: "2022-02-01" },
    { id: 2, description: "Studio Apartment End of Lease", assignee: "Milan", suburb: "Ashfield", priority: "Clear", completed: false, address:"2/29, Ada Street, Burwwod, NSW", customerName:"Rajesh Hamal", customerEmail:"rajeshHamal@gmail.com", customerPhone:"0434343433", dateOpen: "2022-02-01" },
    { id: 3, description: "5 bedroom End of Lease", assignee: "App", suburb: "Hurstville", priority: "Urgent", completed: false, address:"2/29, Ada Street, Burwwod, NSW", customerName:"Rajesh Hamal", customerEmail:"rajeshHamal@gmail.com", customerPhone:"0434343433", dateOpen: "2022-02-01" },
    { id: 4, description: "1 bedroom End of Lease", assignee: "Online", suburb: "Waitara", priority: "Clear", completed: false, address:"2/29, Ada Street, Burwwod, NSW", customerName:"Rajesh Hamal", customerEmail:"rajeshHamal@gmail.com", customerPhone:"0434343433", dateOpen: "2022-02-01" },
    { id: 5, description: "Studio Apartment End of Lease", assignee: "Milan", suburb: "Starthfield", priority: "Clear", completed: false, address:"2/29, Ada Street, Burwwod, NSW", customerName:"Rajesh Hamal", customerEmail:"rajeshHamal@gmail.com", customerPhone:"0434343433", dateOpen: "2022-02-01" },
    { id: 6, description: "4 bedroom End of Lease", assignee: "App", suburb: "Flemington", priority: "Clear", completed: false, address:"2/29, Ada Street, Burwwod, NSW", customerName:"Rajesh Hamal", customerEmail:"rajeshHamal@gmail.com", customerPhone:"0434343433", dateOpen: "2022-02-01" }




]

const BookingList = () => {
    const [modal, setModal] = useState(false)
    const [single, setSingle] = useState({})
    const [books, setBooks] = useState(data)

    return <Box mx={4} backgroundColor="white" py={4} rounded="md" mr={{ md: 20 }} h="700px"  >
        <Flex borderBottom="1px solid gray" borderColor="gray.200">
            <Text fontWeight="semibold" borderColor="gray.200" px={4} pb={3} fontSize="16px">Booking List</Text>

        </Flex>
        <Box mt={5}>
            <Flex justifyContent="space-between" px={5}>
                <Flex alignItems="center">
                    <Text backgroundColor="gray.300" color="gray.600" fontSize="14px" p={2} rounded="sm" fontWeight='light'>Description</Text>
                    <Text ml={2} fontSize="13px" fontWeight="semibold" color="gray.400">1 TASK</Text>
                </Flex>
                <Flex justifyContent="space-between" fontSize="13px" fontWeight="semibold" color="gray.400" alignItems="center" w="50%">
                    <Text cursor="pointer">ASSIGNEE</Text>
                    <Text cursor="pointer" >SUBURB</Text>
                    <Text cursor="pointer">DATE OPEN</Text>
                    {/* <AiOutlinePlusCircle fontSize="22px" /> */}
                </Flex>
            </Flex>
            {books.map((booking) => (
                <Box key={booking.id} onClick={() => (setModal(!modal), setSingle(booking))}>
                    <Flex cursor="pointer" justifyContent="space-between" px={5} my={3}>
                        <Flex alignItems="center" ml={3}>
                            <Text ml={2} fontSize="13px" >{booking.description}</Text>
                        </Flex>
                        <Flex justifyContent="space-between" fontSize="13px" fontWeight="semibold" alignItems="center" w="50%">
                            <Text cursor="pointer" pl={4}>{booking.assignee}</Text>
                            <Text cursor="pointer" >{booking.suburb}</Text>
                            <Text cursor="pointer">{booking.dateOpen}</Text>
                        </Flex>

                    </Flex>

                </Box>
            ))}                <SingleBookings modal={modal} setModal={setModal} single={single} setSingle={setSingle} />



        </Box>
    </Box>;
};

export default BookingList;

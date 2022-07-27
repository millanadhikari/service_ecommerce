import { LinkIcon, LockIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../components/Admin/app/hooks';
import { fetchAllBookings } from '../../components/Admin/BookingPage/bookingAction';
import BookingList from '../../components/Admin/BookingPage/BookingList';
// import withAuth from '../../components/Admin/privateRoute/withAuth';

const Bookings = () => {

    const dispatch = useAppDispatch()
    const sidebarOpen = useAppSelector((state) => state.user.sidebarOpen) || undefined;


    const handleRefresh = (e) => {
        e.preventDefault();
        dispatch(fetchAllBookings(1))

    }
    return <Box pl={{base:0, md:sidebarOpen ? '300px' : '100px'}}   backgroundColor="white" fontFamily='sans-serif' w="100%"  >
        <Flex backgroundColor="white"
            border="1px solid gray" borderTop="none" borderLeft="none"
            borderColor="gray.200" alignItems="center"
            justifyContent="space-between"
            
            fontSize="15px" pl="5"
            position="fixed" w="100%"
            pr={sidebarOpen ? 300 : 100}
        >
            <Heading mr={2} w="100%" fontSize="17px" fontWeight="semibold">Bookings</Heading>
            <Flex alignItems="center" cursor="pointer" >
                <Flex >
                    <Flex onClick={handleRefresh} pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><BiRefresh fontSize="18px" /> <Spacer ml="6px" /><Text>Refresh</Text> </Flex>

                    <Flex alignItems="center" borderLeft="1px solid gray" borderColor="gray.200" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} px="4"><AiOutlineFullscreen /></Flex>
                    <Flex display={{base:"none", md:"inline"}} pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><LockIcon /> <Spacer ml="6px" /><Text>Private</Text> </Flex>
                </Flex>
                <Button size="sm" fontFamily="sans-serif" fontSize="11px" py="5" px="4" colorScheme="purple">+ Add Booking</Button>
            </Flex>
        </Flex>


        <Box backgroundColor="gray.100" >
            <BookingList />
        </Box>
    </Box>;
};

export default Bookings

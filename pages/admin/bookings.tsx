import { LinkIcon, LockIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import BookingList from '../../components/Admin/BookingPage/BookingList';

const Bookings = () => {
    return <Box pl="300px" backgroundColor="white" fontFamily='sans-serif' w="100%"  >
        <Flex backgroundColor="white"
            border="1px solid gray" borderTop="none" borderLeft="none"
            borderColor="gray.200" alignItems="center"
            justifyContent="space-between"
            fontSize="15px" pl="5"
            position="fixed" w="100%"
            pr={300}
        >
            <Heading w="100%" fontSize="17px" fontWeight="semibold">Bookings</Heading>
            <Flex alignItems="center" cursor="pointer" >
                <Flex >
                    <Flex pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><BiRefresh fontSize="18px" /> <Spacer ml="6px" /><Text>Refresh</Text> </Flex>

                    <Flex alignItems="center" borderLeft="1px solid gray" borderColor="gray.200" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} px="4"><AiOutlineFullscreen /></Flex>
                    <Flex pl="4" pr="4" _hover={{ backgroundColor: "gray.100", color: "blue.600" }} borderLeft="1px solid gray" borderColor="gray.200" py="12px" alignItems="center" fontSize="13px" justifyContent="center" color="gray.500"><LockIcon /> <Spacer ml="6px" /><Text>Private</Text> </Flex>
                </Flex>
                <Button size="sm" fontFamily="sans-serif" fontSize="11px" py="5" px="4" colorScheme="purple">+ Add Booking</Button>
            </Flex>
        </Flex>


        <Box backgroundColor="gray.100" py={16}>
            <BookingList />
        </Box>
    </Box>;
};

export default Bookings;

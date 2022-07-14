import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdAccountCircle } from 'react-icons/md'

const Rewards = () => {
    return (
        <Box px={10} py={16} shadow="2xl">
            <Flex alignItems="center" gap="5" borderTop="1px solid gray" borderColor="gray.300" >
                <Box color="gray.400" fontSize="100px" my={2}>
                    <MdAccountCircle />
                </Box>
                <Box>
                    <Text>Level</Text>
                    <Heading fontSize="25px">Rewards</Heading>
                </Box>
            </Flex>
            <Box mt="4">
                <Heading fontSize="20px">Milan Adhikari</Heading>
                <Box mt={3}>
                    <Flex fontWeight="semibold">Username <Text fontWeight="light" ml={12}> yes_milan </Text></Flex>
                    <Flex mt={1} fontWeight="semibold">Card Number <Text fontWeight="light" ml={6}> 800062666271 </Text></Flex>

                </Box>
            </Box>
        </Box>
    )
}

export default Rewards
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const MembershipDetail = () => {
    return (
        <Box px={10} py={16} shadow="2xl" maxWidth="500px" mx="auto" my="10">
            <Heading borderTop="1px solid gray" borderColor="gray.300" pt={4} fontSize="18px">Member number /Barcode</Heading>
            <Flex flexDirection="column" textAlign="center" my={8} alignItems="center">
                <Image src="https://www.eventcinemas.com.au/Barcode/800062666271" w="60"/>
                <Text fontWeight="semibold">80062323232</Text>
            </Flex>
        </Box>)
}

export default MembershipDetail
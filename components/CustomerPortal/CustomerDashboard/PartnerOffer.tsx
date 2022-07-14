import { Box, Heading, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

const PartnerOffer = () => {
    return (
        <Box px={10} py={16} shadow="2xl" maxWidth="500px" mx="auto" my="10">
            <Heading borderTop="1px solid gray" borderColor="gray.300" pt={4} fontSize="18px">View Offers from partners</Heading>
            <Box textAlign="center" my={6}>
               <Spinner color='red.300'/>
            </Box>
        </Box>
        )
}

export default PartnerOffer
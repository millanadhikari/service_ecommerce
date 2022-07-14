import { Box } from '@chakra-ui/react'
import React from 'react'
import CustomerTabs from '../components/CustomerPortal/CustomerTabs'
import Navbar from '../components/Entry/Navbar'

function customerPortal() {
    return (
        <Box >
            <Box backgroundColor="blue.500">
                <Navbar />

            </Box>
            <CustomerTabs />
        </Box>
    )
}

export default customerPortal
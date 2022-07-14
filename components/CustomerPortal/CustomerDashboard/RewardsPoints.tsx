import { Box, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const RewardsPoints = () => {
    const router = useRouter()

    return (
        <Box px={10} py={16} shadow="2xl">
            <Heading borderTop="1px solid gray" borderColor="gray.300" pt={4} fontSize="24px">My Rewards Points</Heading>
            <Box textAlign="center" my={6}>
                <Text fontWeight="semibold">View expiring points</Text>
                <Heading fontSize="50px" my={4}>0</Heading>
                <Text cursor="pointer" fontWeight="bold" color="red" onClick={() => router.push('/bookonline')}>Book a Service to earn points</Text>
            </Box>
        </Box>
    )
}

export default RewardsPoints
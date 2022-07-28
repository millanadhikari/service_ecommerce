import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import VisitorChart from './VisitorChart'

export function Analytics() {
  return (
    <Box px={4} py={4}>
        <Text fontSize="15px" color="gray.500" letterSpacing="0.7px" fontWeight="semibold">Analytics</Text>
        <Flex bg="white" py={4} px={4} my={4}  rounded="md" flexDirection="column" h="180px" w="200px">
            <Flex flexDirection="column" gap={1}>
                <Text fontSize="sm" color="gray.500">Visitor this week</Text>
                <Text fontWeight="semibold">80</Text>
                <Flex color="red.500" alignItems="center" gap={2}><AddIcon fontSize="8px"/>10</Flex>
            </Flex >
            <Flex w="100%">
            <VisitorChart/>
            <Box w="50%"> </Box>
            </Flex>
            
        </Flex>
         </Box>
  )
  }
  


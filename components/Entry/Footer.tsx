import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
    backgroundColor="#080927"

    
    mx="auto"
    
    color="white"
    py={12}
    px={7}
    
   >
    <Flex gap={6} justifyContent="space-between">
        <Box>
        <Flex alignItems="center">
        <Flex
          alignItems="center"
          justifyContent="right"
          fontWeight="extrabold"
          backgroundColor="#f9bf16"
          rounded="100%"
          h={14}
          w={14}
          fontSize="16px"
        >
          WeDo
        </Flex>
        <Text fontWeight="bold" fontSize="18px" color="white">
          CLEANING
        </Text>
      </Flex>
            <Text mt={4} fontSize="13px" color="gray.500">Get the professionals</Text>
        </Box>
        <Flex flexDirection="column" gap={2} mt={4}>
            <Text fontWeight="semibold" fontSize="14px" color="gray.300">Services</Text>
            <Text fontSize="13px" color="gray.500"  >General Clean</Text>
            <Text fontSize="13px" color="gray.500" >End of Lease Clean</Text>
            <Text fontSize="13px" color="gray.500" >Carpet Clean</Text>
            <Text fontSize="13px" color="gray.500" >Mould Removals</Text>


        </Flex>
        <Flex flexDirection="column" gap={2} mt={4}>
            <Text fontWeight="semibold" fontSize="14px">QuickLinks</Text>
            <Text fontSize="13px" color="gray.500" >Pricing</Text>
            <Text fontSize="13px" color="gray.500" >Privacy Policy</Text>
            <Text fontSize="13px" color="gray.500" >Terms</Text>
            <Text fontSize="13px" color="gray.500" >Company</Text>


        </Flex>
    </Flex>
      </Box>
  )
}

export default Footer
import {Text, Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

function QuoteMini() {
  return (
    <Flex justifyContent="space-between">
        <Flex gap={4}>
            <Image src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
            h={8}
            w={8}/>
            <Box>
                <Text fontSize="17px"fontWeight="bold">John Citizen</Text>
                <Text fontSize="13px" color="gray" mt={1}>End of Lease</Text>
            </Box>
        </Flex>
        <Text fontSize="13px" color="gray">Unactioned</Text>
        </Flex>
  )
}

export default QuoteMini
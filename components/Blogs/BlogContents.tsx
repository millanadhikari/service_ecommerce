import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

function BlogContents({ item }) {
    return (
        <Box mx={{sm:"auto", md:"5"}} my={8}>
            <Image src={item.img} h={200} w={340} rounded="md" shadow="lg"/>
            <Text w="350px" my="2" fontSize="18px" fontWeight="bold" color="blue.700">{item.title}</Text>
            <Text  w="350px" fontSize="15px" color="blue.700"> {item.desc} </Text>
            <Button cursor="pointer" my={4} size="sm" color="blue.400" backgroundColor="white" border="1px solid gray" fontSize="12px" borderColor="blue.600">Read Article</Button>
        </Box>)
}

export default BlogContents
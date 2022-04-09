import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaApple } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

const SocialProvider = () => {
    return (
        <Box mx={2}>
            <Box  position="relative" rounded="lg"  fontSize={{base:"13px", md:"15px"}} cursor="pointer" py={3} textAlign="center" color="gray.100" backgroundColor="#1877F2">
                <Flex justifyContent="center" letterSpacing="1.5px">
                    Continue with
                    <Text fontWeight="semibold" ml={2}>Facebook</Text>
                </Flex>
                <Box position="absolute" top="3" left="3" fontSize="22px">
                    <BsFacebook />
                </Box>
            </Box>
            <Box  fontSize={{base:"13px", md:"15px"}} mt={8} shadow="md" position="relative" rounded="lg" fontSize="15px" cursor="pointer" py={3} textAlign="center" color="gray.700">
                <Flex justifyContent="center" letterSpacing="1.5px">
                    Sign in with
                    <Text fontWeight="semibold" ml={2}>Google</Text>
                </Flex>
                <Box position="absolute" top="3" left="3" fontSize="22px">
                    <FcGoogle />
                </Box>
            </Box>
            <Box  fontSize={{base:"13px", md:"15px"}} mt={8} border="1px solid black" shadow="md" position="relative" rounded="lg" fontSize="15px" cursor="pointer" py={3} textAlign="center" color="black">
                <Flex justifyContent="center" letterSpacing="1.5px">
                    Continue with
                    <Text fontWeight="extrabold" ml={2}>Apple</Text>
                </Flex>
                <Box position="absolute" top="3" left="3" fontSize="24px">
                    <FaApple />
                </Box>
            </Box>
        </Box>
    )
}

export default SocialProvider
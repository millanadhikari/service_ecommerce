import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const ForgotPassword = ({forgotPassword, setForgotPassword}) => {
  return (
    <Box mt={14} textAlign="center">
        <Heading fontSize="27px" color="gray.600">Forgot your password</Heading>
        <Text mt={6} textAlign="left" letterSpacing={0.7}>Enter your email here and we will send you a link to reset your password.</Text>
        <Input borderColor="gray.500" my={4} size="lg" _placeholder={{color:"gray.600"}} placeholder={'Email'}></Input>
        <Button my={4}py={6} w="100%" colorScheme="blue" fontSize="15px" letterSpacing="1px" >Send reset link</Button>
        <Text textAlign="right" color="blue.500" cursor="pointer" mb={10} mt={2} onClick={() => setForgotPassword(!forgotPassword)}>Back to Sign in</Text>
    </Box>
  )
}

export default ForgotPassword
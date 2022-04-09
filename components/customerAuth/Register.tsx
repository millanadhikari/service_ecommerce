import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import SocialProvider from './SocialProvider'

const Register = ({ setMethod }) => {
    const [emailSignUp, setEmailSignUp] = useState(false)
    return (
        <Box textAlign="center" mb={14}>
            <Text>Already have an account?</Text>
            <Text onClick={() => setMethod('sign-in')} my="4" mb={8} textDecoration="underline" cursor="pointer">Click here to log in</Text>
            <SocialProvider />
            <Box position="relative" borderTop="1px solid black" borderColor="gray.500" mt={12}>
                <Text textAlign="center" backgroundColor="white" w="50px" position="absolute" top="-3" left="44" fontSize="15px">or</Text>
            </Box>
            {emailSignUp ? <Box>
                <Box my={6} >
                    <Input placeholder="Full Name" _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input placeholder="Email" mt={6} _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input placeholder="Password" type="password" mt={6} _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input placeholder="Repeat Password" type="password" mt={6} _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input placeholder="Phone" type="phone" mt={6} _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />

                </Box>
                <Flex justifyContent="center" gap={3}>
                    <Checkbox />
                    <Text textAlign="left" fontSize="14px">I &apos; ve read and agree with Wedo Cleaning Service&apos;s Privacy Policy and Terms and Conditions.</Text>
                </Flex>
                <Button w="100%" colorScheme="blue" mt={10} py={6} fontSize="15px" letterSpacing="2px">
                    Sign Up
                </Button>
            </Box>: 
            <Button onClick={() => setEmailSignUp(!emailSignUp)} w="100%" colorScheme="blue" mt={10} py={6} fontSize="15px" letterSpacing="2px">
                Sign up with email
            </Button>
}
        </Box>
    )
}

export default Register
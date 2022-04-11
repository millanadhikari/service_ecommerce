import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Admin/app/hooks'
import SocialProvider from './SocialProvider'
import {newUserRegistration} from './customerRegAction'
import { loginFail, loginPending, loginSuccess } from '../Admin/auth/loginSlice'
import { userLogin } from '../Admin/api/userApi'
import { getUserProfile } from '../Admin/user/userAction'

const Register = ({ setMethod, isOpen, setIsOpen }) => {
    const [emailSignUp, setEmailSignUp] = useState(false)
    const [signUpObj, setSignUpObj] = useState({name:"", email:"", password:"", phone:""})
    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector((state) => state.login)
    const isCustomer = useAppSelector((state) => state.user.user?.isCustomer)

    const customerRegistration = useAppSelector((state) => state.customerRegistration.status);
    const newUser = {
        name:signUpObj.name,
        email:signUpObj.email,
        phone:signUpObj.phone,
        password:signUpObj.password
    }

    const handleEmailSignUp = () => {
        dispatch(newUserRegistration(newUser))
    }

    const loginHelper = async () => {
        dispatch(loginPending());
        const email = signUpObj.email
        const password = signUpObj.password
        try {
            const isAuth: any = await userLogin({ email, password });
            if (isAuth.status === "error") {
            //   setErroremail(true)
            //   setErrorpassword(isAuth.message)
            console.log(isAuth.status)
              return dispatch(loginFail(isAuth.message));
            }
              dispatch(loginSuccess());
              dispatch(getUserProfile());
            //   router.push("/admin/bookings")
            
            
          } catch (error) {
            dispatch(loginFail(error.message));
          }
        };

    
    useEffect(() => {
        customerRegistration === 'success' && loginHelper()
        isCustomer && setIsOpen(!isOpen)
    }, [customerRegistration, isCustomer])
    return (
        <Box textAlign="center" mb={14}>
            <Text>Already have an account?</Text>
            <Text onClick={() => setMethod('sign-in')} my="4" mb={8} textDecoration="underline" cursor="pointer">Click here to log in</Text>
            <SocialProvider />
            <Box position="relative" borderTop="1px solid black" borderColor="gray.500" mt={12}>
                <Text textAlign="center" backgroundColor="white" w="50px" position="absolute"  top="-3" left="170" fontSize="15px">or</Text>
            </Box>
            {emailSignUp ? <Box>
                <Box my={6} >
                    <Input value={signUpObj.name} onChange={(e) => setSignUpObj({...signUpObj, name:e.target.value})} placeholder="Full Name" _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input value={signUpObj.email} onChange={(e) => setSignUpObj({...signUpObj, email:e.target.value})} placeholder="Email" type="email" _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input  value={signUpObj.password} onChange={(e) => setSignUpObj({...signUpObj, password:e.target.value})} placeholder="Password" type="password" mt={6} _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input  value={signUpObj.password} onChange={(e) => setSignUpObj({...signUpObj, password:e.target.value})} placeholder="Repeat Password" type="password" mt={6} _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />
                    <Input  value={signUpObj.phone} onChange={(e) => setSignUpObj({...signUpObj, phone:e.target.value})} placeholder="Phone" type="phone" mt={6} _placeholder={{ color: "gray.900", fontSize: "15px", letterSpacing: "1px" }} size="lg" />

                </Box>
                <Flex justifyContent="center" gap={3}>
                    <Checkbox />
                    <Text textAlign="left" fontSize="14px">I &apos; ve read and agree with Wedo Cleaning Service&apos;s Privacy Policy and Terms and Conditions.</Text>
                </Flex>
                <Button onClick={handleEmailSignUp} w="100%" colorScheme="blue" mt={10} py={6} fontSize="15px" letterSpacing="2px">
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
import { Box, Button, Checkbox, CheckboxGroup, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import SocialProvider from './SocialProvider'
import {loginHelper} from './helpers/loginHelper'
import { useDispatch } from 'react-redux'
import { loginFail, loginPending, loginSuccess } from '../Admin/auth/loginSlice'
import { userLogin } from '../Admin/api/userApi'
import { getUserProfile } from '../Admin/user/userAction'
const SignIn = ({isopen, setIsOpen, forgotPassword, setForgotPassword}) => {
    const [withEmail, setWithEmail] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();


    const handleLogin = async () => {
        dispatch(loginPending());
       
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
              setIsOpen(!isopen)
            //   router.push("/admin/bookings")
            
            
          } catch (error) {
            dispatch(loginFail(error.message));
          }
        };

    return (
        <Box>
            <SocialProvider />
            <Box position="relative" borderTop="1px solid black" borderColor="gray.500" mt={12}>
                <Text textAlign="center" backgroundColor="white" w="50px" position="absolute" top="-3" left="170" fontSize="15px">or</Text>
            </Box>
        {withEmail &&  <Box>
         <Box my={6}>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" _placeholder={{ color: "gray.900", fontSize: "16px", letterSpacing: "1px" }} size="lg" />
                <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" mt={6} _placeholder={{ color: "gray.900", fontSize: "16px", letterSpacing: "1px" }} size="lg" />

            </Box>
            <Flex alignItems="center" gap={3}>
                <Checkbox/>
                <Text fontSize="14px">Keep me logged in</Text>
            </Flex>
            <Button onClick={handleLogin} w="100%" colorScheme="blue" mt={10} py={6} fontSize="15px" letterSpacing="2px">
                Sign in
            </Button>
         </Box>}
          {!withEmail &&   <Button onClick={() => setWithEmail(!withEmail)} w="100%" colorScheme="blue" mt={10} py={6} fontSize="15px" letterSpacing="2px">
                Sign in with email
            </Button>}
            <Text onClick={() => setForgotPassword(!forgotPassword)} color="blue.400" cursor="pointer" fontSize="14px" letterSpacing="0.7px" my={6}>Forgot password?</Text>
        </Box>
    )
}

export default SignIn
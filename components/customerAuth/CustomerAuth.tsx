import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import ForgotPassword from './ForgotPassword'
import Register from './Register'
import SignIn from './SignIn'

const CustomerAuth = ({ isopen, setIsOpen }) => {
  const [method, setMethod] = useState('sign-in')
  const [forgotPassword, setForgotPassword] = useState(false)
  return (
    <Modal isOpen={isopen} onClose={() => setIsOpen(!isopen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton _focus={{ outline: "none" }} />
        <ModalBody>
        {!forgotPassword ?  <Box>
         <Flex alignItems="center" my={10} justifyContent="space-between" mx={2}>
            <Box w="50%" cursor="pointer" onClick={()=> setMethod('sign-in')}>
              <Box pb={3} px={16} fontWeight={method === 'sign-in' && 'semibold'}>
                Sign In

              </Box>
              <Progress size="md" colorScheme="gray" value={method === 'sign-in' ? 100 : 0} height="3px" />
            </Box>
            <Box w="50%" onClick={()=> setMethod('register')} cursor="pointer">
              <Box pb={3} px={16} fontWeight={method === 'register' && 'semibold'}>
                Register

              </Box>
              <Progress size="md" colorScheme="gray"  value={method === 'register' ? 100 : 0} height="3px" />
            </Box>
          </Flex>
          <Box>
            {method === 'sign-in' ? <SignIn forgotPassword={forgotPassword} setForgotPassword={setForgotPassword} /> : <Register setMethod={setMethod} />}
          </Box>
         </Box> : <ForgotPassword forgotPassword={forgotPassword} setForgotPassword={setForgotPassword}/>}
        </ModalBody>

     {!forgotPassword &&  <Box textAlign="center" borderTop="1px solid gray"  mx={5} pt={5} my={7}>
        <Flex alignItems="center" justifyContent="center" textAlign="center" gap={2}>
        <Text>Have you booked via phone/chat?</Text>
       <Box color="blue.500">
       <BsFillInfoCircleFill />
         </Box>
        </Flex>
        <Text mt={1} textDecoration="underline" fontWeight="semibold" color="#3182ce" cursor="pointer">Claim your account</Text>
      </Box>}
      </ModalContent>
    </Modal>
  )
}

export default CustomerAuth
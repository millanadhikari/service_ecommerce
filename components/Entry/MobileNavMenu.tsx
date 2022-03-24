import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,  Stack,  Text } from '@chakra-ui/react'
import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'


const MobileNavMenu = ({openMenu, setOpenMenu}) => {
  return (
    <>
     <Drawer
        isOpen={true}
        placement='right'
        onClose={()=>setOpenMenu(false)}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display='flex' justifyContent='center'>
          <Flex alignItems="center">
          <Flex
          alignItems="center"
          justifyContent="right"
          fontWeight="extrabold"
          backgroundColor="#f9bf16"
          rounded="100%"
          h={16}
          w={16}
          fontSize="18px"
          color='white'
        >
          WeDo
        </Flex>
        <Text fontWeight="bold" fontSize="20px" color="Black">
          CLEANING
        </Text>
      </Flex>
          </DrawerHeader>

          <DrawerBody>
           <Flex justifyContent='space-between' alignItems='center' flexDirection='column'>
               <Flex my='5' alignItems='center' justifyContent='center'>
                   Home
               </Flex>
               <Flex  my='5' alignItems='center' justifyContent='center'>
                   Services
               </Flex>
               <Flex my='5' alignItems='center' justifyContent='center'>
                   Shop
               </Flex>
               <Flex my='5' alignItems='center' justifyContent='center'>
                   Blog
               </Flex>
               <Stack direction='column'  spacing={4}>
               <Button rightIcon={<FaSignInAlt/>} backgroundColor='red' colorScheme=' skyblue' variant='solid'>
                   Booking
               </Button>
               <Button rightIcon={<FaSignInAlt/>} colorScheme='skyblue' variant='outline'>
                  Log-In
               </Button>
               </Stack>


           </Flex>
          </DrawerBody>

         
       
        
        
        </DrawerContent>
      </Drawer>
    
    </>
  )
}

export default MobileNavMenu
import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Success = () => {
  const [ok, setOk] = useState(false)
  // const addBooking = async() => { 
  //   const result = await axios.post('https://localhost:3001/v1/booking',
  //   {
  //     "name" : "Priyanka thakur",
  //     "email": "asdfdf@gmail.com",
  //     "bookingDate" : "12/09/2021",
  //     "address":"lkjsdfklj",
  //     "phone":"'20320203",
  //     "totalPrice":"223",
  //     "products" : [],
  //     "stripeData" : [],
  //     "paidStatus" :"true",
  //     "jobStatus":"done"
  
     
  // })
  // return result

  // }

  


  return (
    <Box textAlign="center" py={10} px={6}>
    <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
    <Heading as="h2" size="xl" mt={6} mb={2}>
      Booking Successfully completed!
    </Heading>
    <Text color={'gray.500'}>
     Congratulations, booking has been confirmed for your order. We have sent you all the booking details along with your tax Invoice.
    </Text>
  </Box>  )
}

export default Success
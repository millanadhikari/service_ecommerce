import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';



const Success = () => {
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
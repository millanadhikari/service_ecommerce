import { Box, Text } from "@chakra-ui/react";
import Bill from "./Bill";

import CheckoutElement from "./CheckoutElement";


const Payment = () => {
  return (
    <Box rounded="md" py={{base:8, md:16}} px={{base:"6", md:"16" }} my={{md:10}} backgroundColor="gray.100">
      

      <Box>
         <CheckoutElement/>
          
      </Box>
    </Box>
  );
};

export default Payment;

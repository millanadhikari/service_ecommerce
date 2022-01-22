import { Box, Text } from "@chakra-ui/react";
import Bill from "./Bill";

const Payment = () => {
  return (
    <Box py={6} px={4} my={2} backgroundColor="gray.100" textAlign="left">
      <Text fontWeight="semibold" color="gray.500">Invoice for </Text>
      <Text mt={3} fontWeight="bold" color="gray.800">Alex Parkinson</Text>
      <Text fontSize="12px" fontWeight="semibold" color="gray.500">7/14 Burdett Street</Text>
      <Text fontSize="12px" fontWeight="semibold" color="gray.500">2144</Text>

      <Box>
          <Bill/>
      </Box>
    </Box>
  );
};

export default Payment;

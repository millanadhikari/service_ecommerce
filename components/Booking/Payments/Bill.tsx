import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Button,
} from "@chakra-ui/react";
import {PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';

const Bill = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.PreventDefault()
    const result = await stripe.confirmPayment({
        elements,
        // card:elements.getElement(CardElement)
    })
  }
  return (
    <Box w="100%" h="1000px">
      <Table variant="simple" size="sm" colorScheme="blackAlpha" mt={2}>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th textAlign="center">Qty</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontWeight="semibold" color="gray.600">
              2 Bed End of Lease
            </Td>
            <Td textAlign="center">1</Td>
            <Td isNumeric>$250</Td>
            <Td isNumeric>$250</Td>
          </Tr>
          <Tr>
            <Td fontWeight="semibold" color="gray.600">
              Balcony
            </Td>
            <Td textAlign="center">2</Td>
            <Td isNumeric>$50</Td>
            <Td isNumeric>$50</Td>
          </Tr>
          <Tr>
            <Td fontWeight="semibold" color="gray.600">
              yards
            </Td>
            <Td textAlign="center">3</Td>
            <Td isNumeric>$25</Td>
            <Td isNumeric>$25</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th isNumeric>+ GST 10% </Th>

            <Th fontSize="18px" isNumeric>
              $400
            </Th>
          </Tr>
        </Tfoot>
      </Table>
      
      <PaymentElement/>
      <Button >Submit</Button>
    </Box>
  );
};

export default Bill;

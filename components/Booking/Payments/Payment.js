import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../Admin/app/hooks";
import axios from "axios";
import { addStripe } from "../customerBookingSlice";
import {addCustomerBooking} from '../api/customerBookingApi'
import { AiFillInfoCircle } from "react-icons/ai";

const sadhguru = 
  {
      name : "Priyanka thakur",
      email: "asdfdf@gmail.com",
      bookingDate : "12/09/2021",
      address:"lkjsdfklj",
      phone:"'20320203",
      totalPrice:"223",
      products : [],
      stripeData : [],
      paidStatus :"true",
      jobStatus:"done"
  
     
  }

const Payment = ({ clientSecret }) => {

  const bedrooms = useAppSelector((state) => state.cBookings.cBookings.bedrooms.num);
  const toilets = useAppSelector((state) => state.cBookings.cBookings.toilets.num);


  const bedroomPrice = useAppSelector((state) => state.cBookings.price);


  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!stripe) {
      return;
    }

    // const clientSecret = new URLSearchParams(window.location.search).get(
    //   "payment_intent_client_secret"
    // );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
     
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Please enter card details where applicable in order to continue.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });


  }, [stripe, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error, data } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment/success",
        
      },
      
    })
    addCustomerBooking(sadhguru)



    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (

    <Box fontFamily="apple-system, sans-sarif" fontSize="16px" mb={20} >
      <form onSubmit={handleSubmit}>
        <Flex my={4} mb={6} backgroundColor="blue.50" textAlign="left" px={6} py={5} align="center" color="blue.700" gap="4" justifyContent="center">
          <AiFillInfoCircle fontSize="20px"/>
          <Text fontSize="16px">Your card will be charged upon booking confirmation.</Text>
        </Flex>
        {/* <Flex px="3" justifyContent="space-between">
          <Flex>
          {bedrooms < 1 ? 0 : bedrooms} x Bedrooms {bedrooms < 1 && <Text ml={2}>(Studio Apartment)</Text>} 
          </Flex>
          </Flex>
          <Flex px="3" justifyContent="space-between">
          <Flex>
          {toilets} x Toilets  
          </Flex>
          <Text>$ {bedroomPrice}</Text>
          </Flex>

        dfdfdf */}
        <PaymentElement />
        {/* {message && <Text color="rgb(105, 115, 134)" fontSize="16px" lineHeight="20px" pt="12px" textAlign="center">{message}</Text>} */}

        <Flex justifyContent="space-between" my={4}>
          <Heading>Total</Heading>
          <Box align="right">
            <Heading>$529.19</Heading>
            <Text fontSize="12px" color="gray.500"> Parking fee is not included in the price. </Text>
          </Box>

        </Flex>

        <Flex justifyContent="right">
        <Button  size="md" fontSize="17px" colorScheme="red" disabled={isLoading || !stripe || !elements} onClick={handleSubmit}>
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Complete booking"}
          </span>
        </Button>
        </Flex>
        {/* Show any error or success messages */}
      </form>
    </Box>
  );
};

export default Payment;

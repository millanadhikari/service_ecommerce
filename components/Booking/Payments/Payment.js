import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../Admin/app/hooks";
import axios from "axios";
import { addStripe } from "../customerBookingSlice";

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
        case 200:
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

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment/success",
      },
    });
    dispatch(addStripe(elements))


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

    <Box fontFamily="apple-system, sans-sarif" fontSize="16px" >
      <form onSubmit={handleSubmit}>
        <Flex px="3" justifyContent="space-between">
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

        dfdfdf
        <PaymentElement />

        <Button disabled={isLoading || !stripe || !elements} onClick={handleSubmit}>
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </Button>
        {/* Show any error or success messages */}
        {message && <Text color="rgb(105, 115, 134)" fontSize="16px" lineHeight="20px" pt="12px" textAlign="center">{message}</Text>}
      </form>
    </Box>
  );
};

export default Payment;

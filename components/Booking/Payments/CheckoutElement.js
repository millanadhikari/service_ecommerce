import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Bill from "./Bill";
import { Button } from "@chakra-ui/react";
import Payment from "./Payment.js";
import { useAppSelector } from "../../Admin/app/hooks";

const stripePromise = loadStripe(
  "pk_test_51JmDMZIcMdVxu54qV5J8TAaDjYY8yixVO0TczRDK6QClzTAq6uHCac1ptfpR4ZIN7VHtqiOZs1IkngKTdnAXnwf4003T1qKltO"
);

const CheckoutElement = () => {
  const [clientSecret, setClientSecret] = useState("");
  const price = useAppSelector((state) => state.cBookings.price);
  const addonPrice = useAppSelector((state) => (state.cBookings.cBookings.addonsPrice));

  const totalPrice = price + addonPrice

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://wedo-backend.herokuapp.com/v1/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({amount:totalPrice}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };


  const options = {
    clientSecret,
    appearance,
  };



  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Payment clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default CheckoutElement;

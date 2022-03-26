import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Bill from "./Bill";
import { Button } from "@chakra-ui/react";
import Payment from "./Payment.js";

const stripePromise = loadStripe(
  "pk_test_51JmDMZIcMdVxu54qV5J8TAaDjYY8yixVO0TczRDK6QClzTAq6uHCac1ptfpR4ZIN7VHtqiOZs1IkngKTdnAXnwf4003T1qKltO"
);

const CheckoutElement = () => {
  const [clientSecret, setClientSecret] = useState("");


  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://wedo-backend.herokuapp.com/v1/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
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

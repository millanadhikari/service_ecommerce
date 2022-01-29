import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Bill from "./Bill";
import { Button } from "@chakra-ui/react";

const stripePromise = loadStripe(
  "pk_live_51JmDMZIcMdVxu54q9FHJmN0AKuoJKpnEtsK0KzLuODJGLvoDaRULObFcmQ3yGe7YOrWun6I3LOAEW8IX8ux42y8v00bxpRAX0L"
);

const CheckoutElement = () => {
    const [stripeToken, setStripeToken] = useState(null)

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: stripeToken ,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
          const res = await fetch("http://localhost:3001/v1/payment",
          
          
          {
              clientSecret:strikeToken,
              amount:2000,
          });


          
         
      } catch(err) {
          console.log(err)
      }
  }
  stripeToken && makeRequest()

}, [])
  }, []) 

  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <Bill />
     
      </Elements>
    </div>
  );
};

export default CheckoutElement;

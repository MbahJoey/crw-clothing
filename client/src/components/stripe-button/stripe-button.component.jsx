import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../asssets/crown.svg";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceToStripe = price * 100;
  const publishableKey =
    "pk_test_51ITq2LJXHLNF4rdXCV3cgeMCxcSFfDpbipWtGqN8M1vnj6VmhFJbceB4iPYeF9jhIwVeu6GyEPSe3wQ1aKesGKx600EeOeyTCR";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceToStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful!");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card!"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceToStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

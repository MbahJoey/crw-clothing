import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceToStripe = price * 100;
  const publishableKey =
    "pk_test_51ITq2LJXHLNF4rdXCV3cgeMCxcSFfDpbipWtGqN8M1vnj6VmhFJbceB4iPYeF9jhIwVeu6GyEPSe3wQ1aKesGKx600EeOeyTCR";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceToStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

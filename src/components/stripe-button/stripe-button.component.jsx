import React from "react";
import StripeCheckout from "react-stripe-checkout";
import crownIcon from "../../assets/favicon.ico";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KD5ENJkgNjjTNcXIdz4yphEjWCWcqxhRoTowvG4uZGInvnKBwYLhjA62UOCieQL4q04uU8regBjtwBexZ3io3E500LUnTzrb7";
  const onToken = () => {
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={crownIcon}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

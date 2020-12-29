import React from 'react';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './shared/CheckoutForm';

const stripePromise = loadStripe('pk_live_wwyQ5gCk3fDHe2TOtBs831hh00I5A04kKP');

const Checkout = ({ artID, price }) => (
  <div className="container mx-auto h-full mt-12 lg:mt-0">
    <Elements stripe={stripePromise}>
      <CheckoutForm artID={artID} price={price} />
    </Elements>
  </div>
);

Checkout.propTypes = {
  artID: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Checkout;

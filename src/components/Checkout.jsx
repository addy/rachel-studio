import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './shared/CheckoutForm';

const Checkout = ({ artID, price }) => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.defer = true;
    script.addEventListener('load', () => {
      setStripe(window.Stripe('pk_live_wwyQ5gCk3fDHe2TOtBs831hh00I5A04kKP'));
    });

    document.head.appendChild(script);
    return () => {
      setStripe(null);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <StripeProvider stripe={stripe}>
      <div className="container mx-auto h-full mt-12 lg:mt-0">
        <Elements>
          <CheckoutForm stripeLoaded={Boolean(stripe)} artID={artID} price={price} />
        </Elements>
      </div>
    </StripeProvider>
  );
};

Checkout.propTypes = {
  artID: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Checkout;

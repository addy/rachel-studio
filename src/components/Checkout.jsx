import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './shared/CheckoutForm';

const Checkout = ({ artID }) => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.defer = true;
    script.addEventListener('load', () => {
      setStripe(window.Stripe('pk_test_r7NDcsBCH8rsKv9bZzGpTEgx00WOJuql7Y'));
    });

    document.head.appendChild(script);
    return () => {
      setStripe(null);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <StripeProvider stripe={stripe}>
      <div className="container mx-auto h-full">
        <Elements>
          <CheckoutForm stripeLoaded={Boolean(stripe)} artID={artID} />
        </Elements>
      </div>
    </StripeProvider>
  );
};

Checkout.propTypes = {
  artID: PropTypes.string.isRequired
};

export default Checkout;

import React, { useState, useEffect } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './shared/CheckoutForm';

const Checkout = () => {
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
          <CheckoutForm stripeLoaded={Boolean(stripe)} />
        </Elements>
      </div>
    </StripeProvider>
  );
};

export default Checkout;

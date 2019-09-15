import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './shared/CheckoutForm';

const Checkout = () => (
  <StripeProvider apiKey="pk_test_r7NDcsBCH8rsKv9bZzGpTEgx00WOJuql7Y">
    <div className="container mx-auto h-full">
      <Elements>
        <CheckoutForm />
      </Elements>
    </div>
  </StripeProvider>
);

export default Checkout;

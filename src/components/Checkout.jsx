import React, { memo } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './shared/CheckoutForm';

const Checkout = memo(
  () => (
    <StripeProvider apiKey="pk_test_r7NDcsBCH8rsKv9bZzGpTEgx00WOJuql7Y">
      <div className="container mx-auto h-full">
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  ),
  () => true
);

export default Checkout;

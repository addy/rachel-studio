import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Form from './Form';
import { useStore } from '../hooks/State';
import useLocalForage, { actionTypes, statusTypes } from '../hooks/useLocalForage';
import { extract } from './utils';

const CheckoutForm = ({ artID, price }) => {
  const [{ alert, alertTitle, alertMessage }, dispatch] = useStore();
  const [{ status }, makeRequest] = useLocalForage(actionTypes.SET, 'alert');
  const [focused, setFocus] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!status && alert) makeRequest({ alert, alertTitle, alertMessage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, alert, makeRequest]);

  const onSubmit = async (values) => {
    const { email } = extract(values);

    // Find a reference to the CardElement on the page, this API is wacky.
    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      dispatch({ type: 'paymentFailure' });
      return;
    }

    const res = await fetch('/api/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token.id, email, artID, price }),
    });

    if (res.ok) dispatch({ type: 'paymentSuccess' });
    else dispatch({ type: 'paymentFailure' });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-10 lg:px-0">
      <Form
        fields={[
          { name: 'full name', type: 'input' },
          { name: 'email', type: 'email' },
        ]}
        submit={onSubmit}
        redirectPath="/portfolio"
        fetching={status && status === statusTypes.FETCHING}
      >
        <div
          className={`${
            focused ? 'focused ' : ''
          }block w-full bg-gray-200 text-gray-700 text-base placeholder-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight shadow-md focus:border-blue-400 focus:outline-none focus:bg-white`}
        >
          <CardElement
            style={{
              base: {
                color: '#32325d',
                fontFamily: 'Archivo',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
      </Form>
    </div>
  );
};

CheckoutForm.propTypes = {
  artID: PropTypes.string.isRequired,
  price: PropTypes.number,
};

CheckoutForm.defaultProps = {
  price: null,
};

export default CheckoutForm;

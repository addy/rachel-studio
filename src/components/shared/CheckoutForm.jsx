import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Form from './Form';
import { useStateValue } from '../hooks/State';

const CheckoutForm = ({ stripe }) => {
  const [, dispatch] = useStateValue();
  const [focused, setFocus] = useState(false);

  const onSubmit = async values => {
    const { fullName, email } = values;
    const { token } = await stripe.createToken({ name: fullName.value });
    const res = await fetch('/api/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token.id, email: email.value })
    });

    if (res.ok) dispatch({ type: 'show' });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-10 lg:px-0">
      <Form
        fields={[{ name: 'full name', type: 'input' }, { name: 'email', type: 'email' }]}
        submit={onSubmit}
        redirectPath="/portfolio"
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
                  color: '#aab7c4'
                }
              }
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
  stripe: PropTypes.object.isRequired
};

export default injectStripe(CheckoutForm);

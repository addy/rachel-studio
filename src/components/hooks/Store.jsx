import React from 'react';
import PropTypes from 'prop-types';
import { StateProvider } from './State';

const initialState = {
  alert: undefined,
  submitting: false,
  alertTitle: undefined,
  alertMessage: undefined
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'paymentSuccess':
      return {
        ...state,
        alert: 'success',
        alertTitle: 'Payment Received!',
        alertMessage:
          'Thank you for your purchase. You will receive a receipt in your email shortly.'
      };
    case 'paymentFailure':
      return {
        ...state,
        alert: 'failure',
        alertTitle: 'Payment Failed!',
        alertMessage: 'There was a problem with your order. Please try again later.'
      };
    case 'contactSuccess':
      return {
        ...state,
        alert: 'success',
        alertTitle: 'Success!',
        alertMessage: 'We have received your message and will reply shortly.'
      };
    case 'contactFailure':
      return {
        ...state,
        alert: 'failure',
        alertTitle: 'Failure!',
        alertMessage: 'There was a problem with sending your message. Please try again later.'
      };
    case 'hideAlert':
      return { ...state, alert: undefined, alertTitle: undefined, alertMessage: undefined };
    case 'startSubmit':
      return { ...state, submitting: true };
    case 'stopSubmit':
      return { ...state, submitting: false };
    default:
      throw new Error('Invalid action performed.');
  }
};

const Store = ({ children }) => (
  <StateProvider initialState={initialState} reducer={reducer}>
    {children}
  </StateProvider>
);

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

Store.defaultProps = {
  children: undefined
};

export default Store;

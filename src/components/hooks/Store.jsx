import React from 'react';
import PropTypes from 'prop-types';
import { StateProvider } from './State';

const initialState = { alerting: false, submitting: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'show':
      return { ...state, alerting: true };
    case 'hide':
      return { ...state, alerting: false };
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

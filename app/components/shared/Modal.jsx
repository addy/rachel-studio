import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, handleSecondary, handleClose, primaryText, secondaryText }) => (
  <div className="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
    <div className="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
      <div className="container mx-auto">{children}</div>
      <div className="inline-flex justify-center">
        <button
          type="button"
          className="bg-grey-lighter flex-1 md:flex-none border-b-2 border-red ml-2 hover:bg-red-lightest text-grey-darkest font-bold py-4 px-6 rounded"
          onClick={handleSecondary}
        >
          {secondaryText}
        </button>
        <button
          type="submit"
          className="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded"
          form="loginForm"
        >
          {primaryText}
        </button>
      </div>
      <button type="button" className="absolute pin-t pin-r pt-4 px-4" onClick={handleClose}>
        <svg
          className="h-12 w-12 text-grey hover:text-grey-darkest"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  handleSecondary: PropTypes.func,
  handleClose: PropTypes.func,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string
};

Modal.defaultProps = {
  children: undefined,
  handleSecondary: undefined,
  handleClose: undefined,
  primaryText: 'Submit',
  secondaryText: 'Cancel'
};

export default Modal;

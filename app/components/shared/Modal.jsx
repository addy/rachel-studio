import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAnimation from '../hooks/animationHooks';

const Modal = ({
  children,
  handleSecondary,
  handleClose,
  title,
  primaryText,
  secondaryText,
  showing
}) => {
  const [closed, setClosed] = useState(false);
  const open = useAnimation('linear', 200, 0, !showing);
  const close = useAnimation('linear', 200, 0, !closed);

  const onClose = e => {
    e.preventDefault();
    setClosed(true);
    handleClose(e);
  };

  return !showing ? null : (
    <div
      className={`fixed w-full h-full top-0 left-0 flex items-center justify-center${
        showing ? '' : ' pointer-events-none'
      }`}
      style={{ opacity: open }}
    >
      <div className="absolute w-full h-full bg-gray-900 opacity-50" />
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <button
          className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          type="button"
          onClick={onClose}
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
          <span className="text-sm">Close</span>
        </button>
        <div className="py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{title}</p>
            <button className="cursor-pointer z-50" type="button" onClick={onClose}>
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
          {children}
          <div className="flex justify-end pt-2">
            <button
              className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
              type="button"
              onClick={handleSecondary}
            >
              {secondaryText}
            </button>
            <button
              className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
              type="submit"
              form="loginForm"
            >
              {primaryText}
            </button>
          </div>
        </div>
      </div>
    </div>
    // tailwindcss: modal-enter modal-enter-active modal-exit modal-exit-active pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  handleSecondary: PropTypes.func,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  showing: PropTypes.bool
};

Modal.defaultProps = {
  children: undefined,
  handleSecondary: undefined,
  handleClose: undefined,
  title: undefined,
  primaryText: 'Submit',
  secondaryText: 'Cancel',
  showing: false
};

export default Modal;

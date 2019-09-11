import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const loginModal = ({ inputs, handleInputChange, handleSubmit, handleFormCancel, showing }) => {
  const { username, password } = inputs;

  return (
    <Modal
      handleSecondary={handleFormCancel}
      handleClose={handleFormCancel}
      title="Login"
      primaryText="Login"
      showing={showing}
    >
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-username"
              id="username"
            >
              Username
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-username"
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
              id="password"
            >
              Password
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
      </form>
    </Modal>
  );
};

loginModal.propTypes = {
  inputs: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleFormCancel: PropTypes.func,
  showing: PropTypes.bool
};

loginModal.defaultProps = {
  inputs: {},
  handleInputChange: undefined,
  handleSubmit: undefined,
  handleFormCancel: undefined,
  showing: false
};

const LoginModal = React.memo(loginModal);
export default LoginModal;

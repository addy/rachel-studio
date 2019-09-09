import React, { Fragment, useState } from 'react';
import LoginModal from '../shared/LoginModal';
import formHooks from './formHooks';

const loginHooks = initial => {
  const [values, setState] = useState(initial);

  const handleLoginModalToggle = e => {
    e.preventDefault();
    let { loginModal } = values;
    loginModal = !loginModal;

    if (loginModal) {
      setState(() => ({ ...values, loginModal }));
    } else {
      setState(() => ({ ...values, loginModal, username: undefined, password: undefined }));
    }
  };

  const handleLogin = () => {
    // eslint-disable-next-line no-use-before-define
    const { username, password } = inputs;

    if (!username || !password) return;

    fetch('/api/login', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password
      })
    })
      .then(res => {
        if (res.status !== 200) throw new Error('Failed to login');
        return res.body.json();
      })
      .then(body => {
        const { token } = body;
        setState({ ...values, token, canLogin: false });
      })
      .catch(err => {
        // Probably want to do a generic alert at this point.
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  };

  const { inputs, handleInputChange, handleSubmit } = formHooks(
    { username: '', password: '' },
    handleLogin
  );

  return {
    values,
    handleLoginModalToggle,
    component: (
      <LoginModal
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleFormCancel={handleLoginModalToggle}
        showing={values.loginModal}
      />
    )
  };
};

export default loginHooks;

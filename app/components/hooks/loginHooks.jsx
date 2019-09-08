import React, { Fragment, useState } from 'react';
import LoginModal from '../shared/LoginModal';
import formHooks from './formHooks';

const loginHooks = initial => {
  const [values, setState] = useState(initial);

  const handleLoginModalToggle = e => {
    e.preventDefault();
    const { loginModal } = values;
    setState(() => ({ ...values, loginModal: !loginModal }));
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
        if (res.status !== 200) {
          // Probably want to do a generic alert at this point.
          // eslint-disable-next-line no-console
          console.log('Failed to login', res);
          return;
        }

        res.json();
      })
      .then(data => {
        const { token } = data;
        setState({ ...values, token, canLogin: false });
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
      <Fragment>
        {values.loginModal && (
          <LoginModal
            inputs={inputs}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleFormCancel={handleLoginModalToggle}
          />
        )}
        {values.token && <div className="container mx-auto">{values.token}</div>}
      </Fragment>
    )
  };
};

export default loginHooks;

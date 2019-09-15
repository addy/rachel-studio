import React, { useEffect } from 'react';
import Form from './shared/Form';
import { useStore } from './hooks/State';
import { flatten } from './shared/utils';
import useLocalForage, { actionTypes, statusTypes } from './hooks/useLocalForage';

const Contact = () => {
  const [{ alert, alertTitle, alertMessage }, dispatch] = useStore();
  const [{ status }, makeRequest] = useLocalForage(actionTypes.SET, 'alert');

  useEffect(() => {
    if (!status && alert) makeRequest({ alert, alertTitle, alertMessage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, alert, makeRequest]);

  const onSubmit = async values => {
    const { firstName, lastName, email, message } = flatten(Object.values(values));

    const res = await fetch('/api/contact', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message
      })
    });

    if (res.ok) dispatch({ type: 'contactSuccess' });
    else dispatch({ type: 'contactFailure' });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-10 lg:px-0">
      <Form
        fields={[
          [
            { name: 'first name', type: 'input', placeholder: 'Jane' },
            { name: 'last name', type: 'input', placeholder: 'Doe' }
          ],
          { name: 'email', type: 'email', placeholder: 'jane.doe@email.com' },
          { name: 'message', type: 'text', placeholder: '...' }
        ]}
        submit={onSubmit}
        fetching={status && status === statusTypes.FETCHING}
      />
    </div>
  );
};

export default Contact;

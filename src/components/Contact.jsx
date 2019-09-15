import React, { memo } from 'react';
import Form from './shared/Form';
import { useStateValue } from './hooks/State';
import { flatten } from './shared/utils';

const Contact = memo(
  () => {
    const [, dispatch] = useStateValue();

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
        />
      </div>
    );
  },
  () => true
);

export default Contact;

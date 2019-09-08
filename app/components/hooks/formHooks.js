import { useState } from 'react';

const formHooks = (initial, callback) => {
  const [inputs, setInputs] = useState(initial);

  const handleSubmit = e => {
    e.preventDefault();
    if (callback) callback();
  };

  const handleInputChange = e => {
    e.persist();
    const { target } = e;
    const { name, value } = target;
    setInputs(() => ({ ...inputs, [name]: value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default formHooks;

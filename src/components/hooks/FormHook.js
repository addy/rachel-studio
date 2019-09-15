import { useState } from 'react';

const FormHook = initial => {
  const [inputs, setInputs] = useState(initial);

  const handleInputChange = e => {
    e.persist();
    const { target } = e;
    const { name, value } = target;
    setInputs(() => ({ ...inputs, [name]: value }));
  };

  return {
    handleInputChange,
    inputs
  };
};

export default FormHook;

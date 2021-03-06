import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Input from './Input';
import { useStore } from '../hooks/State';
import { flatten } from './utils';

const Form = ({ fields, children, submit, redirectPath, fetching }) => {
  const [inputs, setInputs] = useState({});
  const [state, dispatch] = useStore();

  useEffect(() => {
    setInputs(flatten(fields));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verify = (input) => {
    switch (input.type) {
      case 'email':
        return Boolean(input.value) && /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.value);
      default:
        return Boolean(input.value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'startSubmit' });
    const values = Object.values(inputs);
    if (!values.every((value) => verify(value))) {
      setInputs(() => values.map((value) => ({ ...value, valid: verify(value) })));
      dispatch({ type: 'stopSubmit' });
      return;
    }

    await submit(inputs);
    setInputs(() => values.map((value) => ({ ...value, value: '', valid: true })));
    dispatch({ type: 'stopSubmit' });
  };

  const onChange = (e) => {
    e.preventDefault();
    e.persist();
    const { target } = e;
    const { name, value } = target;
    setInputs(() => ({ ...inputs, [name]: { ...inputs[name], value } }));
  };

  const onFocus = (e) => {
    e.preventDefault();
    e.persist();
    e.stopPropagation();
    const { target } = e;
    const { name, previousSibling } = target;

    // From what I observed, previousSibling will be set if a browser extension grabs focus.
    if (previousSibling) return;

    setInputs(() => ({ ...inputs, [name]: { ...inputs[name], valid: true } }));
  };

  return state.alert && !state.submitting && !fetching && redirectPath ? (
    <Redirect to={redirectPath} />
  ) : (
    <div className="flex justify-center w-full">
      <form className="w-full lg:w-2/3">
        <div className="flex flex-wrap -mx-3 mb-2">
          {Object.entries(inputs).map(([name, input]) => (
            <div
              key={name}
              className={`px-2 ${input.depth > 1 ? `lg:w-1/${input.depth} w-full` : 'w-full'}`}
            >
              <Input
                id={`grid-${name}`}
                type={input.type}
                name={name}
                placeHolderName={input.name}
                validPlaceholder={input.placeholder}
                value={input.value}
                valid={input.valid}
                onChange={onChange}
                onFocus={onFocus}
              />
            </div>
          ))}
          {Array.isArray(children) ? (
            children.map((child) => <div className="w-full px-2">{child}</div>)
          ) : (
            <div className="w-full px-2">{children}</div>
          )}
          <div className="px-2">
            {state.submitting ? (
              <button
                type="button"
                className="bg-indigo-200 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-not-allowed"
              >
                Submitting...
              </button>
            ) : (
              <button
                type="button"
                className="bg-indigo-400 hover:bg-indigo-300 text-gray-200 hover:text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer"
                onClick={onSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
    // tailwindcss: w-full lg:w-1/2 lg:w-1/3 lg:w-1/4 lg:w-1/5 lg:w-1/6 px-2
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  submit: PropTypes.func.isRequired,
  redirectPath: PropTypes.string,
  fetching: PropTypes.bool,
};

Form.defaultProps = {
  fields: [],
  children: undefined,
  redirectPath: undefined,
  fetching: false,
};

export default Form;

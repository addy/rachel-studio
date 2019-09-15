import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from './utils';

const Input = ({
  className,
  id,
  type,
  name,
  value,
  valid,
  placeHolderName,
  validPlaceholder,
  invalidPlaceholder,
  onChange,
  onFocus,
  onBlur
}) => {
  const [placeholder, setPlaceholder] = useState(undefined);

  useEffect(() => {
    setPlaceholder(
      valid
        ? validPlaceholder || capitalize(placeHolderName)
        : invalidPlaceholder || `Please enter a valid ${placeHolderName}.`
    );
  }, [valid, placeHolderName, validPlaceholder, invalidPlaceholder]);

  return type === 'text' ? (
    <textarea
      className={`block w-full bg-gray-200 text-gray-700 text-base placeholder-gray-600 font-archivo border rounded py-3 px-4 mb-3 leading-tight shadow-md focus:outline-none focus:bg-white ${
        valid ? 'border-gray-200' : 'border-red-500'
      }${className ? ` ${className}` : ''}`}
      id={id}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  ) : (
    <input
      className={`block w-full bg-gray-200 text-gray-700 text-base placeholder-gray-600 font-archivo border rounded py-3 px-4 mb-3 leading-tight shadow-md focus:outline-none focus:bg-white ${
        valid ? 'border-gray-200' : 'border-red-500'
      }${className ? ` ${className}` : ''}`}
      id={id}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  valid: PropTypes.bool,
  placeHolderName: PropTypes.string.isRequired,
  validPlaceholder: PropTypes.string,
  invalidPlaceholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

Input.defaultProps = {
  className: undefined,
  value: '',
  valid: true,
  validPlaceholder: undefined,
  invalidPlaceholder: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined
};

export default Input;

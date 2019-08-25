import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ text }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    {`#${text}`}
  </span>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired
};

export default Tag;

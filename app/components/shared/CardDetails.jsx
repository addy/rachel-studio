import React from 'react';
import PropTypes from 'prop-types';

const CardDetails = ({ src, alt, title, text }) => (
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 text-center px-4 py-2 m-2s mx-auto">
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full" src={src} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  </div>
);

CardDetails.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CardDetails;

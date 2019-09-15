import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardDetails = ({ src, alt, title, text }) => (
  <div className="w-full lg:w-1/3 xl:w-1/3 text-center px-4 py-2 m-2s mx-auto">
    <div className="w-full rounded overflow-hidden shadow-lg">
      <Link to={`/portfolio/${title.toLowerCase()}`}>
        <label className="cursor-pointer w-full" title={title} htmlFor={alt}>
          <input type="checkbox" className="hidden" id={alt} />
          <img className="lazy w-full" src={src} alt={alt} />
        </label>
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-frank italic text-indigo-400">{title}</div>
        {text && <p className="text-gray-700 text-base">{text}</p>}
      </div>
    </div>
  </div>
);

CardDetails.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

CardDetails.defaultProps = {
  text: undefined
};

export default CardDetails;

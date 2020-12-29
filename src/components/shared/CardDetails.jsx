import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardDetails = ({ piece }) => {
  const { _id, title, year, medium, size, src } = piece;
  return (
    <div className="w-full lg:w-1/3 xl:w-1/3 text-center px-4 py-2 m-2s mx-auto">
      <div className="w-full rounded overflow-hidden shadow-lg">
        <Link to={`/portfolio/${_id}`}>
          <label className="w-full" title={title} htmlFor={title}>
            <input type="checkbox" className="hidden" id={title} />
            <img className="lazy w-full cursor-pointer" src={src} alt={title} />
          </label>
        </Link>
        <div className="px-6 py-4 cursor-default">
          <div className="font-bold text-xl mb-2 font-frank italic text-indigo-400">{title}</div>
          <p className="italic text-gray-500 text-base">
            {`${size ? `${size} / ` : ''}${medium} / ${year}`}
          </p>
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  piece: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    medium: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.number,
    sold: PropTypes.bool,
    src: PropTypes.string,
  }).isRequired,
};

export default CardDetails;

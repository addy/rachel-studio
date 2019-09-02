import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

const CardDetails = ({ src, alt, title, text, tags }) => (
  <div className="w-1/3 text-center px-4 py-2 m-2s mx-auto">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={src} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      {tags.length > 0 && (
        <div className="px-6 py-4">
          {tags.map(tag => (
            <Tag key={`${tag}`} text={tag} />
          ))}
        </div>
      )}
    </div>
  </div>
);

CardDetails.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

CardDetails.defaultProps = {
  tags: []
};

export default CardDetails;

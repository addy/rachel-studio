import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Details = ({ match }) => {
  const {
    params: { id }
  } = match;
  return <div>{match.params.id}</div>;
};

Details.propTypes = {
  match: PropTypes.object.isRequired
};

export default Details;

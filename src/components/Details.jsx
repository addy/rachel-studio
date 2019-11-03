import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkout from './Checkout';

const Details = ({ match }) => {
  const [details, setDetails] = useState();
  const {
    params: { id }
  } = match;

  useEffect(() => {
    const pollArt = async () => {
      try {
        let art = await fetch(`/api/art/${id}`, {
          method: 'GET',
          mode: 'same-origin',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' }
        });

        art = await art.json();

        setDetails(art);
      } catch (err) {
        setDetails(null);
      }
    };

    pollArt();
  }, [id]);

  return details ? (
    <Fragment>
      <ul>
        <li>{details.title}</li>
        <li>{details.price}</li>
        <li>{details.sold ? 'SOLD' : 'NOTSOLD'}</li>
        <li>{details.size}</li>
        <li>{details.src}</li>
        <li>{details.year}</li>
      </ul>
      <Checkout artID={details._id} />
    </Fragment>
  ) : (
    <span className="loading">
      {details === undefined ? 'Loading...' : 'Could not find artwork'}
    </span>
  );
};

Details.propTypes = {
  match: PropTypes.object.isRequired
};

export default Details;

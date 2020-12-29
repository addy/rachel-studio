/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkout from './Checkout';

const Details = ({ match }) => {
  const [details, setDetails] = useState();
  const [price, setPrice] = useState();
  const {
    params: { id },
  } = match;

  useEffect(() => {
    const pollArt = async () => {
      try {
        let art = await fetch(`/api/art/${id}`, {
          method: 'GET',
          mode: 'same-origin',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
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
    <>
      <div className="flex items-center justify-center mt-12 p-6">
        <div className="flex flex-col lg:flex-row items-center justify-center container">
          <div className="bg-white p-6 shadow-xl w-full h-full lg:w-3/4 lg:h-3/4 xl:w-1/2 xl:h-1/2">
            <img className="lazy w-full" src={details.src} alt={details.title} />
          </div>
          {price ? (
            <Checkout artID={details._id} price={price} />
          ) : (
            <div className="flex flex-col items-center justify-center m-6 w-1/2 h-1/2">
              <div className="font-bold text-4xl mb-2 font-frank italic text-indigo-400">
                {details.title}
              </div>
              <p className="italic text-xl text-gray-500 text-base">
                {`${details.size ? `${details.size} / ` : ''}${details.medium} / ${details.year}`}
              </p>
              {details.price && (
                <>
                  {details.sold ? (
                    <div className="flex flex-row">
                      <div className="italic text-lg text-gray-500 text-base mr-2">SOLD</div>
                      <div className="italic text-lg text-gray-500 text-base line-through">{`$${details.price}`}</div>
                    </div>
                  ) : (
                    <p className="italic text-lg text-gray-500 text-base">{`$${details.price}`}</p>
                  )}
                  {details.print && (
                    <p className="italic text-lg text-gray-500 text-base">{`Print price - $${details.printPrice}`}</p>
                  )}
                  <div className="flex flex-row">
                    {details.print && (
                      <button
                        type="button"
                        className="bg-indigo-400 hover:bg-indigo-300 text-gray-200 hover:text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer m-4"
                        onClick={() => setPrice(details.printPrice)}
                      >
                        Purchase Print
                      </button>
                    )}
                    {!details.sold && (
                      <button
                        type="button"
                        className="bg-indigo-400 hover:bg-indigo-300 text-gray-200 hover:text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer m-4"
                        onClick={() => setPrice(details.price)}
                      >
                        Purchase Original
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <span className="loading">
      {details === undefined ? 'Loading...' : 'Could not find artwork'}
    </span>
  );
};

Details.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Details;

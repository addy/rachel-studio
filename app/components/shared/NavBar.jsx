import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ currentPage, noMargin }) => (
  <div className={`container mx-auto${noMargin ? '' : ' mb-10'}`}>
    <div className="flex flex-row">
      <div className="w-1/2 flex justify-start">
        <div className="px-4 py-2 m-2">
          <Link to="/">
            <ion-icon name="heart" />
          </Link>
        </div>
      </div>
      <ul className="w-1/2 flex justify-end pr-4">
        <li className="py-2 m-2">
          <div
            className={currentPage === 0 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}
          >
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </li>
        <li className="py-2 m-2">
          <div
            className={currentPage === 1 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}
          >
            <Link to="/about">About</Link>
          </div>
        </li>
        <li className="py-2 m-2">
          <div
            className={currentPage === 2 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}
          >
            <Link to="/contact">Contact</Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

NavBar.propTypes = {
  currentPage: PropTypes.number,
  noMargin: PropTypes.bool
};

NavBar.defaultProps = {
  currentPage: undefined,
  noMargin: false
};

export default NavBar;

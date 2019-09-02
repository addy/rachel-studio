import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ currentPage, noMargin }) => (
  <div className={`container mx-auto${noMargin ? '' : ' lg:mb-10 xl:mb-10'}`}>
    <ul className="flex justify-center lg:justify-end xl:justify-end lg:pr-4 xl:pr-4 mx-auto lg:mx-0 xl:mx-0">
      <li className="py-2 m-2">
        <div className={currentPage === 0 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </li>
      <li className="py-2 m-2">
        <div className={currentPage === 1 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}>
          <Link to="/about">About</Link>
        </div>
      </li>
      <li className="py-2 m-2">
        <div className={currentPage === 2 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}>
          <Link to="/contact">Contact</Link>
        </div>
      </li>
    </ul>
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

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ currentPage }) => (
  <div className="container mx-auto mb-10">
    <ul className="flex justify-end">
      <li className="px-4 py-2 m-2">
        <div className={currentPage === 0 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}>
          <Link to="/">Portfolio</Link>
        </div>
      </li>
      <li className="px-4 py-2 m-2">
        <div className={currentPage === 1 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}>
          <Link to="/about">About</Link>
        </div>
      </li>
      <li className="px-4 py-2 m-2">
        <div className={currentPage === 2 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'}>
          <Link to="/contact">Contact</Link>
        </div>
      </li>
    </ul>
  </div>
);

NavBar.propTypes = {
  currentPage: PropTypes.number.isRequired
};

export default NavBar;

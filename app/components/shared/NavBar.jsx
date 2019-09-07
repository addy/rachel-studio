import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ currentPage }) => (
  <div className="container mx-auto flex items-center font-frank">
    <div className="container mx-auto">
      <div className="flex justify-center lg:justify-end xl:justify-end lg:pr-4 xl:pr-4 mx-auto lg:mx-0 xl:mx-0">
        <Link to="/" className="text-lg w-1/3 lg:w-auto xl:w-auto">
          <div className="text-center py-2 m-2">
            <div className="text-lilac-lighter hover:text-lilac-darker">Home</div>
          </div>
        </Link>
        <Link to="/portfolio" className="text-lg w-1/3 lg:w-auto xl:w-auto">
          <div className="text-center py-2 m-2">
            <div
              className={
                currentPage === 0
                  ? 'text-lilac-darker'
                  : `text-lilac-lighter hover:text-lilac-darker`
              }
            >
              Portfolio
            </div>
          </div>
        </Link>
        <Link to="/about" className="text-lg w-1/3 lg:w-auto xl:w-auto">
          <div className="text-center py-2 m-2">
            <div
              className={
                currentPage === 1
                  ? 'text-lilac-darker'
                  : `text-lilac-lighter hover:text-lilac-darker`
              }
            >
              About
            </div>
          </div>
        </Link>
        <Link to="/contact" className="text-lg w-1/3 lg:w-auto xl:w-auto">
          <div className="text-center py-2 m-2">
            <div
              className={
                currentPage === 2
                  ? 'text-lilac-darker'
                  : `text-lilac-lighter hover:text-lilac-darker`
              }
            >
              Contact
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
  // purgecss: text-lilac-lighter hover:text-lilac-darker
);

NavBar.propTypes = {
  currentPage: PropTypes.number
};

NavBar.defaultProps = {
  currentPage: undefined
};

export default NavBar;

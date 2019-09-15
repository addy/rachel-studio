import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ location }) => (
  <div className="container mx-auto flex items-center font-frank h-12">
    <div className="container mx-auto">
      <div className="flex justify-center lg:justify-end xl:justify-end lg:pr-4 xl:pr-4 mx-auto lg:mx-0 xl:mx-0">
        <Link to="/" className="text-lg w-1/3 lg:w-auto xl:w-auto">
          <div className="text-center py-2 m-2">
            <div
              className={
                location.pathname === '/'
                  ? 'text-lilac-darker'
                  : `text-lilac-lighter hover:text-lilac-darker`
              }
            >
              Home
            </div>
          </div>
        </Link>
        <Link to="/portfolio" className="text-lg w-1/3 lg:w-auto xl:w-auto">
          <div className="text-center py-2 m-2">
            <div
              className={
                location.pathname === '/portfolio'
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
                location.pathname === '/about'
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
                location.pathname === '/contact'
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
  // tailwindcss: text-lilac-lighter hover:text-lilac-darker opacity-50 cursor-not-allowed
);

NavBar.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(NavBar);

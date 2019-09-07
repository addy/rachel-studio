import React, { Fragment } from 'react';
import NavBar from '../shared/NavBar';

const withNav = (WrappedComponent, index = undefined) => {
  return props => (
    <Fragment>
      <NavBar currentPage={index} />
      <WrappedComponent {...props} />
    </Fragment>
  );
};

export default withNav;

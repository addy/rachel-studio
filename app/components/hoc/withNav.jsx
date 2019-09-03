import React, { Fragment } from 'react';
import NavBar from '../shared/NavBar';

const withNav = (WrappedComponent, index = undefined) => {
  return props => (
    <Fragment>
      <NavBar currentPage={index} noMargin={index === undefined} />
      <div className="h-full pt-20">
        <WrappedComponent {...props} />
      </div>
    </Fragment>
  );
};

export default withNav;

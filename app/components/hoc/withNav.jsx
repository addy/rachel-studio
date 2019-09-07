import React, { Fragment } from 'react';
import NavBar from '../shared/NavBar';

const withNav = (WrappedComponent, index = undefined) => {
  return props => (
    <Fragment>
      <NavBar
        currentPage={index}
        noMargin={index === undefined}
        bgColor={index === undefined ? 'white' : undefined}
        textColor={index === undefined ? 'lilac-lighter' : undefined}
        hoverTextColor={index === undefined ? 'lilac-darker' : undefined}
      />
      <WrappedComponent {...props} />
    </Fragment>
  );
};

export default withNav;

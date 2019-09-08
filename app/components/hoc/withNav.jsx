import React, { Fragment } from 'react';
import NavBar from '../shared/NavBar';

const withNav = (WrappedComponent, canLogin, toggleModal, index = undefined) => {
  const wrapped = props => (
    <Fragment>
      <NavBar currentPage={index} canLogin={canLogin} toggleModal={toggleModal} />
      <WrappedComponent {...props} />
    </Fragment>
  );

  const Wrapped = wrapped;
  return Wrapped;
};

export default withNav;

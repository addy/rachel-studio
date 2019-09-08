import React, { Fragment } from 'react';
import NavBar from '../shared/NavBar';

const withNav = (WrappedComponent, canLogin, toggleModal, index = undefined) => {
  return props => (
    <Fragment>
      <NavBar currentPage={index} canLogin={canLogin} toggleModal={toggleModal} />
      <WrappedComponent {...props} />
    </Fragment>
  );
};

export default withNav;

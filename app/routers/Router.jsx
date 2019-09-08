import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GAListener from '../components/shared/GAListener';
import Loading from '../components/shared/Loading';
import Index from '../components/Index';
import loginHooks from '../components/hooks/loginHooks';
import withNav from '../components/hoc/withNav';

const Portfolio = lazy(() => import('../components/Portfolio'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const Router = () => {
  const { values, handleLoginModalToggle, component } = loginHooks({
    canLogin: true,
    loginModal: undefined,
    token: undefined
  });

  return (
    <Fragment>
      <BrowserRouter>
        <GAListener trackingID="UA-136081513-3">
          <Suspense fallback={Loading}>
            <Switch>
              <Route
                exact
                path="/"
                component={withNav(Index, values.canLogin, handleLoginModalToggle, 0)}
              />
              <Route
                path="/portfolio"
                component={withNav(Portfolio, values.canLogin, handleLoginModalToggle, 1)}
              />
              <Route
                path="/about"
                component={withNav(About, values.canLogin, handleLoginModalToggle, 2)}
              />
              <Route
                path="/contact"
                component={withNav(Contact, values.canLogin, handleLoginModalToggle, 3)}
              />
            </Switch>
          </Suspense>
        </GAListener>
      </BrowserRouter>
      {component}
    </Fragment>
  );
};

export default Router;

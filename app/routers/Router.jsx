import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GAListener from '../components/shared/GAListener';
import Loading from '../components/shared/Loading';
import Index from '../components/Index';
import NavBar from '../components/shared/NavBar';
import loginHooks from '../components/hooks/loginHooks';

const Portfolio = lazy(() => import('../components/Portfolio'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const Router = () => {
  const { values, handleLoginModalToggle, component } = loginHooks({
    canLogin: true,
    loginModal: undefined,
    token: undefined
  });

  const { canLogin } = values;

  return (
    <Fragment>
      <BrowserRouter>
        <GAListener trackingID="UA-136081513-3">
          <NavBar canLogin={canLogin} toggleModal={handleLoginModalToggle} />
          <Suspense fallback={Loading}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Suspense>
        </GAListener>
      </BrowserRouter>
      {component}
    </Fragment>
  );
};

export default Router;

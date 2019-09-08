import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GAListener from '../components/shared/GAListener';
import Loading from '../components/shared/Loading';
import index from '../components/Index';
import loginHooks from '../components/hooks/loginHooks';
import withNav from '../components/hoc/withNav';

const portfolio = lazy(() => import('../components/Portfolio'));
const about = lazy(() => import('../components/About'));
const contact = lazy(() => import('../components/Contact'));

const Router = () => {
  const { values, handleLoginModalToggle, component } = loginHooks({
    canLogin: true,
    loginModal: undefined,
    token: undefined
  });

  const Index = withNav(index, values.canLogin, handleLoginModalToggle, 0);
  const Portfolio = withNav(portfolio, values.canLogin, handleLoginModalToggle, 1);
  const About = withNav(about, values.canLogin, handleLoginModalToggle, 2);
  const Contact = withNav(contact, values.canLogin, handleLoginModalToggle, 3);

  return (
    <Fragment>
      <BrowserRouter>
        <GAListener trackingID="UA-136081513-3">
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

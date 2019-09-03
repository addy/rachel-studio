import React, { Fragment, Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import withNav from '../components/hoc/withNav';
import Loading from '../components/shared/Loading';
import Index from '../components/Index';

const Portfolio = lazy(() => import('../components/Portfolio'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const Router = () => (
  <Fragment>
    <HashRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={withNav(Index)} />
          <Route exact path="/portfolio" component={withNav(Portfolio, 0)} />
          <Route exact path="/about" component={withNav(About, 1)} />
          <Route exact path="/contact" component={withNav(Contact, 2)} />
        </Switch>
      </Suspense>
    </HashRouter>
  </Fragment>
);

export default Router;

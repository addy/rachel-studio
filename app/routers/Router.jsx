import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loading from '../components/shared/Loading';
import Index from '../components/Index';

const Portfolio = lazy(() => import('../components/Portfolio'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const Router = () => (
  <Fragment>
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Fragment>
);

export default Router;

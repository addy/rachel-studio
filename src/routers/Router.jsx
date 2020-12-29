import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GAListener from '../components/shared/GAListener';
import Store from '../components/hooks/Store';
import Loading from '../components/shared/Loading';
import NavBar from '../components/shared/NavBar';
import Alert from '../components/shared/Alert';

const Portfolio = lazy(() => import('../components/Portfolio'));
const Details = lazy(() => import('../components/Details'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const trackingId = 'UA-136081513-3';

const Router = () => (
  <>
    <BrowserRouter>
      <GAListener trackingID={trackingId}>
        <Store>
          <NavBar />
          <Alert />
          <Suspense fallback={Loading}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/portfolio" />
              </Route>
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/portfolio/:id" component={Details} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Suspense>
        </Store>
      </GAListener>
    </BrowserRouter>
  </>
);

export default Router;

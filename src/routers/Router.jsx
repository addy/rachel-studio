import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GAListener from '../components/shared/GAListener';
import Store from '../components/hooks/Store';
import Loading from '../components/shared/Loading';
import Index from '../components/Index';
import NavBar from '../components/shared/NavBar';
import Alert from '../components/shared/Alert';

const Portfolio = lazy(() => import('../components/Portfolio'));
const Details = lazy(() => import('../components/Details'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));
// const Checkout = lazy(() => import('../components/Checkout'));

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <GAListener trackingID="UA-136081513-3">
          <Store>
            <NavBar />
            <Alert />
            <Suspense fallback={Loading}>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/:id" component={Details} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                {/* <Route path="/checkout" component={Checkout} /> */}
              </Switch>
            </Suspense>
          </Store>
        </GAListener>
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;

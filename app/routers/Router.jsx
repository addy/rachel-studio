import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Loading = () => <div />;

const LoadableIndex = Loadable({
  loader: () => import('../components/Index'),
  loading: Loading
});

const LoadablePortfolio = Loadable({
  loader: () => import('../components/Portfolio'),
  loading: Loading
});

const LoadableAbout = Loadable({
  loader: () => import('../components/About'),
  loading: Loading
});

const LoadableContact = Loadable({
  loader: () => import('../components/Contact'),
  loading: Loading
});

const Router = () => {
  return (
    <Fragment>
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LoadableIndex} />
            <Route exact path="/portfolio" component={LoadablePortfolio} />
            <Route exact path="/about" component={LoadableAbout} />
            <Route exact path="/contact" component={LoadableContact} />
          </Switch>
        </div>
      </HashRouter>
    </Fragment>
  );
};

export default Router;

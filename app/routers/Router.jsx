import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index from '../components/Index';
import About from '../components/About';
import Contact from '../components/Contact';

const Router = () => (
  <Fragment>
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </HashRouter>
  </Fragment>
);

export default Router;

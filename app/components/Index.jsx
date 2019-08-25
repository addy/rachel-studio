import React, { Fragment } from 'react';
import NavBar from './shared/NavBar';
import CardDetails from './shared/CardDetails';

import Suze from '../images/suze.jpg';
import Sister from '../images/sister.jpg';
import Seahorse from '../images/seahorse.jpg';

const Index = () => (
  <Fragment>
    <NavBar currentPage={0} />
    <div className="container mx-auto">
      <div className="container flex items-center flex-row">
        <CardDetails
          src={Sister}
          alt="Sister"
          title="Lexie"
          text="My sister"
          tags={['sister', 'cool']}
        />
        <CardDetails
          src={Suze}
          alt="Susan"
          title="Susan"
          text="My friend"
          tags={['friend', 'cool']}
        />
        <CardDetails
          src={Seahorse}
          alt="Seahorse"
          title="Seahorse"
          text="My seahorse"
          tags={['sea', 'horse']}
        />
      </div>
      <div className="container flex items-center flex-row">
        <CardDetails
          src={Seahorse}
          alt="Seahorse"
          title="Seahorse"
          text="My seahorse"
          tags={['sea', 'horse']}
        />
        <CardDetails
          src={Sister}
          alt="Sister"
          title="Lexie"
          text="My sister"
          tags={['sister', 'cool']}
        />
        <CardDetails
          src={Suze}
          alt="Susan"
          title="Susan"
          text="My friend"
          tags={['friend', 'cool']}
        />
      </div>
      <div className="container flex items-center flex-row">
        <CardDetails
          src={Suze}
          alt="Susan"
          title="Susan"
          text="My friend"
          tags={['friend', 'cool']}
        />
        <CardDetails
          src={Seahorse}
          alt="Seahorse"
          title="Seahorse"
          text="My seahorse"
          tags={['sea', 'horse']}
        />
        <CardDetails
          src={Sister}
          alt="Sister"
          title="Lexie"
          text="My sister"
          tags={['sister', 'cool']}
        />
      </div>
    </div>
  </Fragment>
);

export default Index;

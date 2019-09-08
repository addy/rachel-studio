import React from 'react';
import CardDetails from './shared/CardDetails';
import Suze from '../images/suze.jpg';
import Sister from '../images/sister.jpg';
import Seahorse from '../images/seahorse.jpg';
import Plant from '../images/plant.jpg';

const Portfolio = () => (
  <div className="container mx-auto pt-20 pb-16">
    <div className="container flex items-center flex-row flex-wrap">
      <CardDetails src={Sister} alt="Sister" title="Lexie" text="My sister" />
      <CardDetails src={Suze} alt="Susan" title="Susan" text="My friend" />
      <CardDetails src={Plant} alt="Plant" title="Plant" text="My plant" />
      <CardDetails src={Seahorse} alt="Seahorse" title="Seahorse" text="My seahorse" />
    </div>
  </div>
);

export default Portfolio;

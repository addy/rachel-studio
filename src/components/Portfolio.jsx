import React, { memo } from 'react';
import CardDetails from './shared/CardDetails';
import Suze from '../images/suze.jpg';
import Sister from '../images/sister.jpg';
import Seahorse from '../images/seahorse.jpg';
import Plant from '../images/plant.jpg';
import Succulent from '../images/succulent.jpg';
import Flower from '../images/flower.jpg';

const Portfolio = memo(
  () => (
    <div className="container mx-auto pt-20 pb-16">
      <div className="container flex items-center flex-row flex-wrap">
        <CardDetails src={Succulent} alt="Succulent" title="Succulent" />
        <CardDetails src={Flower} alt="Flower" title="Peony" />
        <CardDetails src={Sister} alt="Sister" title="Lexie" />
        <CardDetails src={Suze} alt="Susan" title="Susan" />
        <CardDetails src={Plant} alt="Plant" title="Pothos" />
        <CardDetails src={Seahorse} alt="Seahorse" title="Seahorse" />
      </div>
    </div>
  ),
  () => true
);

export default Portfolio;

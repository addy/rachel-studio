import React, { memo } from 'react';
import CardDetails from './shared/CardDetails';

// Plants
import Pothos from '../images/plants/pothos.jpg';
import Succulent from '../images/plants/succulent.jpg';
import Cactus from '../images/plants/cactus.jpg';
import Rubber from '../images/plants/rubber.jpg';

// Portraits
import Susan from '../images/portraits/susan.jpg';
import Lexie from '../images/portraits/lexie.jpg';
import Addison from '../images/portraits/addison.jpg';
import Brennan from '../images/portraits/brennan.jpg';
import Chris from '../images/portraits/chris.jpg';
import Fen from '../images/portraits/fen.jpg';
import Jillian from '../images/portraits/jillian.jpg';
import Kathryn from '../images/portraits/kathryn.jpg';
import Liz from '../images/portraits/liz.jpg';
import Rachel from '../images/portraits/rachel.jpg';
import Robert from '../images/portraits/robert.jpg';

// Vectors
import Seahorse from '../images/vectors/seahorse.jpg';
import Chicken from '../images/vectors/chicken.jpg';
import Octopus from '../images/vectors/octopus.jpg';
import Turtle from '../images/vectors/turtle.jpg';

const Portfolio = memo(
  () => (
    <div className="container mx-auto pt-20 pb-16">
      <div className="px-4">
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
          role="alert"
        >
          <p className="text-sm font-archivo">
            Select items will be available for purchase on November 1st.
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="font-frank text-indigo-500">Plants</div>
        <div className="border-t-2 border-gray-200 my-4" />
      </div>
      <div className="container flex items-center flex-row flex-wrap">
        <CardDetails src={Succulent} alt="Succulent" title="Succulent" />
        <CardDetails src={Pothos} alt="Pothos" title="Pothos" />
        <CardDetails src={Cactus} alt="Cactus" title="Cactus" />
        <CardDetails src={Rubber} alt="Rubber" title="Rubber" />
      </div>
      <div className="px-4 mt-4">
        <div className="font-frank text-indigo-500">Portraits</div>
        <div className="border-t-2 border-gray-200 my-4" />
      </div>
      <div className="container flex items-center flex-row flex-wrap">
        <CardDetails src={Lexie} alt="Lexie" title="Lexie" />
        <CardDetails src={Susan} alt="Susan" title="Susan" />
        <CardDetails src={Addison} alt="Addison" title="Addison" />
        <CardDetails src={Brennan} alt="Brennan" title="Brennan" />
        <CardDetails src={Chris} alt="Chris" title="Chris" />
        <CardDetails src={Fen} alt="Fen" title="Fen" />
        <CardDetails src={Jillian} alt="Jillian" title="Jillian" />
        <CardDetails src={Kathryn} alt="Kathryn" title="Kathryn" />
        <CardDetails src={Liz} alt="Liz" title="Liz" />
        <CardDetails src={Rachel} alt="Rachel" title="Rachel" />
        <CardDetails src={Robert} alt="Robert" title="Robert" />
      </div>
      <div className="px-4 mt-4">
        <div className="font-frank text-indigo-500">Vectors</div>
        <div className="border-t-2 border-gray-200 my-4" />
      </div>
      <div className="container flex items-center flex-row flex-wrap">
        <CardDetails src={Turtle} alt="Turtle" title="Turtle" />
        <CardDetails src={Chicken} alt="Chicken" title="Chicken" />
        <CardDetails src={Octopus} alt="Octopus" title="Octopus" />
        <CardDetails src={Seahorse} alt="Seahorse" title="Seahorse" />
      </div>
    </div>
  ),
  () => true
);

export default Portfolio;

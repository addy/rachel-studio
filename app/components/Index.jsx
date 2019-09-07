import React from 'react';
import withNav from './hoc/withNav';
import Suze from '../images/suze.jpg';

const Index = () => (
  <div className="flex flex-col items-center justify-center flex-grow">
    <img
      src={Suze}
      alt="Suze"
      className="flex-none w-1/2 lg:w-1/6 xl:w-1/6 rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
    />
    <div className="italic text-7xl font-archivo text-lilac-darker">
      &quot;Color Me Impressed&quot;
    </div>
    <div className="text-4xl font-frank">Rachel Shaw</div>
    <div className="text-2xl font-frank text-black">
      November 1st - 30th | Monday - Saturday | 9AM - 9PM
    </div>
    <div className="text-md font-frank text-black">
      Unity Temple Gallery Hall | 707 W 47th St Kansas City, MO 64112
    </div>
  </div>
);

export default withNav(Index, 0);

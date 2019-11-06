import React, { memo } from 'react';
import useAnimation from './hooks/useAnimation';
import Susan from '../images/susan.jpg';

const Index = memo(
  () => {
    const animation = useAnimation('elastic', 800, 60);
    return (
      <div className="flex flex-col items-center justify-center flex-grow">
        <img
          src={Susan}
          alt="Susan"
          className="flex-none w-1/2 lg:w-1/6 xl:w-1/6 rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
          style={{ marginTop: animation * 200 - 100 }}
        />
        <div className="italic text-5xl md:text-7xl font-archivo text-lilac-darker">
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
  },
  () => true
);

export default Index;

import React from 'react';
import NavBar from './shared/NavBar';

import Show from '../images/show.jpg';

const Index = () => (
  <div className="container mx-auto h-screen flex flex-col">
    <NavBar noMargin />
    <div className="flex items-center flex-row">
      <div className="flex items-center flex-col mx-auto">
        <img className="shadow-2xl" src={Show} alt="9-30-19" />
      </div>
    </div>
  </div>
);

export default Index;

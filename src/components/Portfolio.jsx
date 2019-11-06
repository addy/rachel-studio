import React, { useState, useEffect, Fragment } from 'react';
import CardDetails from './shared/CardDetails';
import { capitalize } from './shared/utils';

const Portfolio = () => {
  const [sections, setSections] = useState(undefined);

  useEffect(() => {
    const pollArt = async () => {
      try {
        let art = await fetch('/api/art', {
          method: 'GET',
          mode: 'same-origin',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' }
        });

        art = await art.json();
        const currSections = new Map();

        art.forEach(piece => {
          if (!currSections.has(piece.type)) {
            currSections.set(piece.type, []);
          }

          currSections.get(piece.type).push(piece);
        });

        setSections(currSections);
      } catch (err) {
        setSections(null);
      }
    };

    pollArt();
  }, []);

  // Lazy until I can think of a better DB schema.
  const sectionOrder = ['plant', 'portrait', 'vector'];

  return sections ? (
    <div className="container mx-auto pt-20 pb-16">
      {sectionOrder.map(section => (
        <Fragment>
          <div className="px-4 mt-4">
            <div className="font-frank text-xl text-indigo-500">{`${capitalize(section)}s`}</div>
            <div className="border-t-2 border-gray-200 my-4" />
          </div>
          <div className="container flex items-center flex-row flex-wrap">
            {sections
              .get(section)
              .sort((a, b) => a.position - b.position)
              .map(piece => (
                <CardDetails piece={piece} />
              ))}
          </div>
        </Fragment>
      ))}
    </div>
  ) : (
    <span className="loading">
      {sections === undefined ? 'Loading...' : 'Could not find artwork'}
    </span>
  );
};

export default Portfolio;

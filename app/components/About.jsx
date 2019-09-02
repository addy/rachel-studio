import React, { Fragment } from 'react';
import NavBar from './shared/NavBar';
import Rachel from '../images/rachel.jpg';
import Studio from '../images/studio.jpg';

const About = () => (
  <Fragment>
    <NavBar currentPage={1} />
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 flex flex-col justify-center p-20 mx-auto md:mx-0 lg:mx-0 xl:mx-0">
          <img
            src={Rachel}
            alt="Rachel"
            className="rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
          />
        </div>
        <div className="w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6 p-20 md:h-full lg:h-full xl:h-full mx-auto md:mx-0 lg:mx-0 xl:mx-0">
          <div className="flex items-center mx-auto">
            <div>
              <p className="mb-2">
                Rachel Shaw is an oil painter based out of Kansas City. She graduated with a BFA
                from Kansas State University with a focus in painting.
              </p>
              <p className="mb-2">
                While her primary passion is portraiture, she has recently begun experimenting with
                small still lives and abstract compositions. Due to the personalized nature of her
                style, most of her paintings are done on a commission basis. There is nothing Rachel
                likes better than representing loved ones and objects through paint.
              </p>
              <p className="mb-2">
                Please do not hesitate to reach out to her with your painting proposals. She is a
                motivated artist who genuinely wants to work with you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center p-5 mt-2">
        <img src={Studio} alt="Studio" className="shadow-2xl" />
      </div>
    </div>
    <footer className="w-full text-center p-4 mt-2">
      <a href="https://www.instagram.com/rachelvshaw/">
        <ion-icon name="logo-instagram" size="large" />
      </a>
    </footer>
  </Fragment>
);

export default About;

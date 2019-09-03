import React, { Fragment } from 'react';
import Rachel from '../images/rachel.jpg';
import Studio from '../images/studio.jpg';

const About = () => (
  <Fragment>
    <div className="container mx-auto">
      <div className="container flex flex-col lg:flex-row xl:flex-row items-center">
        <div className="w-1/2 lg:w-2/6 xl:w-2/6 flex flex-col justify-center p-4 lg:p-20 xl:p-20 mx-auto lg:mx-0 xl:mx-0">
          <img
            src={Rachel}
            alt="Rachel"
            className="rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
          />
        </div>
        <div className="w-full lg:w-4/6 xl:w-4/6 p-4 lg:p-20 xl:p-20 lg:h-full xl:h-full mx-auto lg:mx-0 xl:mx-0">
          <div className="my-4 leading-tight">
            Rachel Shaw is an oil painter based out of Kansas City. She graduated with a BFA from
            Kansas State University with a focus in painting.
          </div>
          <div className="my-4 leading-tight">
            While her primary passion is portraiture, she has recently begun experimenting with
            small still lives and abstract compositions. Due to the personalized nature of her
            style, most of her paintings are done on a commission basis. There is nothing Rachel
            likes better than representing loved ones and objects through paint.
          </div>
          <div className="my-4 leading-tight">
            Please do not hesitate to reach out to her with your painting proposals. She is a
            motivated artist who genuinely wants to work with you!
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

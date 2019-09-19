import React, { Fragment, memo } from 'react';
import Rachel from '../images/rachel.jpg';
import Studio from '../images/studio.jpg';

const About = memo(
  () => (
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
      <footer className="w-full text-center p-4 mt-2 flex items-center justify-center">
        <a href="https://www.instagram.com/rachelvshaw/">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
          </svg>
        </a>
      </footer>
    </Fragment>
  ),
  () => true
);

export default About;

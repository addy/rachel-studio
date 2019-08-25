import React, { Fragment } from 'react';
import NavBar from './shared/NavBar';
import Rachel from '../images/rachel.jpg';
import Studio from '../images/studio.jpg';

const About = () => (
  <Fragment>
    <NavBar currentPage={1} />
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="w-2/6 flex flex-col justify-center p-5">
          <img
            src={Rachel}
            alt="Rachel"
            className="rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
          />
        </div>
        <div className="w-4/6 p-5">
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat vitae sem
            quis placerat. Mauris maximus lacinia neque, nec finibus lorem auctor a. Sed dolor nisi,
            euismod at lorem in, vulputate aliquam purus. Proin laoreet gravida turpis, et
            pellentesque odio congue a. Donec et erat tempus quam rutrum ullamcorper nec et elit.
            Cras ex urna, commodo a mollis vel, pretium non velit. Phasellus vehicula velit a erat
            mollis blandit. In eget magna eget turpis dapibus efficitur. Donec lacinia, justo vitae
            cursus sagittis, ipsum elit tincidunt ante, suscipit semper libero erat vitae arcu.
          </p>
          <p className="mb-2">
            Pellentesque vel purus vehicula, finibus sem in, congue tortor. Curabitur gravida et
            libero in pulvinar. Maecenas tincidunt, enim vitae tempor ullamcorper, risus purus
            pharetra justo, eu mattis massa dolor quis felis. Donec euismod nisl vitae nunc rhoncus
            imperdiet. In varius, risus id rutrum ullamcorper, felis velit consectetur nibh, at
            rutrum lectus mauris at leo. Integer lorem neque, aliquam a tincidunt nec, egestas
            hendrerit turpis. Aenean id sem nisi. Phasellus orci elit, tempor id massa non,
            sollicitudin hendrerit ante. Maecenas viverra a velit at aliquam.
          </p>
          <p className="mb-2">
            Aenean sagittis mi sed consequat interdum. Ut vel urna sit amet elit tincidunt sagittis.
            Vivamus rhoncus sem eu erat lacinia, eu semper eros rutrum. Sed ac nisi eu dolor blandit
            venenatis. Vivamus suscipit, diam a semper efficitur, odio mi aliquet diam, nec dapibus
            erat est vel ligula. Ut condimentum mauris a lobortis vestibulum. Nunc aliquam neque
            urna.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center p-5 mt-2">
        <img src={Studio} alt="Studio" className="shadow-2xl" />
      </div>
    </div>
  </Fragment>
);

export default About;

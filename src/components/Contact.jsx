import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full text-white md:h-screen bg-myCustomBackgroundColor flex items-center justify-center"
    >
      <div>
        <Fade direction="up" duration={1300} triggerOnce>
          <button className="text-white px-16 py-8 text-4xl my-2 flex items-center rounded-md bg-gradient-to-b from-purple-900 to-indigo-400 cursor-pointer shadow-md hover:shadow-lg duration-200 hover:scale-105">
            <span className="mr-2 font-aboutbutton text-shadow-sm">
              Let's Connect!
            </span>
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineYoutube } from 'react-icons/ai';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jcotter1991@gmail.com';
  };

  return (
    <div
      name="contact"
      className="w-full text-white md:h-screen bg-myCustomBackgroundColor flex items-center justify-center"
    >
      <div className="mt-20 mb-10">
        <Fade direction="up" duration={1300} triggerOnce>
          <button
            className="text-white px-8 py-4 text-2xl md:px-16 md:py-8 md:text-4xl my-2 flex items-center rounded-md bg-gradient-to-b from-purple-900 to-indigo-400 cursor-pointer shadow-md hover:shadow-lg duration-200 hover:scale-105"
            onClick={handleEmailClick}
          >
            <span className="mr-2 font-aboutbutton text-shadow-sm">
              Let's Connect!
            </span>
          </button>
          <div className="flex items-center justify-center mt-4">
            <a
              href="https://github.com/JamesAnthony77"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-indigo-400 p-2 mr-2 github-link"
            >
              <FaGithub size={25} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jc03/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-indigo-400 p-2 mr-2 linkedin-link"
            >
              <GrLinkedinOption size={28} className="text-white" />
            </a>
            <a
              href="https://www.youtube.com/@ijustgeeked"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-indigo-400 p-3"
            >
              <AiOutlineYoutube size={30} className="text-white" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;

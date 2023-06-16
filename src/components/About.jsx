import React from 'react';
import { useState, useEffect } from 'react';
import IndigoFlowerTrans from '../assets/images/IndigoFlowerTrans.png';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  const [opacity, setOpacity] = useState(0.9);

  useEffect(() => {
    const hasTransitionOccurred = localStorage.getItem('transitionOccurred');

    if (!hasTransitionOccurred) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setOpacity(0.1);
          localStorage.setItem('transitionOccurred', 'true');
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);

      const handleBeforeUnload = () => {
        localStorage.removeItem('transitionOccurred');
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    } else {
      setOpacity(0.1);
    }
  }, []);

  return (
    <div
      name="about"
      className="w-full h-screen bg-myCustomBackgroundColor text-white relative"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-8">
          <Fade direction="left" duration={1300} triggerOnce>
            <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-bold inline border-b-4 border-indigo-400">
              About
            </p>
          </Fade>
        </div>

        <p className="text-xl mt-4 fon [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
          Welcome to my little corner of the internet! I like to think that all
          of us are connected now by this great digital garden we find ourselves
          in. I’m eternally curious and that has led me to generalize. Gather
          seeds from all over to plant and tend and watch grow. Simply put, I am
          good at many things.
        </p>

        <br />

        <p className="text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
          Whether it’s building out a mobile app, or website to launch an idea
          and business, writing/editing novels, managing creative content, or
          exploring the nexus of culture, technology, and AI: I throw myself
          into it with all the passion I’ve got.
        </p>

        <br />

        <p className="text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
          My design and creative principles are based in starting from
          simplicity, bringing joy but still striving to create conversation,
          and collaborating with others to build products that are
          transformative in nature.
        </p>

        <br />

        <p className="text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
          There is an undeniable equity of beauty in working together. Of
          telling a story together. I most find joy in pushing creative
          boundaries. Ideating. Building. Collaborating. Dreaming.
        </p>

        <br />

        <p className="text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
          But beyond that you can find me hiking, reading, and hanging out with
          friends.
        </p>

        {/* <img
          src={PortfolioPic}
          alt="My Profile"
          className="h-25 w-10 justify-center items-center"
        /> */}
      </div>

      <div
        className="absolute inset-0 bg-auto bg-center transition-opacity duration-4000 ease-in-out"
        style={{
          backgroundImage: `url(${IndigoFlowerTrans})`,
          opacity: opacity,
        }}
      ></div>
    </div>
  );
};

export default About;

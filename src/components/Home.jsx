import React from 'react';
import { TbBinaryTree2 } from 'react-icons/tb';
import IsometricGalaxy1 from '../assets/images/IsometricGalaxy4nobg.png';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-myCustomBackgroundColor"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center md:flex-row h-full">
        <div className="flex flex-col justify-center md:mr-8 px-4 mt-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-white [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
            dream transfusion
          </h2>
          <p className="text-gray-300 py-4 max-w-md [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
            I have 10+ years of experience in creative management and solutions.
            Life is a series of collisions with the future and I believe the
            code we write now is the rocket fuel for projects that get us there.
            But there is one goal and it is very simple: Decrease Business
            Entropy
          </p>

          <div>
            <Fade direction="left" duration={1300} triggerOnce>
              <Link
                to="skills"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-900 to-indigo-400 cursor-pointer z-10"
              >
                <span className="mr-1.5">Skill Tree</span>
                <span className="group-hover:rotate-90 duration-300">
                  <TbBinaryTree2 size={25} />
                </span>
              </Link>
            </Fade>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <img
            src={IsometricGalaxy1}
            alt="Galaxy City"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

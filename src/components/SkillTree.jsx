import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SkillTree3 from '../assets/images/SkillTree3.png';

const SkillTree = () => {
  return (
    <div
      name="skills"
      className="w-full text-white md:h-screen bg-myCustomBackgroundColor"
    >
      <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center">
          <Fade direction="left" duration={1300} triggerOnce>
            <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-bold inline border-b-4 border-indigo-400">
              Skill Tree 🌲
            </p>
          </Fade>
        </div>

        <div>
          <img
            src={SkillTree3}
            alt="Map of skills"
            className="mx-auto w-2/3 md:w-4/5 rounded-lg drop-shadow-lg shadow-lg shadow-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
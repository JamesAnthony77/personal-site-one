import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SkillTree8 from '../assets/images/SkillTree8.png';

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

        <div className="mx-auto w-full sm:w-4/5 md:w-2/3 max-w-full">
          <img
            src={SkillTree8}
            alt="Map of skills"
            className="rounded-lg shadow-lg shadow-blue-300 duration-100 hover:scale-105"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillTree;

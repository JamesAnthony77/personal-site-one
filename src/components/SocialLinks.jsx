import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <GrLinkedinOption size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/jc03/',
      //   style: 'rounded-tr-md',
    },

    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/JamesAnthony77',
    },

    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:',
    },

    {
      id: 4,
      child: (
        <>
          <AiOutlineYoutube size={30} />
        </>
      ),
      href: 'https://www.youtube.com/@ijustgeeked',
      //   style: 'rounded-br-md',
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              'flex space-between items-center w-35 h-15 px-4 ml-[-47px] bg-gradient-to-r from-gray-950 to-gray-800 rounded-lg border border-white hover:ml-[-10px] hover:rounded-e-2xl duration-300' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className="flex items-center text-white no-underline"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

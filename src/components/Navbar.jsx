import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const links = [
    {
      id: 1,
      link: 'about',
    },
    {
      id: 2,
      link: 'portfolio',
    },
    {
      id: 3,
      link: 'skills',
    },
    {
      id: 4,
      link: 'contact',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white">
      <div>
        <h1 className="text-white font-bold font-signature ml-1 text-xl md:text-2xl lg:text-4xl">
          James Anthony
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
          >
            <Link onClick={() => setNav(nav)} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-myCustomBackgroundColor">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CryptoAPI from '../assets/images/CryptoAPI.png';
import GoddessfallCover3 from '../assets/images/GoddessfallCover3.png';
import StarSite1 from '../assets/images/StarSite1.png';
import YTChannel from '../assets/images/YTChannel.png';
import WritingServices from '../assets/images/WritingServices.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: GoddessfallCover3,
      text: 'New novel coming soon!',
    },
    {
      id: 2,
      src: CryptoAPI,
      href: 'https://cryptoexchangeapi.netlify.app/',
      text: 'Crypto Exchange API',
    },
    {
      id: 3,
      src: StarSite1,
      href: 'https://interstellartravel.netlify.app/',
      text: 'Space Exploration Landing Page',
    },
    {
      id: 4,
      src: YTChannel,
      text: 'Check out my channel!',
      href: 'https://www.youtube.com/@ijustgeeked',
    },
    {
      id: 5,
      src: WritingServices,
      text: 'Publication Editing',
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full text-white md:h-screen bg-myCustomBackgroundColor"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <Fade direction="left" duration={1300} triggerOnce>
            <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-bold inline border-b-4 border-indigo-400">
              Portfolio
            </p>

            <p className="py-6">Check out some of my work 👇</p>
          </Fade>
        </div>

        <Fade direction="up" duration={1500} triggerOnce>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, text, href }) => (
              <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-2 py-1 m-2">{text}</button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Portfolio;

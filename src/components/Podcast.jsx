import React from 'react';
import PodcastEmbed from './PodcastEmbed';

const Podcast = () => {
  return (
    <div
      name="portfolio"
      className="w-full text-white md:h-screen bg-myCustomBackgroundColor"
    >
      <div>
        <PodcastEmbed />
      </div>
    </div>
  );
};

export default Podcast;

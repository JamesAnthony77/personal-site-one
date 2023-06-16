import React from 'react';
import PodcastEmbed from './PodcastEmbed';

const Podcast = () => {
  return (
    <div
      name="podcast"
      className="w-full text-white bg-myCustomBackgroundColor"
    >
      <div>
        <PodcastEmbed />
      </div>
    </div>
  );
};

export default Podcast;

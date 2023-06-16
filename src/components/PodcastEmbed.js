import React from 'react';

const PodcastEmbed = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 mt-20 mb-20">
        <iframe
          id="embedPlayer"
          title="Stories Are My Way Home Podcast Episodes"
          src="https://embed.podcasts.apple.com/us/podcast/stories-are-my-way-home/id1507717259?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark"
          height="450px"
          border="0"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; clipboard-write"
          className="w-full overflow-hidden rounded-lg"
          style={{ backgroundColor: 'rgb(14, 14, 18)' }}
        ></iframe>
      </div>
    </div>
  );
};

export default PodcastEmbed;

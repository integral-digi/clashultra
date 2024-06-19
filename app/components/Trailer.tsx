"use client"
import Image from "next/image";
import { useContent } from "../context/ContentContext";
import React, { useState } from 'react';

// Trailer component to render the trailer video or YouTube iframe
const Trailer: React.FC = () => {
  const content = useContent();

  // State to manage whether to show the video or the placeholder image
  const [showVideo, setShowVideo] = useState(false);

  // Show a loading state if content or trailer data is not available yet
  if (!content || !content.trailer) {
    return <section className="font-bold">Loading...</section>;
  }

  const { trailer } = content;

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Function to toggle between showing the video and the placeholder image
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <section className="w-full">
      {/* Container for the video or YouTube iframe element */}
      <section className="w-[80%] h-[540px] rounded-xl mx-auto xl:w-full">
        {showVideo ? (
          isYouTubeUrl(trailer.video.src) ? (
            <iframe
              src={trailer.video.src}
              className="w-full h-full object-cover rounded-xl"
              allowFullScreen
              title="Trailer Video"
            />
          ) : (
            <video
              src={trailer.video.src}
              autoPlay
              controls
              className="w-full h-full object-cover rounded-xl"
            />
          )
        ) : (
          <section className="w-full h-full relative backdrop-filter bg-blend-overlay">
            <img
              src={trailer.image.url}
              alt={trailer.image.alt}
              className="w-full h-full object-cover rounded-xl cursor-pointer"
              onClick={toggleVideo}
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-full p-4 cursor-pointer"
              onClick={toggleVideo}
            >
              <Image
                src="/assets/play.svg"
                width={84}
                height={84}
                alt="play"
              />
            </button>
          </section>
        )}
      </section>
    </section>
  );
};

export default Trailer;

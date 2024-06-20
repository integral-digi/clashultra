"use client"
import Image from "next/image";
import { useState } from "react";
import { useContent } from "../context/ContentContext";
import Lightbox from "./Lightbox"; // Adjust the import path as necessary

// TrailerImages component to render images accompanying the trailer
const TrailerImages: React.FC = () => {
  const content = useContent();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<string>("");

  // Show a loading state if content is not available yet
  if (!content || !content.trailerImages) {
    return <section />;
  }

  const { trailerImages } = content;

  const openLightbox = (media: string) => {
    setCurrentMedia(media);
    setLightboxOpen(true);
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-12 w-full flex-grow">
      {trailerImages.map((item) => (
        // Container section with relative positioning for the Image component
        <section 
          key={item.id} 
          className="relative w-72 h-48 rounded-xl overflow-hidden cursor-pointer md:w-full"
          onClick={() => openLightbox(item.url || "/")}
        >
          {item.url ? (
            <Image
              src={item.url}
              alt={item.alt || "Trailer Image"}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          ) : (
            <section className="bg-gray-200 w-full h-full flex items-center justify-center">
              <span>Image not available</span>
            </section>
          )}
        </section>
      ))}
      <Lightbox media={currentMedia} isOpen={lightboxOpen} setIsOpen={setLightboxOpen} />
    </section>
  );
};

export default TrailerImages;
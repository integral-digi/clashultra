"use client"
import Image from "next/image";
import { useContent } from "../context/ContentContext";

// TrailerImages component to render images accompanying the trailer
const TrailerImages: React.FC = () => {
  const content = useContent();

  // Show a loading state if content is not available yet
  if (!content || !content.trailerImages) {
    return <p>Loading...</p>;
  }

  const { trailerImages } = content;

  return (
    <section className="flex flex-wrap items-center justify-between gap-16">
      {trailerImages.map((item) => (
        // Container section with relative positioning for the Image component
        <section key={item.id} className="relative w-96 h-64 rounded-xl overflow-hidden">
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
    </section>
  );
};

export default TrailerImages;

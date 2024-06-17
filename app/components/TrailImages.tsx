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
        <div key={item.id} className="w-1/4 h-64 bg-clip-content rounded-xl object-cover">
          {item.url ? (
            <Image
              src={item.url}
              width={360}
              height={256}
              alt={item.alt || "Trailer Image"}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <span>Image not available</span>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default TrailerImages;

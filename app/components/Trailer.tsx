"use client"
import { useContent } from "../context/ContentContext";

// Trailer component to render the trailer video
const Trailer: React.FC = () => {
  const content = useContent();

  // Show a loading state if content or trailer data is not available yet
  if (!content || !content.trailer) {
    return <div>Loading...</div>;
  }

  const { trailer } = content;

  return (
    <section className="w-full">
      {/* Container for the video element */}
      <section className="w-full h-[640px] rounded-xl overflow-hidden">
        <video
          src={trailer.src}
          controls
          className="w-full h-full object-cover rounded-xl"
        />
      </section>
    </section>
  );
};

export default Trailer;

//this component renders the trailer section

"use client"
import { useContent } from "../context/ContentContext";

const Trailer: React.FC = () => {
  const content = useContent();

  if (!content || !content.trailer) {
    return <div>Loading...</div>;
  }

  const { trailer } = content;

  return (
    <section className="w-full">
      <section className="w-full h-[640px] rounded-xl">
        <video
          src={trailer.src}
          controls
        />
      </section>
    </section>
  );
};

export default Trailer;
//this component renders the hero image

"use client"
import Image from "next/image";
import { useContent } from "../context/ContentContext";

const Hero: React.FC = () => {
  const content = useContent();

  if (!content || !content.hero) {
    return <section></section>;
  }

  const { hero } = content;

  return (
    <section className="w-full">
      <section className="relative w-full h-[640px]">
        <Image
          src={hero.url || "/"}
          alt={hero.alt || "Hero Image"}
          layout="fill"
          objectFit="cover"
          priority={true} 
        />
      </section>
    </section>
  );
};

export default Hero;

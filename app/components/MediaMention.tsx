"use client";
import Image from "next/image";
import { useContent } from "../context/ContentContext";
import Link from "next/link";
import { labelStyle } from "./About";

// MediaMentions component to render the media mentions section
const MediaMentions: React.FC = () => {
  const content = useContent();

  // Show a loading state if content is not available yet
  if (!content || !content.mediaMentions) {
    return <section />;
  }

  const { mediaMentions } = content;

  return (
    <section className="space-y-9 flex flex-col justify-center items-center w-full">
      {/* Label Section */}
      <section className="flex items-center space-x-2 mb-8">
        <section className="rounded-full border-2 border-blue-950 w-4 h-4" />
        <h6 className={labelStyle}>
          {mediaMentions.label}
        </h6>
      </section>
      
      {/* Media Mentions Section */}
      <section className="flex items-center justify-center">
        <section className="flex flex-wrap flex-1 items-center gap-24 lg:gap-16 justify-between">
          {mediaMentions.media.map((item) => (
            <section key={item.id} className="w-1/4 lg:w-fit">
              <Link href={item.link || "#"} passHref>
                <section className="relative h-full w-auto">
                  <img
                    src={item.url || "/"}
                    alt={item.alt || "Mention"}
                    className="h-9 w-auto lg:h-6"
                  />
                </section>
              </Link>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default MediaMentions;

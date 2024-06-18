"use client"
import Image from "next/image";
import { useContent } from "../context/ContentContext";
import Link from "next/link";
import { labelStyle } from "./About";

// MediaMentions component to render the media mentions section
const MediaMentions: React.FC = () => {
  const content = useContent();

  // Show a loading state if content is not available yet
  if (!content || !content.mediaMentions) {
    return <section></section>;
  }

  const { mediaMentions } = content;

  return (
    <section className="space-y-9 flex flex-col justify-center items-center">
      {/* Label Section */}
      <section className="flex items-center space-x-2 mb-8">
        <section className="rounded-full border-2 border-blue-950 w-4 h-4" />
        <h6 className={labelStyle}>
          {mediaMentions.label}
        </h6>
      </section>
      
      {/* Media Mentions Section */}
      <section className="flex flex-wrap items-center gap-20 justify-between">
        {mediaMentions.media.map((item) => (
          <section key={item.id} className="max-w-full max-h-auto lg:max-h-4 lg:max-w-auto">
            <Link href={item.link || "#"} passHref>
              <Image
                src={item.url || "/"}
                width={160}
                height={36}
                alt={item.alt || "Mention"}
              />
            </Link>
          </section>
        ))}
      </section>
    </section>
  );
};

export default MediaMentions;

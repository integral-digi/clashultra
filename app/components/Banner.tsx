//this component renders the app banners

"use client"
import Image from "next/image";
import { useContent } from "../context/ContentContext";
import Link from "next/link";

const Banner: React.FC = () => {
  const content = useContent();

  // Show a loading state if content is not available yet
  if (!content || !content.bannerImages) {
    return <section />;
  }

  const { bannerImages } = content;

  return (
    <section className="flex items-center justify-center flex-wrap lg:flex-1 gap-5">
      {bannerImages.map((item) => (
        <section key={item.id} className="max-w-full">
          <Link href={item.link || "#"} passHref>
              <Image
                src={item.url || "/"}
                width={160}
                height={48}
                alt={item.alt || "Banner Image"}
              />
          </Link>
        </section>
      ))}
    </section>
  );
};

export default Banner;

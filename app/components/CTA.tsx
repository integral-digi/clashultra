"use client"
import Image from "next/image";
import { useContent } from "../context/ContentContext";
import { titleStyle } from "./About";

const checkMark = "/assets/checkcircle.svg";

const CTA: React.FC = () => {
  const content = useContent();

  if (!content || !content.cta) {
    return <section></section>;
  }

  const { cta } = content;

  return (
    <section className="w-full bg-yellow-50 relative overflow-hidden">
      <section className="space-y-12 p-36 lg:p-8 flex flex-col items-center justify-center z-20">
        <h2 className={`text-black w-1/2 lg:w-full text-center ${titleStyle}`}>
          {cta.title}
        </h2>
        <section className="space-y-8 flex items-center justify-center flex-col">
          <button className="flex items-center justify-center space-x-2 rounded-full px-4 py-2 bg-blue-950 border-4 border-purple-800 drop-shadow-md shadow-purple-800">
            {cta.icon?.url ? (
              <Image
                src={cta.icon.url}
                width={32}
                height={32}
                alt={cta.icon.alt || "icon"}
              />
            ) : (
              <Image
                src="/assets/discord.svg" // A default icon to fall back on
                width={32}
                height={32}
                alt="default icon"
              />
            )}
            <p className="text-base font-bold text-white">
              {cta.buttonText}
            </p>
          </button>
          <section className="flex flex-wrap items-center justify-center space-x-6">
            {cta.features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center space-x-2"
              >
                <Image
                  src={checkMark}
                  width={32}
                  height={32}
                  alt="check"
                />
                <p className="text-base text-black font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </section>
        </section>
      </section>
      <Image
        src="/assets/decor2.svg"
        width={480}
        height={540}
        alt="abstract"
        className="absolute left-0 -top-64 lg:hidden"
      />
      <Image
        src="/assets/decor.svg"
        width={480}
        height={540}
        alt="abstract"
        className="absolute right-0 -bottom-4 z-0"
      />
    </section>
  );
};

export default CTA;

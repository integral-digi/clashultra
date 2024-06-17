//this component renders the hero image

"use client"
import { useContent } from '../context/ContentContext';
import Banner from './Banner';

// Define reusable style classes
const sectionStyle = "w-full flex justify-center items-center";
export const titleStyle = "font-bold text-6xl text-center";
export const labelStyle = "text-3xl text-stone-300 text-center capitalize line-through";

const About: React.FC = () => {
  const content = useContent();

  // Show a loading state if content is not available yet
  if (!content || !content.about) {
    return <div>Loading...</div>;
  }

  const { about } = content;

  return (
    <section className="w-full space-y-8 flex flex-col justify-center items-center">
      {/* Section for the label */}
      <div className="flex items-center space-x-2">
        <div className="rounded-full border-2 border-blue-950 w-4 h-4" />
        <h6 className={labelStyle}>
          {about.label}
        </h6>
      </div>

      {/* Section for the title */}
      <div className={sectionStyle}>
        <h2 className={titleStyle}>
          {about.title}
        </h2>
      </div>

      {/* Section for the subtitle */}
      <div className={sectionStyle}>
        <h2 className="font-normal text-xl text-white text-center">
          {about.subtitle}
        </h2>
      </div>

      {/* Section for the banner */}
      <div className={sectionStyle}>
        <Banner />
      </div>

      {/* Section for the main text */}
      <div className={sectionStyle}>
        <h2 className="font-normal text-xl text-white text-center w-[85%]">
          {about.text}
        </h2>
      </div>
    </section>
  );
};

export default About;


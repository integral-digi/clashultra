"use client"
import { useContent } from '../context/ContentContext';
import { motion } from 'framer-motion';
import Banner from './Banner';

// Define reusable style classes
const sectionStyle = "w-full flex justify-center items-center";
export const titleStyle = "font-bold text-6xl text-center lg:text-3xl";
export const labelStyle = "text-3xl text-stone-300 text-center capitalize line-through lg:text:lg";

const About: React.FC = () => {
  const content = useContent();

  // Show a loading state if content is not available yet
  if (!content || !content.about) {
    return <section />;
  }

  const { about } = content;

  return (
    <section className="w-full space-y-8 flex flex-col justify-center items-center">

      {/* Section for the title */}
      <section className={sectionStyle}>
        <h2 className={titleStyle}>
          {about.title}
        </h2>
      </section>

      {/* Section for the subtitle */}
      <section className={sectionStyle}>
        <h2 className="font-normal text-xl text-white text-center lg:text-base">
          {about.subtitle}
        </h2>
      </section>

      {/* Section for the banner */}
      <section className={sectionStyle}>
        <Banner />
      </section>

      {/* Section for the main about text with fade-in effect */}
      <motion.section
        className={sectionStyle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5 }} 
      >
        <p className="font-normal text-xl text-white text-center w-[85%] lg:w-full lg:text-lg">
          {about.text}
        </p>
      </motion.section>
    </section>
  );
};

export default About;

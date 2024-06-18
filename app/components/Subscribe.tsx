//this component renders the subscribe form

"use client"
import { useContent } from '../context/ContentContext';
import { titleStyle } from "./About";

const Subscribe: React.FC = () => {
  const content = useContent();

  // Show a loading state if content is not available yet
  if (!content) {
    return <div>Loading...</div>;
  }

  const { subscribe } = content;

  return (
    <section className="space-y-20 w-3/4 mx-auto lg:w-full">
      {/* Section for the subscription title */}
      <section className="w-full flex items-center justify-center">
        <h2 className={`w-full lg:w-full text-center ${titleStyle}`}>
          {subscribe?.title}
        </h2>
      </section>

      {/* Section for the email input and submit button */}
      <section className="flex items-center relative w-full">
        <input
          type="email"
          className="pl-16 h-20 w-full bg-white rounded-full lg:pl-8 placeholder:text-black placeholder:capitalize font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={subscribe?.placeholder || "Enter your email"}
        />
        <button className="rounded-full h-12 px-4 bg-blue-950 absolute right-4 bottom-4 hover:bg-blue-800 transition-colors duration-300">
          <p className="text-white font-medium text-lg capitalize lg:text-base">
            {subscribe?.buttonText || "Subscribe"}
          </p>
        </button>
      </section>
    </section>
  );
};

export default Subscribe;

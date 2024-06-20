"use client"
import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { titleStyle } from "./About";

const Subscribe: React.FC = () => {
  const content = useContent();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Show a loading state if content is not available yet
  if (!content) {
    return <section />;
  }

  const { subscribe } = content;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
  
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
  
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to subscribe. Please try again.");
    }
  };
  

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <section className="space-y-20 w-full mx-auto lg:w-full">
      {/* Section for the subscription title */}
      <section className="w-full flex items-center justify-center">
        <h2 className={`w-full lg:w-full text-center ${titleStyle}`}>
          {subscribe?.title}
        </h2>
      </section>

      {/* Section for the email input and submit button */}
      <section className="flex items-center relative w-full">
        <form onSubmit={handleSubmit} className="w-full flex">
          <input
            type="email"
            className="pl-16 h-20 w-full bg-white text-black rounded-full lg:pl-8 placeholder:text-black placeholder:capitalize font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={subscribe?.placeholder || "Enter your email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="rounded-full h-12 px-4 bg-blue-950 absolute right-4 bottom-4 hover:bg-blue-800 transition-colors duration-300"
            disabled={status === "loading"}
          >
            <p className="text-white font-medium text-lg capitalize lg:text-base">
              {subscribe?.buttonText || "Subscribe"}
            </p>
          </button>
        </form>
      </section>

      {/* Status messages */}
      {status === "error" && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      {status === "success" && (
        <p className="text-green-500 text-center">Subscription successful!</p>
      )}
    </section>
  );
};

export default Subscribe;

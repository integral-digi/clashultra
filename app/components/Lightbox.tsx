"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useContent } from "../context/ContentContext";

interface LightboxProps {
  media: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Lightbox = ({ media, isOpen, setIsOpen }: LightboxProps) => {
  const closeLightbox = () => {
    setIsOpen(false);
  };

  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && mediaRef.current) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 1000000); 

      mediaRef.current.addEventListener("ended", () => {
        clearTimeout(timeout);
        setIsOpen(false);
      });
    }
  }, [isOpen, setIsOpen]);

  const content = useContent();

  if(!content || !content?.color) {
    return <section />
  }

  const { color } = content;

  console.log(color.backgroundColor);

  return (
    <section className={`w-full flex items-center justify-center  lg:w-screen h-screen lg:left-0 bg-zinc-800 ${isOpen ? 'block' : 'hidden'}`}>
      {isOpen && (
        <section className="fixed top-0 w-[80%] h-auto flex items-center justify-center z-50 aspect-auto m-auto lg:w-full lg:h-full lg:block">
          <section className="lightbox-overlay fixed top-0 left-0 w-full h-full bg-black opacity-80" onClick={closeLightbox}></section>
          <section className="lightbox rounded-lg h-screen w-full relative">
              <Image
                src={media} 
                alt="lightbox" 
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                ref={mediaRef as React.RefObject<HTMLImageElement>}
              />
            <button onClick={closeLightbox} className={`${color?.textColor} absolute top-0 right-0 m-4  px-4 py-2 rounded-md font-medium ${color.backgroundColor}`}>
              Close
            </button>
          </section>
        </section>
      )}
    </section>
  );
};

export default Lightbox;

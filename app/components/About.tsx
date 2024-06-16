//this component renders the hero image
"use client"
import Image from "next/image";
import { useContent } from '../context/ContentContext';

const About: React.FC  = () => {
    const content = useContent();

    if (!content) {
        return <div></div>;
    }

    const {about} = content;

    return (
        <section className="w-full">
           <p className="">
                {about.label}
           </p>
        </section>
    );
};

export default About;

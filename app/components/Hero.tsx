//this component renders the hero image
"use client"
import Image from "next/image";
import { useContent } from '../context/ContentContext';

const Hero: React.FC  = () => {
    const content = useContent();

    if (!content) {
        return <div>Loading...</div>;
    }

    const {hero} = content;

    return (
        <section className="w-full">
            <section className="min-w-full">
                <Image
                    src={hero.url}
                    width={1440}
                    height={800}
                    alt={hero.alt}
                />
            </section>
        </section>
    );
};

export default Hero;

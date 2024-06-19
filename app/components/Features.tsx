"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";
import { labelStyle, titleStyle } from "./About";

const Features: React.FC = () => {
    const content = useContent();

    if (!content || !content.features) {
        return <section></section>;
    }

    const { features } = content;

    return (
    <section className="w-full flex flex-col items-center justify-center py-8 space-y-20">
        <section className="space-y-3 w-1/2 flex flex-col items-center justify-center lg:w-full">
            <section className="flex items-center space-x-2 mb-8">
                <section className="rounded-full border-2 border-blue-950 w-4 h-4" />
                <h6 className={labelStyle}>
                    {features.label}
                </h6>
            </section>
            <h2 className={titleStyle}>
                {features.title}
            </h2>
        </section>
        <motion.section 
            className="flex flex-wrap items-center gap-12 justify-center lg:flex-col"
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            exit={{ opacity: 0 }}
        >
            {features.card.map((item: any) => (
                <motion.section
                    key={item.id}
                    className={`w-1/4 h-full rounded-2xl py-8 pl-8 pr-4 lg:w-full ${
                    item.id === 1
                        ? `${item.textColor} font-medium ${item.backgroundColor}`
                        : item.id === 2
                        ? `${item.textColor} font-medium ${item.backgroundColor}`
                        : `${item.textColor} font-medium ${item.backgroundColor}`
                    }`}
                    whileHover={{ scale: 1.05 }}
                >
                    <section className="space-y-8">
                        <section className="space-y-2 w-full">
                            <h3 className="text-3xl font-bold">{item.title}</h3>
                            <p className="text-xl font-normal">{item.subtitle}</p>
                        </section>
                        <section className="float-right">
                            <Image
                                src={item.illustration}
                                width={250}
                                height={250}
                                layout="responsive"
                                objectFit="contain"
                                alt={item.alt}
                            />
                        </section>
                    </section>
                </motion.section>
            ))}
        </motion.section>
    </section>
  );
};

export default Features;

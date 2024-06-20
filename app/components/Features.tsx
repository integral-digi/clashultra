"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";
import { titleStyle } from "./About";
import ScrollButton from "./ScrollButton";

const Features: React.FC = () => {
    const content = useContent();

    if (!content || !content.features) {
        return <section />;
    }

    const { features } = content;

    return (
    <section className="w-full flex flex-col items-center justify-center py-8 space-y-20 relative">
        <section className="space-y-3 w-1/2 flex flex-col items-center justify-center lg:w-full">
            <h2 className={titleStyle}>
                {features.title}
            </h2>
        </section>
        <ScrollButton scrollAmount={400} classSelector=".features" operator="-" /> 
        <ScrollButton scrollAmount={400} classSelector=".features" operator="+" /> 
        <motion.section 
            className="features w-full flex items-center space-x-8 overflow-x-scroll scrollbar-hide"
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            exit={{ opacity: 0 }}
        >
            {features.card.map((item: any) => (
                <motion.section
                    key={item.id}
                    className={`w-fit min-h-96 rounded-2xl py-8 pl-8 pr-4 xl:w-full ${
                    item.id === 1
                        ? `${item.textColor} font-medium ${item.backgroundColor}`
                        : item.id === 2
                        ? `${item.textColor} font-medium ${item.backgroundColor}`
                        : `${item.textColor} font-medium ${item.backgroundColor}`
                    }`}
                    whileHover={{ scale: 1.05 }}
                >
                    <section className="space-y-8 w-64">
                        <section className="space-y-2 w-full">
                            <h3 className="text-3xl font-bold">{item.title}</h3>
                            <p className="text-lg font-normal">{item.subtitle}</p>
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

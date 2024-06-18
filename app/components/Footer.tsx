"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";
import Image from "next/image";

// Footer component to render the footer section of the application
const Footer: React.FC = () => {
    const content = useContent();

    // Show a loading state if content is not available yet
    if (!content || !content.footer) {
        return <section></section>;
    }

    const { footer } = content;

    return (    
        <motion.section 
            className="space-y-14"
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ delay: 0.5, duration: 3 }}
            exit={{ opacity: 0 }}
        >
            <section className="flex items-start space-x-32 px-24 lg:flex-col lg:space-y-16 lg:px-8 lg:space-x-0">
                {/* Logo section */}
                <section className="w-56 h-16 lg:h-8 lg:w-auto">
                    <Image 
                        src={footer.logo.url || "/"}
                        width={216}
                        height={64}
                        alt={footer.logo.alt}
                    />
                </section>

                {/* Links and Social Media section */}
                <section className="space-x-24 flex items-start lg:flex-col lg:space-x-0 lg:space-y-16">
                    <section className="space-y-6">
                        <h4 className="font-medium text-lg text-white">
                            {footer.firstDiv.title}
                        </h4>
                        <section className="space-y-4">
                            {footer.firstDiv.links.map((link) => (
                                <Link key={link.id} href={link.url} passHref>
                                    <p className="text-sm font-medium pb-4">
                                        {link.name}
                                    </p>
                                </Link>
                            ))}
                        </section>
                    </section>
                    <section className="space-y-6">
                        <h4 className="font-medium text-lg text-white">
                            Socials
                        </h4>
                        <section className="space-x-6 flex items-center">
                            {footer.secondDiv.map((social) => (
                                <Link key={social.id} href={social.link || "#"} passHref target="_blank">
                                    <Image
                                        src={social.url || "/"}
                                        width={18}
                                        height={18}
                                        alt={social.alt}
                                    />
                                </Link>
                            ))}
                        </section>
                    </section>
                </section>
            </section>

            {/* Horizontal rule and copyright text */}
            <section className="flex flex-col justify-center items-center space-y-12">
                <hr className="border-white opacity-5 w-full" />
                <p className="text-sm font-medium text-white">
                    {footer.copyright}
                </p>
            </section>
        </motion.section>
    );
};

export default Footer;

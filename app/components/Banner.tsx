//this component renders the app banners
"use client"
import Image from "next/image";
import { useContent } from "../context/ContentContext";
import Link from "next/link";

const Banner: React.FC = () => {
    const content = useContent();

    if(!content) {
        return <p></p>
    }

    const { bannerImages } = content;

    return (
        <section className="flex items-center space-x-5">
            {bannerImages.map((item: any) => (
                <section key={item.id} className="max-w-full">
                    <Link href={item.link} passHref>
                        <Image
                            src={item.url}
                            width={160}
                            height={50}
                            alt={item.alt}
                        />
                    </Link>
                </section>
            ))}
        </section>
    )
}

export default Banner;
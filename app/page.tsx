//renders the main page
"use client"
import About from "./components/About";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import MediaMentions from "./components/MediaMention";
import Subscribe from "./components/Subscribe";
import TrailerImages from "./components/TrailImages";
import Trailer from "./components/Trailer";
import { useContent } from "./context/ContentContext";

const Home = () => {
  const content = useContent();

  if(!content || !content.color) {
    return <section></section>
  }

  const { color } = content;

  return (
    <main className={`w-full overflow-hidden ${color.backgroundColor}`}>
      <section className="pb-16 space-y-40">
        <Hero />
        <section className="px-[16%] w-full flex flex-col justify-center items-center space-y-40 lg:px-10">
          <Banner />
          <section className="space-y-12 flex flex-col justify-center items-center">
            <Trailer />
            <TrailerImages />
          </section>
          <About />
          <Features />
          <Subscribe />
          <MediaMentions />
          <section className="py-16">
            <Footer />
          </section>
        </section>
      </section>
    </main>
  )
}

export default Home;
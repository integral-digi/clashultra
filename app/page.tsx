//renders the main page
import About from "./components/About";
import Banner from "./components/Banner";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import MediaMentions from "./components/MediaMention";
import Subscribe from "./components/Subscribe";
import TrailerImages from "./components/TrailImages";
import Trailer from "./components/Trailer";

const Home = () => {
  return (
    <main className="w-full bg-stone-900 overflow-hidden">
      <section className="pb-16 space-y-40">
        <Hero />
        <section className="px-24 w-full flex flex-col justify-center items-center space-y-40 lg:px-8">
          <Banner />
          <MediaMentions />
          <section className="space-y-16">
            <Trailer />
            <TrailerImages />
          </section>
          <About />
          <Features />
          <Subscribe />
        </section>
        <CTA />
      </section>
      <section className="pb-16">
        <Footer />
      </section>
    </main>
  )
}

export default Home;
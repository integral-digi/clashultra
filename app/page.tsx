//renders the main page
import About from "./components/About";
import Banner from "./components/Banner";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero"
import Subscribe from "./components/Subscribe";
import TrailerImages from "./components/TrailImages";
import Trailer from "./components/Trailer";

const Home = () => {
  return (
    <main className="w-full bg-stone-900">
      <section className="pb-16 space-y-40">
        <Hero />
        <section className="px-16 w-full flex flex-col justify-center items-center space-y-40">
          <Banner />
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
    </main>
  )
}

export default Home;
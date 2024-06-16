//
import Banner from "./components/Banner";
import Hero from "./components/Hero"

const Home = () => {
  return (
    <main className="w-full bg-[#2A1013]">
      <Hero />
      <section className="px-16 w-full flex flex-col justify-center items-center">
        <Banner />

      </section>
    </main>
  )
}

export default Home;
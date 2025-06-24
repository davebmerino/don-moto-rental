import About from "../components/About";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Rentnow from "../components/Rentnow";
import Rentsteps from "../components/Rentsteps";
import Reviews from "../components/Reviews";
import Selectmoto from "../components/Selectmoto";
import Service from "../components/Service";

export default function Home() {
  return (
    <div>
      <>
        <Hero />
        <Rentsteps />
        <About />
        <Service />
        <Rentnow />
        <Selectmoto />
        <Reviews />
      </>
    </div>
  );
}

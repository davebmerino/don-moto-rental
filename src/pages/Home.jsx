import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
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
        <ContactUs />
        <Reviews />
        <Footer />
      </>
    </div>
  );
}

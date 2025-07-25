import AboutSection from "./components/about/about";
import Collaboration from "./components/collaboration/collaboration";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Testimonial from "./components/testimonial/testimonial";
import "./main.css";

export default function Main() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Collaboration/>
    </>
  );
}

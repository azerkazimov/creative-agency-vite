import AboutSection from "./components/about/about";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import "./main.css";

export default function Main() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services/>
      <Portfolio/>
    </>
  );
}

import SectionHeader from "@/components/section-header/section-header";
import Slider from "@/components/slider/slider";

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <SectionHeader
          highlight="Our Portfolio"
          content="What do we do"
          position="center"
          description="all projects that we have already done , proven can help to use more comfortable, then can used by client from our business"
        />
        <Slider/>
      </div>
    </section>
  );
}

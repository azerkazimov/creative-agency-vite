import SectionHeader from "@/components/section-header/section-header";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./testimonial-card";

export default function Testimonial() {
  return (
    <div className="container">
      <SectionHeader
        highlight="Testimonial"
        content="People Talk about us"
        position="center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

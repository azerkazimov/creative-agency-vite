import type { Testimonial } from "@/types/testimonials/testimonial";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-[#0B0F15] backdrop-blur-sm rounded-xl w-[380px] h-[335px] flex flex-col gap-8 justify-center px-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="rounded-full w-[70px] h-[70px] bg-white text-black/50 flex items-center justify-center">
          <span className="text-black font-bold text-xl">
            {testimonial.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex flex-col">
          <div className="text-xl text-white font-semibold">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-400">{testimonial.position}</div>
        </div>
      </div>
      <div className="text-gray-300/70 text-base leading-relaxed">
        {testimonial.description}
      </div>
    </div>
  );
}

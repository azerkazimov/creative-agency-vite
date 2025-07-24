import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./slider.css";
import { portfolio } from "@/data/portfolio";
import SliderCard from "./slider-card";

export default function Slider() {
  return (
    <div className="slider-section">
      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="slider-custom"
        >
          {portfolio.map((slider) => (
            <SwiperSlide key={slider.id} className="slider-frame">
              <SliderCard slider={slider} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

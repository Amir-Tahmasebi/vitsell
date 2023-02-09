import clsx from "clsx";
import { Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderWrapper } from "./type";

export function Wrapper({
  children,
  slidesPerView,
  dir,
  className,
}: SliderWrapper) {
  return (
    <Swiper
      modules={[Navigation]}
      className={className}
      slidesPerView={slidesPerView}
      autoplay
      dir={dir}
      breakpoints={{
        // 1400: { slidesPerView: 7 },
        // 992: { slidesPerView: 3 },
        // 760: { slidesPerView: 2 },
        // 220: {
        //   slidesPerView: 1,
        // },
      }}
    >
      {children}
    </Swiper>
  );
}

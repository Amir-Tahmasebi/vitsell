import clsx from "clsx";
import { Navigation, Pagination } from "swiper";
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
      autoplay
      navigation={true}
      loop={true}
      modules={[Navigation, Pagination]}
      className={className}
      slidesPerView={slidesPerView}
      dir={dir}
    >
      {children}
    </Swiper>
  );
}

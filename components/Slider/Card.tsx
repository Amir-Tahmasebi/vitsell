import { SwiperSlide } from "swiper/react";
import { SliderSlideProps } from "./type";

export function Slide({ children }: SliderSlideProps) {
  return <SwiperSlide>{children}</SwiperSlide>;
}

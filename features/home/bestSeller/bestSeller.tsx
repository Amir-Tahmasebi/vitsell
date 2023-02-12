import { AiOutlineStar as Star } from "react-icons/ai";
import { SwiperSlide } from "swiper/react";
import { shoes } from "@/public";
import {
  Slider,
  BannerCardSize,
  WrapperTitle as Title,
  BannerCard as Card,
} from "@/components";
import styles from "./styles.module.scss";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function BestSeller() {
  const renderBestSellerItems = nums.map((num) => (
    <SwiperSlide key={num}>
      <Card
        price={4343000}
        src={shoes}
        discount={34}
        size={BannerCardSize.medium}
        className={styles["home-slider-card"]}
      />
    </SwiperSlide>
  ));
  
  return (
    <>
      <Title Icon={<Star />} title="پرفروش ترین محصولات" isShowMore />
      <Slider.Wrapper
        className={styles["home-slider"]}
        dir="rtl"
        slidesPerView={6}
      >
        {renderBestSellerItems}
      </Slider.Wrapper>
    </>
  );
}

import Image from "next/image";
import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { asus, booloori, mobile, sanford } from "@/public";
import { BannerCard, Slider } from "@/components";

const nums = [1, 2, 3, 4];

export function TopBanner() {
  const bannerSlider = nums.map((num) => (
    <SwiperSlide key={num}>
      <Image src={mobile} alt="" className={styles["top-banner-item"]} />
    </SwiperSlide>
  ));

  const renderSmallSlider = nums.map((num) => (
    <SwiperSlide key={num}>
      <BannerCard
        bookmark={false}
        src={sanford}
        price={4343000}
        title="همزن برقی Sanford"
        className={styles["top-banner-card"]}
        discount={34}
      />
    </SwiperSlide>
  ));
  return (
    <div className={styles["top-banner"]}>
      <div>
        <Slider.Wrapper
          dir="rtl"
          slidesPerView={1}
          className={styles["top-banner-swiper"]}
        >
          {bannerSlider}
        </Slider.Wrapper>
      </div>
      <Slider.Wrapper
        dir="rtl"
        slidesPerView={1}
        className={styles["top-banner-small-swiper"]}
      >
        {renderSmallSlider}
      </Slider.Wrapper>

      <Image
        src={booloori}
        alt=""
        className={clsx(styles["top-banner-item"], "mt-16")}
      />
      <Image
        src={asus}
        alt=""
        className={clsx(styles["top-banner-item"], "mt-16")}
      />
    </div>
  );
}

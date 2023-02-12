import { CiDiscount1 as DiscountIcon } from "react-icons/ci";
import { DiscountsProps } from "./type";
import {
  Slider,
  WrapperTitle,
  BannerCard as Card,
  BannerCardSize,
} from "@/components";
import { SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { shoes } from "@/public";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function Discounts({}: DiscountsProps) {
  const renderDiscountItems = nums.map((num) => (
    <SwiperSlide key={num}>
      <Card
        price={4343000}
        src={shoes}
        discount={34}
        className={styles["home-slider-card"]}
        size={BannerCardSize.medium}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <WrapperTitle
        Icon={<DiscountIcon />}
        title="تخفیف های ویتسل"
        isShowMore
      />
      <div>
        <Slider.Wrapper
          className={styles["home-slider"]}
          dir="rtl"
          slidesPerView={6}
        >
          {renderDiscountItems}
        </Slider.Wrapper>
      </div>
    </>
  );
}

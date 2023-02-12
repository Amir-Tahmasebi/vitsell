import Image from "next/image";
import { Price, PriceDiscount, BannerCardSize } from "@/components";
import styles from "./styles.module.scss";
import { bookmarkFire } from "@/public";


type CardProps = {
  src: any;
  title: string;
  price: number;
  discount?: number;
};

export function Card({ price, src, title, discount }: CardProps) {
  return (
    <div className={styles["amazing-card"]}>
      <div>
        <Image src={src} alt={title} className={styles["amazing-card-img"]} />
      </div>
      <div className={styles["amazing-card-content"]}>
        <span className={styles["amazing-card-content-title"]}>{title}</span>
        <div className={styles["amazing-card-content-price-title"]}>
          <Price price={price} size={BannerCardSize.medium} direction="left" />
        </div>
        {discount && (
          <div className={styles["amazing-card-content-discount-title"]}>
            <PriceDiscount
              price={price}
              discount={discount}
              size={BannerCardSize.medium}
            />
          </div>
        )}
      </div>
      <Image
        src={bookmarkFire}
        alt=""
        className={styles["amazing-card-bookmark"]}
      />
    </div>
  );
}

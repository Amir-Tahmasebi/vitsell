import clsx from "clsx";
import Image from "next/image";
import { BannerCardProps, BannerCardSize } from "./type";
import { Price, PriceDiscount } from "./../";
import styles from "./styles.module.scss";
import { bookmarkFire } from "@/public";

export function BannerCard({
  src,
  title,
  price,
  bookmark,
  discount,
  className,
  size,
}: BannerCardProps) {
  const classList = clsx(
    styles["banner-card"],
    size === BannerCardSize.medium && styles["banner-card-medium"],
    className
  );

  return (
    <div className={classList}>
      <div className={styles["banner-card-img"]}>
        <Image src={src} alt={title ? title : ""} />
      </div>
      <p className={styles["banner-card-title"]}>{title}</p>
      <div className={styles["banner-card-price"]}>
        <Price price={price} direction="left" size={size} />
        {discount && (
          <PriceDiscount price={price} discount={discount} size={size} />
        )}
      </div>
      {bookmark && <Image src={bookmarkFire} alt=""  className={styles['banner-card-bookmark']}/>}
    </div>
  );
}

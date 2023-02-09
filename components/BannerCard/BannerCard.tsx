import clsx from "clsx";
import Image from "next/image";
import { BannerCardProps } from "./type";
import { Price, PricePercent } from "./../";
import styles from "./styles.module.scss";

export function BannerCard({
  src,
  title,
  price,
  bookmark,
  percent,
  className,
}: BannerCardProps) {
  return (
    <div className={clsx(styles["banner-card"], className)}>
      <div className={styles["banner-card-img"]}>
        <Image src={src} alt={title} />
      </div>
      <p className={styles["banner-card-title"]}>{title}</p>
      <div className={styles["banner-card-price"]}>
        <Price price={price} direction="left" />
      {percent && <PricePercent price={price} percent={percent} />}
      </div>
    </div>
  );
}

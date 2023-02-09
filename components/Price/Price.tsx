import { BannerCardSize } from "../BannerCard";
import { PriceProps } from "./type";
import styles from "./styles.module.scss";
import clsx from "clsx";

export function Price({ price, direction, size }: PriceProps) {
  const classList = clsx(
    styles["price"],
    direction === "left" && styles["price-ltr"],
    size === BannerCardSize.medium && styles["price-medium"]
  );

  return (
    <div className={classList}>
      <span className={styles["price-price"]}>{price}</span>
      <span className={styles["price-toman"]}>نومان</span>
    </div>
  );
}

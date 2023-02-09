import { PriceProps } from "./type";
import styles from "./styles.module.scss";
import clsx from "clsx";

export function Price({ price, direction }: PriceProps) {
  const classList = clsx(
    styles["price"],
    direction === "left" && styles["price-ltr"]
  );
  return (
    <div className={classList}>
      <span className={styles["price-price"]}>{price}</span>
      <span className={styles["price-toman"]}>نومان</span>
    </div>
  );
}

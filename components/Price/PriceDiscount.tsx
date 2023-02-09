import clsx from "clsx";
import { Button, ButtonComponentColor, ButtonComponentSize, BannerCardSize } from "..";
import { PriceDiscountProps, } from "./type";
import styles from "./styles.module.scss";

export function PriceDiscount({ discount, price, size }: PriceDiscountProps) {
  const classList = clsx(
    styles["price-discount"],
    size === BannerCardSize.medium && styles["price-discount-medium"]
  );

  return (
    <div className={classList}>
      <Button
        color={ButtonComponentColor.danger}
        size={ButtonComponentSize.medium}
        onClick={() => {}}
      >
        {discount}%
      </Button>
      <span className={styles["price-discount-value"]}>{price}</span>
    </div>
  );
}

import { Button, ButtonComponentColor, ButtonComponentSize } from "./../";
import { PricePercentProps } from "./type";
import styles from './styles.module.scss';

export function PricePercent({ percent, price }: PricePercentProps) {
  return (
    <div className={styles['price-percent']}>
      <Button
        color={ButtonComponentColor.danger}
        size={ButtonComponentSize.medium}
        onClick={() => {}}
      >
        {percent}%
      </Button>

      <span className={styles['price-percent-value']}>{price}</span>
    </div>
  );
}

import Image from "next/image";
import { asus, booloori } from "@/public";
import styles from './styles.module.scss';

export function DiscountBanner() {
  return (
    <div className={styles['discount-banner']}>
      <Image src={asus} alt="" className={styles['discount-banner-item']}/>
      <Image src={booloori} alt="" className={styles['discount-banner-item']}/>
    </div>
  );
}

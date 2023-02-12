import Image from "next/image";
import styles from "./styles.module.scss";
import { bag, dandon, mandegar } from "@/public";

export function BottomBanner() {
  return (
    <div className={styles["bottom-banner"]}>
      <div className={styles["bottom-banner-first"]}>
        <Image src={bag} alt="" className={styles["bottom-banner-img"]} />
      </div>
      <div className={styles["bottom-banner-last"]}>
        <Image src={mandegar} alt="" className={styles["bottom-banner-img"]} />
        <Image src={dandon} alt="" className={styles["bottom-banner-img"]} />
      </div>
    </div>
  );
}

import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { asus, booloori, mobile, sanford } from "@/public";
import { BannerCard } from "@/components";

export function TopBanner() {
  return (
    <div className={styles["top-banner"]}>
      <Image src={mobile} alt="" className={styles["top-banner-item"]} />
      <BannerCard
        bookmark={false}
        src={sanford}
        price={4343000}
        title="همزن برقی Sanford"
        className={styles["top-banner-card"]}
        discount={34}
      />
      <Image
        src={booloori}
        alt=""
        className={clsx(styles["top-banner-item"], "mt-16")}
      />
      <Image
        src={asus}
        alt=""
        className={clsx(styles["top-banner-item"], "mt-16")}
      />
    </div>
  );
}

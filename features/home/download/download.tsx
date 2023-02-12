import Image from "next/image";
import { downloadMobile } from "@/public";
import styles from "./styles.module.scss";
import { Item } from "./item";

const nums = [1, 2, 3];

export function Download() {
  const renderItems = nums.map((num) => <Item key={num} />);

  return (
    <div className={styles["download"]}>
      <div className={styles["download-content"]}>
        <p className={styles["download-content-title"]}>
          ویتسل را همیشه همراه داشته باشید!
        </p>
        <div className={styles["download-content-items"]}>{renderItems}</div>
      </div>
      <Image src={downloadMobile} alt="" className={styles["download-img"]} />
    </div>
  );
}

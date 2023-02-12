import { AiFillApple as AppleIcon } from "react-icons/ai";
import styles from "./styles.module.scss";

export function Item() {
  return (
    <div className={styles["item"]}>
      <AppleIcon className={styles["item-icon"]} />
      <span className={styles["item-text"]}>دانلود مستقیم</span>
    </div>
  );
}

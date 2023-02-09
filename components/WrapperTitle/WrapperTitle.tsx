import { MdOutlineKeyboardArrowLeft as ArrowLeft } from "react-icons/md";
import styles from "./styles.module.scss";
import { WrapperTitleProps } from "./type";

export function WrapperTitle({ title, Icon, isShowMore }: WrapperTitleProps) {
  return (
    <div className={styles["title-wrapper"]}>
      <div className={styles["title"]}>
        <span className={styles["title-icon"]}>{Icon}</span>
        <span className={styles["title-text"]}>{title}</span>
      </div>
      {isShowMore && (
        <div className={styles["show-more"]}>
          <span className={styles["show-more-text"]}>مشاهده همه</span>
          <ArrowLeft className={styles["show-more-icon"]} />
        </div>
      )}
    </div>
  );
}

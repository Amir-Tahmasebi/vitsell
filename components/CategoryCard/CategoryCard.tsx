import Image from "next/image";
import { CategoryCardProps } from "./type";
import styles from "./styles.module.scss";

export function CategoryCard({ src, title }: CategoryCardProps) {
  return (
    <div className={styles["category-card"]}>
      <Image src={src} alt={title} className={styles["category-card-img"]} />
      <span className={styles["category-card-text"]}>{title}</span>
    </div>
  );
}

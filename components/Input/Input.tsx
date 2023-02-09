import styles from "./styles.module.scss";
import { InputProps } from "./type";

export function Input({ placeholder, Icon, ...rest }: InputProps) {
  return !Icon ? (
    <input {...rest} className={styles["input"]} placeholder={placeholder} />
  ) : (
    <div className={styles['input-wrapper']}>
      <input {...rest} className={styles["input"]} placeholder={placeholder} />
      <Icon className={styles["input-icon"]} />
    </div>
  );
}

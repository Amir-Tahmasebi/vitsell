import clsx from "clsx";
import { ButtonProps, ButtonComponentSize, ButtonComponentColor } from "./type";
import styles from "./styles.module.scss";

export function Button({
  onClick,
  size,
  children,
  color,
  ...rest
}: ButtonProps) {
  const classList = clsx(
    styles["button"],
    size === ButtonComponentSize.large
      ? styles["button-large"]
      : styles["button-medium"],
    color === ButtonComponentColor.danger && styles["button-danger"],
    color === ButtonComponentColor.info && styles["button-info"],
    color === ButtonComponentColor.warning && styles["button-warning"]
  );

  return (
    <button {...rest} className={classList} onClick={onClick}>
      {children}
    </button>
  );
}

import clsx from "clsx";
import styles from "./styles.module.scss";
import { FooterProps } from "./type";

export function Footer({ className }: FooterProps) {
  const classList = clsx(styles["header"], className);

  return <footer className={classList}>Footer</footer>;
}

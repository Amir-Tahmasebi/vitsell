import {
  BsTelegram as TelegramIcon,
  BsInstagram as InstagramIcon,
} from "react-icons/bs";
import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { FooterProps } from "./type";
import { vitsellLarge as logo } from "@/public";
import { menuItems, products, relationItems } from "./data";
import { neshan, ethad } from "@/public";

export function Footer({ className }: FooterProps) {
  const classList = clsx(styles["footer"], className);

  const renderItems = menuItems.map((item, index) => (
    <li
      key={item.id}
      className={clsx(
        styles["footer-menu-item"],
        index === 0 && styles["footer-menu-title"]
      )}
    >
      {item.text}
    </li>
  ));

  const renderProducts = products.map((item, index) => (
    <li
      key={item.id}
      className={clsx(
        styles["footer-menu-item"],
        index === 0 && styles["footer-menu-title"]
      )}
    >
      {item.text}
    </li>
  ));
  const renderRelationItems = relationItems.map((r) => (
    <div key={r.id} className={styles["footer-relationship-item"]}>
      <TelegramIcon className={styles["footer-relationship-item-icon"]} />
      <span className={styles["footer-relationship-item-text"]}>{r.text}</span>
    </div>
  ));
  return (
    <footer className={classList}>
      <div className={styles["footer-logo"]}>
        <Image src={logo} alt="" className={styles["footer-logo-img"]} />
        <p className={styles["footer-logo-title"]}>ویتسل</p>
        <p className={styles["footer-logo-text"]}>
          صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در
          بستری مطمئن
        </p>
      </div>
      <ul className={styles["footer-menu"]}>{renderItems}</ul>
      <ul className={styles["footer-menu"]}>{renderProducts}</ul>
      <div className={styles["footer-relationship"]}>
        <span className={styles["footer-relationship-title"]}>
          ارتباط با ویتسل
        </span>
        <div className={styles["footer-relationship-items"]}>
          {renderRelationItems}
        </div>
        <div className={styles["footer-relationship-app"]}>
          <span className={styles["footer-relationship-app-icon"]}>
            <InstagramIcon
              className={styles["footer-relationship-app-icon-svg"]}
            />
          </span>
          <span className={styles["footer-relationship-app-icon"]}>
            <InstagramIcon
              className={styles["footer-relationship-app-icon-svg"]}
            />
          </span>
          <span className={styles["footer-relationship-app-icon"]}>
            <InstagramIcon
              className={styles["footer-relationship-app-icon-svg"]}
            />
          </span>
        </div>
      </div>
      <div className={styles["footer-namad"]}>
        <div className={styles["footer-namad-img-wrapper"]}>
          <Image src={neshan} alt="" />
        </div>
        <div className={styles["footer-namad-img-wrapper"]}>
          <Image src={ethad} alt="" />
        </div>
      </div>
    </footer>
  );
}

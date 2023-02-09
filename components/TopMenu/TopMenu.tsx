import Image from "next/image";
import { MdOutlineKeyboardArrowDown as ArrowDown } from "react-icons/md";
import logo from "@/public/Logo.svg";
import fire from "@/public/fire.svg";
import { MenuItemType } from "./type";
import styles from "./styles.module.scss";
import Link from "next/link";

const menuItems: MenuItemType[] = [
  {
    id: 1,
    text: "دسته بندی",
    path: "/",
    icon: fire,
    children: [],
  },
  {
    id: 2,
    text: "دسته بندی",
    path: "/",
    icon: fire,
  },
  {
    id: 3,
    text: "دسته بندی",
    path: "/",
    icon: fire,
  },
];

export function TopMenu() {
  const renderMenuItems = menuItems.map((item) => (
    <li key={item.id} className={styles["top-menu-item"]}>
      <Link href={item.path} className={styles["top-menu-item-link"]}>
        <Image src={item.icon} alt="" className={styles["top-menu-item-img"]} />
        <span>{item.text}</span>
        {item.children && <ArrowDown />}
      </Link>
    </li>
  ));
  return (
    <ul className={styles["top-menu"]}>
      <li className={styles["top-menu-item"]}>
        <Image src={logo} alt="logo" />
      </li>
      {renderMenuItems}
    </ul>
  );
}

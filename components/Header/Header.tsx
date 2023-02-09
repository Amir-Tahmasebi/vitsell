import clsx from "clsx";
import {
  Input,
  TopMenu,
  Button,
  ButtonComponentColor,
  ButtonComponentSize,
} from "../";
import {
  CiSearch as SearchIcon,
  CiShoppingCart as ShoppingIcon,
} from "react-icons/ci";
import styles from "./styles.module.scss";
import { HeaderProps } from "./type";

export function Header({ className }: HeaderProps) {
  const classList = clsx(styles["header"], className);
  
  const handleClick = () => {};
  
  return (
    <header className={classList}>
      <nav className={styles["header-wrapper"]}>
        <TopMenu />
        <div className={styles["header-options"]}>
          <Input placeholder="جستجوی محصولات..." Icon={SearchIcon} />
          <span className={styles["header-options-icon"]}>
            <ShoppingIcon />
          </span>
          <Button
            color={ButtonComponentColor.danger}
            size={ButtonComponentSize.large}
            onClick={handleClick}
          >
            ورود / ثبت نام
          </Button>
        </div>
      </nav>
    </header>
  );
}

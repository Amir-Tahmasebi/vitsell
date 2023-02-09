import { LayoutProps } from "./type";
import { Header } from "./../Header";
import { Footer } from "./../Footer";
import styles from "./styles.module.scss";

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles["layout"]}>
      <Header className={styles["layout-header"]} />
      <>{children}</>
      <Footer className={styles["layout-footer"]} />
    </div>
  );
}

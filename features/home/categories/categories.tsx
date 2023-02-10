import { BiCategoryAlt as CategoryIcon } from "react-icons/bi";
import { WrapperTitle, BannerCard as Card } from "@/components";
import { bannerCategory, superMarket } from "@/public";
import { CategoryCard } from "@/components";
import styles from "./styles.module.scss";
import Image from "next/image";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Categories() {
  const renderCategoryItems = nums.map((n) => (
    <CategoryCard key={n} src={superMarket} title="سوپرمارکت" />
  ));
  return (
    <>
      <WrapperTitle Icon={<CategoryIcon />} title="دسته بندی های محبوب" />
      <div className={styles["category"]}>
        <div className={styles["category-items"]}>{renderCategoryItems}</div>
        <Image
          className={styles["category-banner"]}
          src={bannerCategory}
          alt=""
        />
      </div>
    </>
  );
}

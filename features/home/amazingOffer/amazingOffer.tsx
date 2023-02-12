import { AiOutlineFire as FireIcon } from "react-icons/ai";
import { BannerCard, WrapperTitle } from "@/components";
import { sanford, hasanFeri } from "@/public";
import { Card } from "./card";
import styles from "./styles.module.scss";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function AmazingOffer() {
  const renderAmazingCards = nums.map((num) => (
    <Card
      key={num}
      price={4343000}
      src={hasanFeri}
      title="کتونی نایک شماره ۱۲۱"
      discount={34}
    />
  ));
  return (
    <>
      <WrapperTitle
        isShowMore
        Icon={<FireIcon />}
        title="پیشنهادات شگفت انگیر"
      />
      <div className={styles["Amazing-offer"]}>
        <div className={styles["Amazing-offer-banner"]}>
          <BannerCard
            bookmark
            title="همزن برقی Sanford"
            price={4343000}
            src={sanford}
            className={styles["Amazing-offer-banner-card"]}
          />
        </div>
        <div className={styles["Amazing-offer-items"]}>{renderAmazingCards}</div>
      </div>
    </>
  );
}

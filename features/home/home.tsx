import { Layout } from "@/components";
import {
  TopBanner,
  Discounts,
  DiscountBanner,
  Categories,
  AmazingOffer,
  BestSeller,
  BottomBanner
} from "./";

export function Home() {
  return (
    <Layout>
      <TopBanner />
      <Discounts />
      <DiscountBanner />
      <Categories />
      <AmazingOffer />
      <BestSeller />
      <BottomBanner />
    </Layout>
  );
}

import { Layout } from "@/components";
import {
  TopBanner,
  Discounts,
  DiscountBanner,
  Categories,
  AmazingOffer,
  BestSeller,
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
    </Layout>
  );
}

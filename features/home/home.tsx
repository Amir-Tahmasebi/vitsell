import { Layout } from "@/components";
import {
  TopBanner,
  Discounts,
  DiscountBanner,
  Categories,
  AmazingOffer,
} from "./";

export function Home() {
  return (
    <Layout>
      <TopBanner />
      <Discounts />
      <DiscountBanner />
      <Categories />
      <AmazingOffer />
    </Layout>
  );
}

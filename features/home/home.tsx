import { Layout } from "@/components";
import {
  TopBanner,
  Discounts,
  DiscountBanner,
  Categories,
  AmazingOffer,
  BestSeller,
  BottomBanner,
  Download
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
      <Download />
    </Layout>
  );
}

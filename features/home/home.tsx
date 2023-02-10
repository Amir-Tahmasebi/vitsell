import { Layout } from "@/components";
import { TopBanner, Discounts, DiscountBanner, Categories } from "./";

export function Home() {
  return (
    <Layout>
      <TopBanner />
      <Discounts />
      <DiscountBanner />
      <Categories />
    </Layout>
  );
}

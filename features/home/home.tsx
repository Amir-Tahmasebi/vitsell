import { Layout } from "@/components";
import { TopBanner, Discounts, DiscountBanner } from "./";

export function Home() {
  return (
    <Layout>
      <TopBanner />
      <Discounts />
      <DiscountBanner />
    </Layout>
  );
}

import Head from "next/head";
import { HomeFeature } from "@/features";

type HomeProps = {
  data: any;
};

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>ویتسل</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeFeature.Home />
    </>
  );
}

export async function getStaticProps() {
  const data = await HomeFeature.fetchHomeData();
  return {
    props: {
      data,
    },
  };
}

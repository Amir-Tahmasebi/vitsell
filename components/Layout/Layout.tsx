import { LayoutProps } from "./type";
import { Header } from "./../Header";
import { Footer } from "./../Footer";

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

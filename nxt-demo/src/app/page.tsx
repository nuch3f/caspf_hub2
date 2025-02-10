import "@/assets/sass/style.scss";
import { Fragment } from "react";
import { Sidemenu } from "@/app/parts/common/sidemenu";
import { TopMv } from "@/app/parts/top/topMv";
import { Footer } from "@/app/parts/common/footer";
import { Header } from "@/app/parts/common/header";
import NewsBox from "@/app/parts/common/newsbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'demo-page | caspf.',
  description: 'caspfデモンストレーションページ',
  openGraph: {
    title: 'demo-page | caspf.',
    description: 'caspfデモンストレーションページ',
    images: 'https://caspf.info/assets/img/common/ogp_common.jpg'
  },
}

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="l-main">
        <section className="l-main_container">
          <TopMv />
          <div className="p-top_nbox sp-only">
            <NewsBox />
          </div>
          <Footer />
        </section>
        <Sidemenu />
      </main>
    </Fragment>
  );
}

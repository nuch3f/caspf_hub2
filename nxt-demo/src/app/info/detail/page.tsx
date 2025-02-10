import PageCont from "./pagecont";
import { Metadata } from "next";
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'INFO | caspf_demo',
  description: 'caspfデモンストレーションページ',
  openGraph: {
    title: 'INFO | caspf_demo',
    description: 'caspfデモンストレーションページ',
    images: 'https://caspf.info/assets/img/common/ogp_common.jpg'
  },
}

const Infodetail = () => {
    return (
      <Suspense>
        <PageCont id={0} />
      </Suspense>
    )
}

export default Infodetail





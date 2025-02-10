import PageCont from "./pagecont";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'INFO | caspf_demo',
  description: 'caspfデモンストレーションページ',
  openGraph: {
    title: 'INFO | caspf_demo',
    description: 'caspfデモンストレーションページ',
    images: 'https://caspf.info/assets/img/common/ogp_common.jpg'
  },
}

const Infolist = () => {
    return <PageCont />
}

export default Infolist





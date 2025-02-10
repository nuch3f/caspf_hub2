import PageCont from "./pagecont";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'SOUNDROOM | caspf_demo',
  description: 'caspfデモンストレーションページ',
  openGraph: {
    title: 'SOUNDROOM | caspf_demo',
    description: 'caspfデモンストレーションページ',
    images: 'https://caspf.info/assets/img/common/ogp_common.jpg'
  },
}

const Soundroom = () => {
    return <PageCont />
}

export default Soundroom



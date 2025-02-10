import NewsBox from "@/app/parts/common/newsbox";
import Link from "next/link";
import Image from "next/image";

export const Sidemenu = () => {
  return (
    <nav className="l-gNav">
      <div className="l-gNav_container">
        <div className="l-gNav_logo">
          <Link href="/">
            <Image src="https://caspf.info/assets/img/common/logo_caspf.svg" alt="caspf_logo" width={200} height={100} />
          </Link>
        </div>
        <ul className="l-gNav_list">
          <li className="l-gNav_list--item">
            <Link href="/soundroom" className="l-gNav_list--link">
              <Image src="/assets/img/common/menu_sound.svg" alt="soundroom" width={140} height={23} />
            </Link>
          </li>
          <li className="l-gNav_list--item">
            <Link href="/info" className="l-gNav_list--link">
              <Image src="/assets/img/common/menu_info.svg" alt="info" width={104} height={23} />
            </Link>
            <div className="pc-only">
              <NewsBox />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

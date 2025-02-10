import Link from "next/link";
import Image from "next/image";

export const FooterSns = () => {
  return (
    <div className="p-top_sns">
      <ul className="p-top_sns--list">
        <li className="p-top_sns--list_item">
          <Link href="" target="_blank" >
            <img src="/assets/img/common/icon_sns_twitter.png" alt="twitter" width={60} height={60} />
          </Link>
        </li>
        <li className="p-top_sns--list_item">
          <Link href="" target="_blank" >
            <img src="/assets/img/common/icon_sns_youtube.png" alt="youtube" width={60} height={60} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
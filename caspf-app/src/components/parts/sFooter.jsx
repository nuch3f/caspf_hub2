import { Fragment } from "react";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLine, FaYoutubeSquare } from 'react-icons/fa';
export const SFooterContent = () => {

    return (
    <Fragment>
        <footer className="l-footer">
            <div className="l-footer_main">
                <ul className="l-footer_main--catlist">
                    <li className="l-footer_main--catlist_item">
                        <h5 className="l-footer_main--catlist_item--title">カテゴリから探す</h5>
                        <div className="l-footer_main--catlist_item--container">
                            <ul className="l-footer_main--catsublist">
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">すべてのアイテム</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">トップス</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">ジャケット</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">コート</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">ボトム</a></li>
                            </ul>
                            <ul className="l-footer_main--catsublist">
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">シューズ</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">ファッション雑貨</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">帽子</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">バッグ</a></li>
                                <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">アクセサリ</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="l-footer_main--catlist_item">
                        <h5 className="l-footer_main--catlist_item--title">ブランドから探す</h5>
                        <ul className="l-footer_main--catsublist">
                            <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">brand_name1</a></li>
                            <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">brand_name2</a></li>
                            <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/itemlist">brand_name3</a></li>
                        </ul>
                    </li>
                    <li className="l-footer_main--catlist_item">
                        <h5 className="l-footer_main--catlist_item--title">サポート情報</h5>
                        <ul className="l-footer_main--catsublist">
                            <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/comingsoon">店舗情報</a></li>
                            <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/comingsoon">プレスリリース</a></li>
                            <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/comingsoon">よくあるご質問</a></li>
                            <li className="l-footer_main--catsublist_item"><a href="/samplesite/ec/comingsoon">ストアからのお知らせ</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="l-footer_main--snslist">
                    <li className="l-footer_main--snslist_item"><a href="#"><FaTwitterSquare size="2rem" /></a></li>
                    <li className="l-footer_main--snslist_item"><a href="#"><FaFacebookSquare size="2rem" /></a></li>
                    <li className="l-footer_main--snslist_item"><a href="#"><FaInstagramSquare size="2rem" /></a></li>
                    <li className="l-footer_main--snslist_item"><a href="#"><FaLine size="2rem" /></a></li>
                    <li className="l-footer_main--snslist_item"><a href="#"><FaYoutubeSquare size="2rem" /></a></li>
                </ul>
            </div>
            <div className="l-footer_bottom">
                <ul className="l-footer_bottom--list">
                    <li className="l-footer_bottom--list_item"><a href="/samplesite/ec/comingsoon">利用規約</a></li>
                    <li className="l-footer_bottom--list_item"><a href="/samplesite/ec/comingsoon">特別商取引法に基づく表示</a></li>
                    <li className="l-footer_bottom--list_item"><a href="/samplesite/ec/comingsoon">ショッピングガイド</a></li>
                    <li className="l-footer_bottom--list_item"><a href="/samplesite/ec/comingsoon">企業サイト</a></li>
                    <li className="l-footer_bottom--list_item"><a href="/samplesite/ec/comingsoon">お問い合わせ</a></li>
                </ul>
                <p className="l-footer_bottom--copyright">
                    &copy;caspf. <span className="l-footer_bottom--copyright_notes">※このサイトはデモンストレーション用ページです。実在の企業、商品等と関係はございません。</span>
                </p>
            </div>
        </footer>
    </Fragment>
    );
};
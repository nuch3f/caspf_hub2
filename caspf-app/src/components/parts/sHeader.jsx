import { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BiSearch, BiHeart, BiCart, BiLogIn } from 'react-icons/bi';
import 'react-tabs/style/react-tabs.css';
export const SHeaderContent = () => {
    const SpMenuBtnClick = () => {
        console.log("clicked");
        document.getElementById('l-header').classList.toggle('is-header-open');
    }
    return (
    <Fragment>
        <header className="l-header" id="l-header">
            <div className="l-header_container">
                <div className="l-header_left">
                    <div className="l-header_left--logo">
                        <a href="/samplesite/ec">
                            <img src="/assets/img/common/logo_caspfclothing.svg" alt="caspf"></img>
                        </a>
                    </div>
                    <ul className="l-header_left--list">
                        <li className="l-header_left--list_item">
                            <a href="/samplesite/ec/itemlist">Items</a>
                        </li>
                        <li className="l-header_left--list_item">
                            <a href="/samplesite/ec/comingsoon">Collection</a>
                        </li>
                        <li className="l-header_left--list_item">
                            <a href="/samplesite/ec/comingsoon">About</a>
                        </li>
                        <li className="l-header_left--list_item">
                            <a href="/samplesite/ec/comingsoon">Topics</a>
                        </li>
                        <li className="l-header_left--list_item">
                            <a href="/">OfficialSite</a>
                        </li>
                    </ul>
                </div>
                <div className="l-header_right">
                    <ul className="l-header_right--list">
                        <li className="l-header_right--list_item">
                            <a href="/samplesite/ec/comingsoon"><BiSearch size="2rem" /></a>
                        </li>
                        <li className="l-header_right--list_item">
                            <a href="/samplesite/ec/comingsoon"><BiHeart size="2rem" /></a>
                        </li>
                        <li className="l-header_right--list_item">
                            <a href="/samplesite/ec/cart"><BiCart size="2rem" /></a>
                        </li>
                        <li className="l-header_right--list_item">
                            <a href="/samplesite/ec/signup"><BiLogIn size="2rem" /></a>
                        </li>
                    </ul>
                    <div className="l-header_right--spBtn" onClick={SpMenuBtnClick}>
                        <span className="l-header_right--spBtn_bar"></span>
                        <span className="l-header_right--spBtn_bar"></span>
                        <span className="l-header_right--spBtn_bar"></span>
                    </div>
                </div>
            </div>
            <div className="l-header_spMenu">
                <Tabs>
                    <TabList>
                        <Tab>HOME</Tab>
                        <Tab>Category</Tab>
                        <Tab>Service</Tab>
                    </TabList>
                    <TabPanel data-tabcontent="HOME">
                        <ul className="l-header_spMenu--list is-home">
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">Search</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/cart">Cart</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">Favorite</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/signup">Login</a>
                            </li>
                            <hr />
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/itemlist">Items</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">Collection</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">About</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">Topics</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/">OfficialSite</a>
                            </li>
                            

                        </ul>
                    </TabPanel>
                    <TabPanel data-tabcontent="Category">
                        <h5 className="l-header_spMenu--title">カテゴリから探す</h5>
                        <ul className="l-header_spMenu--list">
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">すべてのアイテム</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">トップス</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">ジャケット</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">コート</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">ボトム</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">シューズ</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">ファッション雑貨</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">帽子</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">バッグ</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">アクセサリ</a></li>
                        </ul>
                        <h5 className="l-header_spMenu--title">ブランドから探す</h5>
                        <ul className="l-header_spMenu--list">
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">brand_name1</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">brand_name2</a></li>
                            <li className="l-header_spMenu--list_item"><a href="/samplesite/ec/itemlist">brand_name3</a></li>
                        </ul>
                    </TabPanel>
                    <TabPanel data-tabcontent="Service">
                        <h5 className="l-header_spMenu--title">サポート情報</h5>
                        <ul className="l-header_spMenu--list">
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">店舗情報</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">プレスリリース</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">よくあるご質問</a>
                            </li>
                            <li className="l-header_spMenu--list_item">
                                <a href="/samplesite/ec/comingsoon">ストアからのお知らせ</a>
                            </li>
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        </header>
    </Fragment>
    );
};
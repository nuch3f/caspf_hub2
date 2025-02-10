import { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export const EcDetailTabContent = () => {
    
    return (
        <Fragment>
            <Tabs>
                <TabList className="p-ecDetail_right--tabContent_tabList">
                    <Tab className="p-ecDetail_right--tabContent_tabList--item">アイテム詳細</Tab>
                    <Tab className="p-ecDetail_right--tabContent_tabList--item">サイズ詳細</Tab>
                </TabList>
                <TabPanel data-tabcontent="itemdetail">
                    <div className="p-ecDetail_right--tabContent_dataContent desc">
                        <h4 className="p-ecDetail_right--tabContent_dataContent_title">
                        見出しテキスト見出しテキスト見出しテキスト
                        </h4>
                        <p className="p-ecDetail_right--tabContent_dataContent_text">
                        説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                        </p>
                        <div className="p-ecDetail_right--tabContent_dataContent_info">
                            <dl>
                                <dt>商品番号</dt>
                                <dd>123-456-7890</dd>
                                <dt>素材</dt>
                                <dd>コットン80%、 ナイロン20%</dd>
                                <dt>原産国</dt>
                                <dd>日本</dd>
                                <dt>ギフトラッピング</dt>
                                <dd>可能</dd>
                            </dl>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel data-tabcontent="sizedetail">
                    <div className="p-ecDetail_right--tabContent_dataContent size">
                        <table>
                        <tbody>
                            <tr>
                                <th>サイズ</th>
                                <th>着丈</th>
                                <th>肩幅</th>
                                <th>身幅</th>
                                <th>袖幅</th>
                            </tr>
                            <tr>
                                <th>S</th>
                                <td>68</td>
                                <td>68</td>
                                <td>68</td>
                                <td>68</td>
                            </tr>
                            <tr>
                                <th>M</th>
                                <td>70</td>
                                <td>70</td>
                                <td>70</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <th>L</th>
                                <td>72</td>
                                <td>72</td>
                                <td>72</td>
                                <td>72</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </TabPanel>
            </Tabs>
        </Fragment>
    );
};
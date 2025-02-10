import { Fragment } from "react";
import { EcDetailRightRadio } from "./ecDetailRightRadio";
import { EcDetailTabContent } from "./ecDetailTabContent";
export const EcDetailRightContent = () => {
    return (
        <Fragment>
            <section className="p-ecDetail_right">
                <div className="p-ecDetail_right--heading">
                    <p className="p-ecDetail_right--heading_brandName">brand name</p>
                    <h1 className="p-ecDetail_right--heading_itemName">ItemNameSample_ItemNameSample_ItemNameSample</h1>
                    <p className="p-ecDetail_right--heading_price">&yen;99,999<span>(tax in)</span></p>
                    <EcDetailRightRadio />
                    <a href="#" className="p-ecDetail_right--heading_stock">店舗在庫を確認する</a>
                    <div className="p-ecDetail_right--heading_quantity">
                        数量：
                        <select className="p-ecDetail_right--heading_quantity--num">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="c-btn_toCart">
                        <a href="#" className="c-btn_toCart--addCart">カートに入れる</a>
                        <a href="#" className="c-btn_toCart--addFav">&#9825;</a>
                    </div>
                </div>
                <EcDetailTabContent />
            </section>
        </Fragment>
    );
};
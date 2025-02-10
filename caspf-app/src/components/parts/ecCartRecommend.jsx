import { Fragment } from "react";
import { EcItemCell } from "./ecItemCell";
export const EcCartRecommend = () => {
    const detailRecommendItems = [
        {stats: "",brandName: "Brand Name",imgFile: "img07.jpg",itemName: "ItemNameSample",itemPrice: 9999},
        {stats: "",brandName: "Brand Name",imgFile: "img12.jpg",itemName: "ItemNameSample",itemPrice: 1111},
        {stats: "",brandName: "Brand Name",imgFile: "img11.jpg",itemName: "ItemNameSample",itemPrice: 2222},
        {stats: "",brandName: "Brand Name",imgFile: "img10.jpg",itemName: "ItemNameSample",itemPrice: 3333},
        {stats: "",brandName: "Brand Name",imgFile: "img09.jpg",itemName: "ItemNameSample",itemPrice: 4444},
        {stats: "",brandName: "Brand Name",imgFile: "img08.jpg",itemName: "ItemNameSample",itemPrice: 5555}
    ];
    
    return (
        <Fragment>
            <section className="p-ecCart_recommend">
                <h4 className="p-ecCart_recommend--title">あわせて購入されている商品</h4>
                <div className="p-ecDetail_recommend--list">
                    {detailRecommendItems.map((value, index) => {
                        return (
                            <div className="c-itemCell" key={index}>
                            <EcItemCell
                                brandName={detailRecommendItems[index].brandName}
                                imgFile={detailRecommendItems[index].imgFile}
                                itemName={detailRecommendItems[index].itemName}
                                itemPrice={detailRecommendItems[index].itemPrice}
                            />
                            </div>
                        )
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};
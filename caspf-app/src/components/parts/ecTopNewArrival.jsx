import { Fragment } from "react";
import { EcItemCell } from "./ecItemCell";

export const EcTopNewArrivalContent = () => {
    const newArrivalItems = [
        {stats: "New",brandName: "Brand Name",imgFile: "img01.jpg",itemName: "ItemNameSample",itemPrice: 9999},
        {stats: "",brandName: "Brand Name",imgFile: "img02.jpg",itemName: "ItemNameSample",itemPrice: 1111},
        {stats: "",brandName: "Brand Name",imgFile: "img03.jpg",itemName: "ItemNameSample",itemPrice: 2222},
        {stats: "Sale",brandName: "Brand Name",imgFile: "img04.jpg",itemName: "ItemNameSample",itemPrice: 3333},
        {stats: "New",brandName: "Brand Name",imgFile: "img05.jpg",itemName: "ItemNameSample",itemPrice: 4444},
        {stats: "",brandName: "Brand Name",imgFile: "img06.jpg",itemName: "ItemNameSample",itemPrice: 5555}
    ];
    return (
    <Fragment>
        <section className="p-ecTop_newArrival">
            <h3 className="p-ecTop_common--title">New Arrival</h3>
            <div className="p-ecTop_newArrival--list">
            {newArrivalItems.map((value, index) => {
                return (
                    <div className="c-itemCell" key={index}>
                    <EcItemCell
                        stats={newArrivalItems[index].stats}
                        brandName={newArrivalItems[index].brandName}
                        imgFile={newArrivalItems[index].imgFile}
                        itemName={newArrivalItems[index].itemName}
                        itemPrice={newArrivalItems[index].itemPrice}
                    />
                    </div>
                );
                })
            }
            </div>
            <div className="c-btn_area">
                <a href="/samplesite/ec/itemlist" className="c-btn_more">新着アイテムをもっと見る</a>
            </div>
        </section>
    </Fragment>
    );
};
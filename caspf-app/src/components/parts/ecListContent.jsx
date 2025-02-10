import { Fragment } from "react";
import { EcItemCell } from "./ecItemCell";
export const EcListContent = () => {
    const itemListItems = [
        {stats: "New",brandName: "Brand Name",imgFile: "img01.jpg",itemName: "ItemNameSample",itemPrice: 9999},
        {stats: "",brandName: "Brand Name",imgFile: "img02.jpg",itemName: "ItemNameSample",itemPrice: 1111},
        {stats: "",brandName: "Brand Name",imgFile: "img03.jpg",itemName: "ItemNameSample",itemPrice: 2222},
        {stats: "Sale",brandName: "Brand Name",imgFile: "img04.jpg",itemName: "ItemNameSample",itemPrice: 3333},
        {stats: "New",brandName: "Brand Name",imgFile: "img05.jpg",itemName: "ItemNameSample",itemPrice: 4444},
        {stats: "",brandName: "Brand Name",imgFile: "img06.jpg",itemName: "ItemNameSample",itemPrice: 5555},
        {stats: "New",brandName: "Brand Name",imgFile: "img07.jpg",itemName: "ItemNameSample",itemPrice: 9999},
        {stats: "",brandName: "Brand Name",imgFile: "img08.jpg",itemName: "ItemNameSample",itemPrice: 1111},
        {stats: "",brandName: "Brand Name",imgFile: "img09.jpg",itemName: "ItemNameSample",itemPrice: 2222},
        {stats: "Sale",brandName: "Brand Name",imgFile: "img10.jpg",itemName: "ItemNameSample",itemPrice: 3333},
        {stats: "New",brandName: "Brand Name",imgFile: "img11.jpg",itemName: "ItemNameSample",itemPrice: 4444},
        {stats: "",brandName: "Brand Name",imgFile: "img12.jpg",itemName: "ItemNameSample",itemPrice: 5555}
    ];
    return (
        <Fragment>
            <section className="p-ecList_main--listWrapper">
                <h1 className="p-ecList_main--title">すべてのアイテム</h1>
                <div className="p-ecList_main--headingContent">
                    <div className="p-ecList_main--headingContent_counter">
                        <span className="p-ecList_main--headingContent_counter--num">999</span>件
                    </div>
                    <div className="p-ecList_main--headingContent_selectOrder">
                        <select>
                            <option>新着順</option>
                            <option>おすすめ</option>
                            <option>価格順</option>
                        </select>
                    </div>
                </div>
                <div className="p-ecList_main--listContainer">
                    {itemListItems.map((value, index) => {
                        return (
                            <div className="c-itemCell" key={index}>
                            <EcItemCell
                                stats={itemListItems[index].stats}
                                brandName={itemListItems[index].brandName}
                                imgFile={itemListItems[index].imgFile}
                                itemName={itemListItems[index].itemName}
                                itemPrice={itemListItems[index].itemPrice}
                            />
                            </div>
                            )
                        })
                    }
                </div>
                <div className="p-ecList_main--bottom">
                    <ol className="p-ecList_main--bottom_paging">
                        <li className="p-ecList_main--bottom_paging--item inactive">prev</li>
                        <li className="p-ecList_main--bottom_paging--item active">1</li>
                        <li className="p-ecList_main--bottom_paging--item"><a href="#">2</a></li>
                        <li className="p-ecList_main--bottom_paging--item"><a href="#">3</a></li>
                        <li className="p-ecList_main--bottom_paging--item"><a href="#">4</a></li>
                        <li className="p-ecList_main--bottom_paging--item"><a href="#">5</a></li>
                        <li className="p-ecList_main--bottom_paging--item"><a href="#">next</a></li>
                    </ol>
                </div>
            </section>
        </Fragment>
    );
};
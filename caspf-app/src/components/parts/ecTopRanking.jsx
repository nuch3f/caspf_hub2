import { Fragment } from "react";
import { EcItemCell } from "./ecItemCell";

export const EcTopRankingContent = () => {
    const RankingItems = [
        {rank: 1,brandName: "Brand Name",imgFile: "img07.jpg",itemName: "ItemNameSample",itemPrice: 9999},
        {rank: 2,brandName: "Brand Name",imgFile: "img08.jpg",itemName: "ItemNameSample",itemPrice: 1111},
        {rank: 3,brandName: "Brand Name",imgFile: "img09.jpg",itemName: "ItemNameSample",itemPrice: 2222},
        {rank: 4,brandName: "Brand Name",imgFile: "img10.jpg",itemName: "ItemNameSample",itemPrice: 3333},
        {rank: 5,brandName: "Brand Name",imgFile: "img11.jpg",itemName: "ItemNameSample",itemPrice: 4444},
        {rank: 6,brandName: "Brand Name",imgFile: "img12.jpg",itemName: "ItemNameSample",itemPrice: 5555}
    ];
    return (
    <Fragment>
        <section className="p-ecTop_ranking">
            <h3 className="p-ecTop_common--title">Ranking</h3>
            <div className="p-ecTop_ranking--list">
            {RankingItems.map((value, index) => {
                return (
                    <div className="c-itemCell" key={index}>
                    <EcItemCell
                        rank={RankingItems[index].rank}
                        brandName={RankingItems[index].brandName}
                        imgFile={RankingItems[index].imgFile}
                        itemName={RankingItems[index].itemName}
                        itemPrice={RankingItems[index].itemPrice}
                    />
                    </div>
                    )
                })
            }
            </div>
            <div className="c-btn_area">
                <a href="/samplesite/ec/itemlist" className="c-btn_more">ランキングをもっと見る</a>
            </div>
        </section>
    </Fragment>
    );
};
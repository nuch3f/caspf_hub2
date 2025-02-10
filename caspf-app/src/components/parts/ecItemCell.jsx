import { Fragment } from "react";

export const EcItemCell = (props) => {
    const itemCellProps = {
        stats: props.stats,
        brandName: props.brandName,
        imgFile: props.imgFile,
        itemName: props.itemName,
        itemPrice: props.itemPrice,
        raniking: props.rank,
    };
    let itemImgPath = "/assets/img/ec/detail/" + itemCellProps.imgFile;

    return (
    <Fragment>
            <a href="/samplesite/ec/itemdetail">
                <figure className="c-itemCell_fig">
                    <p className="c-itemCell_fig--status">{itemCellProps.stats}</p>
                    <div className="c-itemCell_fig--img">
                        <span className="c-itemCell_fig--img_rank"><span>{itemCellProps.raniking}</span></span>
                        <img src={itemImgPath} alt={itemCellProps.itemName} />
                    </div>
                    <figcaption className="c-itemCell_fig--cap">
                        <span className="c-itemCell_fig--cap_brandname">{itemCellProps.brandName}</span>
                        <p className="c-itemCell_fig--cap_itemname">{itemCellProps.itemName}</p>
                        <span className="c-itemCell_fig--cap_price">&yen;{itemCellProps.itemPrice}</span><span className="tax">tax in</span>
                    </figcaption>
                </figure>
            </a>
    </Fragment>
    );
};
import { Fragment } from "react";

export const EcTopicsCell = (props) => {
    const topicCellProps = {
        imgFile: props.imgFile,
        title: props.title,
        excerpt: props.excerpt,
    };
    let itemImgPath = "/assets/img/ec/top/" + topicCellProps.imgFile;

    return (
    <Fragment>    
        <figure className="c-topicCell_fig">
            <div className="c-topicCell_fig--img">
                <img src={itemImgPath} alt={topicCellProps.title} />
            </div>
            <figcaption className="c-topicCell_fig--cap">
                <p className="c-topicCell_fig--cap_title">{topicCellProps.title}</p>
                <p className="c-topicCell_fig--cap_excerpt">{topicCellProps.excerpt}</p>
            </figcaption>
        </figure>
    </Fragment>
    );
};
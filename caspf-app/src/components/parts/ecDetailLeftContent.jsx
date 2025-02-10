import { Fragment } from "react";
import { EcDetailLeftSlider } from "./ecDetailLeftSlide";
export const EcDetailLeftContent = () => {
    return (
        <Fragment>
            <section className="p-ecDetail_left">
                <EcDetailLeftSlider />
                <div className="p-ecDetail_left--coordinate">
                    <h3 className="p-ecDetail_left--coordinate_title">
                        このアイテムを使ったコーディネート
                    </h3>
                    <ul className="p-ecDetail_left--coordinate_list">
                        <li className="p-ecDetail_left--coordinate_list--item">
                            <img src="/assets/img/ec/detail/img_cd01.jpg" alt="coordinateItem" />
                        </li>
                            <li className="p-ecDetail_left--coordinate_list--item">
                        <img src="/assets/img/ec/detail/img_cd02.jpg" alt="coordinateItem" />
                            </li>
                        <li className="p-ecDetail_left--coordinate_list--item">
                            <img src="/assets/img/ec/detail/img_cd03.jpg" alt="coordinateItem" />
                        </li>
                        <li className="p-ecDetail_left--coordinate_list--item">
                            <img src="/assets/img/ec/detail/img_cd04.jpg" alt="coordinateItem" />
                        </li>
                    </ul>
                </div>
                <div className="p-ecDetail_left--model">
                    <figure className="p-ecDetail_left--model_fig">
                        <div className="p-ecDetail_left--model_fig--img">
                            <img src="/assets/img/ec/detail/icon_model.jpg" alt="model_image" />
                        </div>
                        <figcaption className="p-ecDetail_left--model_fig--figcap">
                            <p className="p-ecDetail_left--model_fig--figcap_itemsize">モデル着用サイズ：M</p>
                            <p className="p-ecDetail_left--model_fig--figcap_modelsize">モデルサイズ：身長160cm</p>
                        </figcaption>
                    </figure>
                    <div className="p-ecDetail_left--model_comment">
                        <h5 className="p-ecDetail_left--model_comment--title">着回しコーデに取り入れやすい、今年マストバイなアイテム</h5>
                        <p className="p-ecDetail_left--model_comment--txt">
                            カラバリ豊富で店舗人気No.１！リピート率も高くおすすめのアイテムです。
                        </p>
                    </div>
                </div>
                <div className="p-ecDetail_left--fits">
                    <table className="p-ecDetail_left--fits_table">
                        <tbody>
                        <tr>
                            <th>フィット感</th>
                            <td>タイト</td>
                            <td className="is-selected">普通</td>
                            <td>ゆったり</td>
                        </tr>
                        <tr>
                            <th>重量</th>
                            <td>軽い</td>
                            <td>普通</td>
                            <td className="is-selected">重い</td>
                        </tr>
                        <tr>
                            <th>厚み</th>
                            <td>薄い</td>
                            <td>普通</td>
                            <td className="is-selected">厚い</td>
                        </tr>
                        <tr>
                            <th>透け感</th>
                            <td>透ける</td>
                            <td className="is-selected">普通</td>
                            <td>透けない</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </Fragment>
    );
};
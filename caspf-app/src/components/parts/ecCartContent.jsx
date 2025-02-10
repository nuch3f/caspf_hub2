import { Fragment } from "react";
export const EcCartContent = () => {
    const inCartItems = [
        {brandName: "Brand Name1",imgFile: "img01.jpg",itemName: "ItemNameSample1",itemPrice: 1111},
        {brandName: "Brand Name2",imgFile: "img02.jpg",itemName: "ItemNameSample2",itemPrice: 1234},
        {brandName: "Brand Name3",imgFile: "img03.jpg",itemName: "ItemNameSample3",itemPrice: 2222}
    ];
    const priceToFree = 10000; //送料無料閾値
    const postage = 1000; //送料
    const giftOption = 300;
    let cartSumPrice = 0;
    let cartTotalPrice = 0;
    let restFeetoFree = 0; //送料無料まで残り
    let taxTotal = 0;
    let cartSubtotal = inCartItems.reduce((sum, element) => sum + element.itemPrice, 0);
    cartSumPrice = cartSubtotal;
    taxTotal = Math.round(cartSubtotal * 0.1);
    cartTotalPrice = cartSumPrice + postage + giftOption + taxTotal;
    restFeetoFree = priceToFree - cartSumPrice; 

    return (
        <Fragment>
            <section className="p-ecCart_content">
                <div className="p-ecCart_inCart">
                    <h2 className="p-ecCart_inCart--title">カートの商品</h2>
                    <ul className="p-ecCart_inCart--list">
                    {inCartItems.map((value, index) => {
                        return (
                            <li className="p-ecCart_inCart--list_item" key={index}>
                            <figure className="p-ecCart_inCart--list_item--fig">
                                <div className="p-ecCart_inCart--list_item--fig_img">
                                    <img src={`/assets/img/ec/detail/${inCartItems[index].imgFile}`} alt={inCartItems[index].itemName} />
                                </div>
                                <figcaption className="p-ecCart_inCart--list_item--fig_cap">
                                    <p className="p-ecCart_inCart--list_item--fig_cap--brandName">{inCartItems[index].brandName}</p>
                                    <p className="p-ecCart_inCart--list_item--fig_cap--itemName">{inCartItems[index].itemName}</p>
                                    <p className="p-ecCart_inCart--list_item--fig_cap--itemPrice">&yen;{inCartItems[index].itemPrice.toLocaleString()}</p>
                                </figcaption>
                            </figure>
                            <div className="p-ecCart_inCart--list_item--del">
                                <span className="p-ecCart_inCart--list_item--del_btn">削除</span>
                            </div>
                        </li>
                        )
                        })
                    }
                    </ul>
                </div>
                <div className="p-ecCart_cartSummary">
                    <div className="p-ecCart_cartSummary--wrapper">
                        <h3 className="p-ecCart_cartSummary--title">注文内容</h3>
                        <dl className="p-ecCart_cartSummary--dlist">
                            <dt>商品合計</dt>
                            <dd id="ecCartSum">&yen;{cartSumPrice.toLocaleString()}</dd>
                            <dt>送料</dt>
                            <dd id="ecCartFee">&yen;{postage.toLocaleString()}</dd>
                            <dt>ギフトオプション</dt>
                            <dd id="ecCartGift">&yen;{giftOption.toLocaleString()}</dd>
                            <dt>消費税</dt>
                            <dd id="ecCartGift">&yen;{taxTotal.toLocaleString()}</dd>
                            <dt className="p-ecCart_cartSummary--dlist_total">合計</dt>
                            <dd id="ecCartTotal" className="p-ecCart_cartSummary--dlist_total">&yen;{cartTotalPrice.toLocaleString()}</dd>
                        </dl>
                    </div>
                    <p className="p-ecCart_cartSummary--notice">
                        税抜<span className="p-ecCart_cartSummary--notice_num">&yen;{priceToFree.toLocaleString()}</span>以上お買い上げで送料無料！
                    </p>
                    <div className="c-btn_cartGroups">
                        <a href="#" className="c-btn_cartGroup stepPurchase">購入手続きに進む</a>
                        <a href="#" className="c-btn_cartGroup continueShopping">お買い物を続ける</a>
                    </div>      
                </div>
                
            </section>
            <section className="p-ecCart_info">
                <p className="p-ecCart_info--text">
                    あと<span className="p-ecCart_info--text_num">{restFeetoFree.toLocaleString()}</span>円以上のお買い物で送料無料です。
                </p>
            </section>
        </Fragment>
    );
};
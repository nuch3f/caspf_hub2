import { Fragment, useState } from "react";
import { BiSearch } from 'react-icons/bi';
export const EcListSideMenu = () => {
    const [selectCategoryName, setCatVal] = useState('未選択');
    const categotySwitch = e => setCatVal(e.target.value);
    const [selectColorName, setVal] = useState('未選択');
    const colorSwitch = e => setVal(e.target.value);
    const [selectSize, setSizeVal] = useState('未選択');
    const sizeSwitch = e => setSizeVal(e.target.value);
    const [selectStock, setStockVal] = useState('未選択');
    const stockSwitch = e => setStockVal(e.target.value);
    const [selectPrice, setPriceVal] = useState('未選択');
    const priceSwitch = e => setPriceVal(e.target.value);
    return (
        <Fragment>
            <aside className="c-sideMenu">
                <h3 className="c-sideMenu_heading">キーワードで探す</h3>
                <div className="c-sideMenu_searchbox">
                    <input type="search" />
                    <a href="#" className="c-sideMenu_searchbox--btnSearch"><BiSearch size="2rem" /></a>
                </div>
                <h3 className="c-sideMenu_heading">条件から探す</h3>
                <ul className="c-sideMenu_list">
                    <li className="c-sideMenu_list--item">
                        <details className="c-sideMenu_list--item_wrapper">
                            <summary className="c-sideMenu_list--item_sum">
                                <h4 className="c-sideMenu_list--item_sum--title">カテゴリ</h4>
                                <p className="c-sideMenu_list--item_sum--txt">{selectCategoryName}</p>
                            </summary>
                            <ul className="c-sideMenu_list--item_sublist">
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup01" id="gr1_1"
                                        value="トップス" onChange={categotySwitch} checked={selectCategoryName === 'トップス'}
                                     />
                                    <label htmlFor="gr1_1">トップス</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup01" id="gr1_2"
                                        value="ジャケット" onChange={categotySwitch} checked={selectCategoryName === 'ジャケット'}
                                     />
                                    <label htmlFor="gr1_2">ジャケット</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup01" id="gr1_3"
                                        value="コート" onChange={categotySwitch} checked={selectCategoryName === 'コート'}
                                     />
                                    <label htmlFor="gr1_3">コート</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup01" id="gr1_4"
                                        value="ボトム" onChange={categotySwitch} checked={selectCategoryName === 'ボトム'}
                                     />
                                    <label htmlFor="gr1_4">ボトム</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup01" id="gr1_5"
                                        value="シューズ" onChange={categotySwitch} checked={selectCategoryName === 'シューズ'}
                                     />
                                    <label htmlFor="gr1_5">シューズ</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup01" id="gr1_6"
                                        value="帽子" onChange={categotySwitch} checked={selectCategoryName === '帽子'}
                                     />
                                    <label htmlFor="gr1_6">帽子</label>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className="c-sideMenu_list--item">
                        <details className="c-sideMenu_list--item_wrapper">
                            <summary className="c-sideMenu_list--item_sum">
                                <h4 className="c-sideMenu_list--item_sum--title">サイズ</h4>
                                <p className="c-sideMenu_list--item_sum--txt">{selectSize}</p>
                            </summary>
                            <ul className="c-sideMenu_list--item_sublist">
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup02" id="gr2_1"
                                        value="Sサイズ" onChange={sizeSwitch} checked={selectSize === 'S'}
                                     />
                                    <label htmlFor="gr2_1">Sサイズ</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup02" id="gr2_2"
                                        value="Mサイズ" onChange={sizeSwitch} checked={selectSize === 'M'}
                                     />
                                    <label htmlFor="gr2_2">Mサイズ</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup02" id="gr2_3"
                                        value="Lサイズ" onChange={sizeSwitch} checked={selectSize === 'L'}
                                     />
                                    <label htmlFor="gr2_3">Lサイズ</label>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className="c-sideMenu_list--item">
                        <details className="c-sideMenu_list--item_wrapper">
                            <summary className="c-sideMenu_list--item_sum">
                                <h4 className="c-sideMenu_list--item_sum--title">カラー</h4>
                                <p className="c-sideMenu_list--item_sum--txt">{selectColorName}</p>
                            </summary>
                            <ul className="c-sideMenu_list--item_sublist">
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup03" id="gr3_1"
                                        value="アイボリー" onChange={colorSwitch} checked={selectColorName === 'アイボリー'}
                                     />
                                    <label htmlFor="gr3_1">アイボリー</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup03" id="gr3_2"
                                        value="ブラック" onChange={colorSwitch} checked={selectColorName === 'ブラック'}
                                     />
                                    <label htmlFor="gr3_2">ブラック</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup03" id="gr3_3"
                                        value="ネイビー" onChange={colorSwitch} checked={selectColorName === 'ネイビー'}
                                     />
                                    <label htmlFor="gr3_3">ネイビー</label>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className="c-sideMenu_list--item">
                        <details className="c-sideMenu_list--item_wrapper">
                            <summary className="c-sideMenu_list--item_sum">
                                <h4 className="c-sideMenu_list--item_sum--title">在庫</h4>
                                <p className="c-sideMenu_list--item_sum--txt">{selectStock}</p>
                            </summary>
                            <ul className="c-sideMenu_list--item_sublist">
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup04" id="gr4_1"
                                        value="在庫ありのみ" onChange={stockSwitch} checked={selectStock === '在庫ありのみ'}
                                     />
                                    <label htmlFor="gr4_1">在庫ありのみ</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup04" id="gr4_2"
                                        value="在庫なしも表示" onChange={stockSwitch} checked={selectStock === '在庫なしも表示'}
                                     />
                                    <label htmlFor="gr4_2">在庫なしも表示</label>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className="c-sideMenu_list--item">
                        <details className="c-sideMenu_list--item_wrapper">
                            <summary className="c-sideMenu_list--item_sum">
                                <h4 className="c-sideMenu_list--item_sum--title">価格帯</h4>
                                <p className="c-sideMenu_list--item_sum--txt">{selectPrice}</p>
                            </summary>
                            <ul className="c-sideMenu_list--item_sublist">
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup5" id="gr5_1"
                                        value="～&yen;3,000" onChange={priceSwitch} checked={selectPrice === '～&yen;3,000'}
                                     />
                                    <label htmlFor="gr5_1">～&yen;3,000</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup05" id="gr5_2"
                                        value="～&yen;5,000" onChange={priceSwitch} checked={selectPrice === '～&yen;5,000'}
                                     />
                                    <label htmlFor="gr5_2">～&yen;5,000</label>
                                </li>
                                <li className="c-sideMenu_list--item_sublist--item">
                                    <input 
                                        type="radio" name="radiogroup05" id="gr5_3"
                                        value="～&yen;9,000" onChange={priceSwitch} checked={selectPrice === '～&yen;9,000'}
                                     />
                                    <label htmlFor="gr5_3">～&yen;9,000</label>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <div className="c-btn_extract--area">
                    <a href="#" className="c-btn_extract is-reset">リセット</a>
                    <a href="#" className="c-btn_extract is-submit">条件を絞り込む</a>
                </div>
            </aside>
        </Fragment>
    );
};
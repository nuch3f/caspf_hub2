import { Fragment } from "react";
import { useState } from 'react';
export const EcDetailRightRadio = () => {
    const [selectColorName, setVal] = useState('カラーを選択してください');
    const colorSwitch = e => setVal(e.target.value);
    const [selectSize, setSizeVal] = useState('サイズを選択してください');
    const sizeSwitch = e => setSizeVal(e.target.value);

    return (
        <Fragment>
            <div className="p-ecDetail_right--heading_color">
                <p className="p-ecDetail_right--heading_color--choose">
                    カラー：<span className="p-ecDetail_right--heading_color--choose_txt">{selectColorName}</span>
                </p>
                <ul className="p-ecDetail_right--heading_color--list">
                    <li className="p-ecDetail_right--heading_color--list_item">
                        <input 
                            type="radio" name="radiokgroup_color" id="color01"
                            value="アイボリー" onChange={colorSwitch} checked={selectColorName === 'アイボリー'}
                            />
                        <label htmlFor="color01"><img src="/assets/img/ec/detail/colortip_ivory.jpg" alt="アイボリー" /></label>
                    </li>
                    <li className="p-ecDetail_right--heading_color--list_item">
                        <input 
                            type="radio" name="radiokgroup_color" id="color02"
                            value="ブラック" onChange={colorSwitch} checked={selectColorName === 'ブラック'}
                            />
                        <label htmlFor="color02"><img src="/assets/img/ec/detail/colortip_black.jpg" alt="ブラック" /></label>
                    </li>
                    <li className="p-ecDetail_right--heading_color--list_item">
                        <input 
                            type="radio" name="radiokgroup_color" id="color03"
                            value="ネイビー" onChange={colorSwitch} checked={selectColorName === 'ネイビー'}
                            />
                        <label htmlFor="color03"><img src="/assets/img/ec/detail/colortip_navy.jpg" alt="ネイビー" /></label>
                    </li>
                    <li className="p-ecDetail_right--heading_color--list_item">
                        <input 
                            type="radio" name="radiokgroup_color" id="color04"
                            value="レッド" onChange={colorSwitch} checked={selectColorName === 'レッド'}
                            />
                        <label htmlFor="color04"><img src="/assets/img/ec/detail/colortip_red.jpg" alt="レッド" /></label>
                    </li>
                </ul>
            </div>
            <div className="p-ecDetail_right--heading_size">
                <p className="p-ecDetail_right--heading_size--choose">
                    サイズ：<span className="p-ecDetail_right--heading_size--choose_txt">{selectSize}</span>
                </p>
                <ul className="p-ecDetail_right--heading_size--list">
                    <li className="p-ecDetail_right--heading_size--list_item">
                        <input 
                            type="radio" name="radiogroup_size" id="size01" 
                            value="S" onChange={sizeSwitch} checked={selectSize === 'S'}
                         />
                        <label htmlFor="size01">S</label>
                    </li>
                    <li className="p-ecDetail_right--heading_size--list_item">
                        <input 
                            type="radio" name="radiogroup_size" id="size02"
                            value="M" onChange={sizeSwitch} checked={selectSize === 'M'}
                         />
                        <label htmlFor="size02">M</label>
                    </li>
                    <li className="p-ecDetail_right--heading_size--list_item">
                        <input 
                            type="radio" name="radiogroup_size" id="size03"
                            value="L" onChange={sizeSwitch} checked={selectSize === 'L'}
                         />
                        <label htmlFor="size03">L</label>
                    </li>
                </ul>
            </div>
            </Fragment>
            );
        };
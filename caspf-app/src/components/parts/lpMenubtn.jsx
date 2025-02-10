import { Fragment } from "react";

export const LpMenuBtn = () => {
    const LpMenuBtnClick = () => {
        document.getElementById('p-lp_header').classList.toggle('is-headerOpen');
    }
    return (
    <Fragment>
        <div className="p-lp_header--menuBtn" onClick={LpMenuBtnClick}>
            <span className="p-lp_header--menuBtn_bar"></span>
            <span className="p-lp_header--menuBtn_bar"></span>
            <span className="p-lp_header--menuBtn_bar"></span>
        </div>
    </Fragment>
    );
};
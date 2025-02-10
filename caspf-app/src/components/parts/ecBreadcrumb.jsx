import { Fragment } from "react";
export const EcBreadcrumb = (props) => {
    const breadcrumbPagename = {
        pname: props.pagename,
    }
    return (
        <Fragment>
            <ol className="c-breadcrumb">
                <li className="c-breadcrumb_item">
                    <a href="/samplesite/ec/"><span>Home</span></a>
                </li>
                <li className="c-breadcrumb_item">
                    <span>{breadcrumbPagename.pname}</span>
                </li>
            </ol>
            
        </Fragment>
    );
};
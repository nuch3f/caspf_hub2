import '../sass/style.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from "react";
import { SHeaderContent } from "./parts/sHeader";
import { SFooterContent } from "./parts/sFooter";
import { EcHeaderTextBanner } from './parts/ecHeadTextBanner';
import { EcBreadcrumb } from './parts/ecBreadcrumb';
import { EcDetailLeftContent } from './parts/ecDetailLeftContent';
import { EcDetailRightContent } from './parts/ecDetailRightContent';
import { EcDetailRecommend } from './parts/ecDetailRecommend';

const titleText = 'Item Detail | CASPF New Clothing | Sample page of CASPF Portfolio';
const descriptionText = 'Sample page of CASPF portfolio site';
const pageName = "商品詳細";

export const EcDetail = () => {
    return (
      <Fragment>
        <HelmetProvider>
          <Helmet
              title={ titleText }
              meta={[
                  { name: 'description', content: descriptionText }
              ]}
          />
        </HelmetProvider>
        <div className="app p-ecDetail">
          <SHeaderContent />
          <main className="p-ecDetail_main">
            {/* <EcHeaderTextBanner /> */}
            <section className="l-main_container">
              <EcBreadcrumb pagename={pageName} />
              <section className="p-ecDetail_main--container">
                <EcDetailLeftContent />
                <EcDetailRightContent />
              </section>
              <EcDetailRecommend />
            </section>
          </main>
          <SFooterContent />
        </div>
      </Fragment>
    );
  };
import '../sass/style.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from "react";
import { SHeaderContent } from "./parts/sHeader";
import { SFooterContent } from "./parts/sFooter";
import { EcHeaderTextBanner } from './parts/ecHeadTextBanner';
import { EcBreadcrumb } from './parts/ecBreadcrumb';
import { EcListSideMenu } from './parts/ecListSideMenu';
import { EcListContent } from './parts/ecListContent';
const titleText = 'Item List | CASPF New Clothing | Sample page of CASPF Portfolio';
const descriptionText = 'Sample page of CASPF portfolio site';
const pageName = "商品一覧";

export const EcList = () => {
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
        <div className="app p-ecList">
          <SHeaderContent />
          <main className="p-ecList_main">
            <EcHeaderTextBanner />
            <section className="l-main_container">
              <EcBreadcrumb pagename={pageName} />
              <section className="p-ecList_main--container">
                <EcListSideMenu />
                <EcListContent />
              </section>
            </section>
          </main>
          <SFooterContent />
        </div>
      </Fragment>
    );
  };
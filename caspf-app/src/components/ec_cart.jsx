import '../sass/style.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from "react";
import { SHeaderContent } from "./parts/sHeader";
import { SFooterContent } from "./parts/sFooter";
import { EcBreadcrumb } from './parts/ecBreadcrumb';
import { EcCartRecommend } from './parts/ecCartRecommend';
import { EcCartContent } from './parts/ecCartContent';
const titleText = 'Item List | CASPF New Clothing | Sample page of CASPF Portfolio';
const descriptionText = 'Sample page of CASPF portfolio site';
const pageName = "お買い物カート";
export const EcCartPage = () => {
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
         <div className="app p-ecCart">
          <SHeaderContent />
          <main className="p-ecCart_main">
            <section className="l-main_container">
              <EcBreadcrumb pagename={pageName} />
              <EcCartContent />
              <EcCartRecommend />
            </section>
          </main>
          <SFooterContent />
        </div>
      </Fragment>
    );
  };
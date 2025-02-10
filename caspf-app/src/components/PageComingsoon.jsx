import '../sass/style.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from "react";
import { SHeaderContent } from "./parts/sHeader";
import { SFooterContent } from "./parts/sFooter";
import { EcBreadcrumb } from './parts/ecBreadcrumb';
const titleText = 'Coming Soon | CASPF New Clothing | Sample page of CASPF Portfolio';
const descriptionText = 'Sample page of CASPF portfolio site';
const pageName = "Coming Soon";
export const ComingSoon = () => {
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
         <div className="app">
          <SHeaderContent />
          <main>
            <section className="l-main_container">
              <EcBreadcrumb pagename={pageName} />
              <div className="l-main_container--content">
                <h1 className="l-main_container--content_title">Coming Soon</h1>
                <p className="l-main_container--content_text"></p>
              </div>
            </section>
          </main>
          <SFooterContent />
        </div>
      </Fragment>
    );
  };
import '../sass/style.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from "react";
import { SHeaderContent } from "./parts/sHeader";
import { SFooterContent } from "./parts/sFooter";
import { EcTopMvContent } from "./parts/ecTopMv";
import { EcTopNewArrivalContent } from './parts/ecTopNewArrival';
import { EcTopRankingContent } from './parts/ecTopRanking';
import { EcTopTopicsContent } from './parts/ecTopTopics';
import { EcHeaderTextBanner } from './parts/ecHeadTextBanner';
const titleText = 'CASPF New Clothing | Sample page of CASPF Portfolio';
const descriptionText = 'Sample page of CASPF portfolio site';

export const EcHome = () => {
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
        <div className="app p-ecTop">
          <SHeaderContent />
          <main className="p-ecTop_main">
            <EcHeaderTextBanner />
            <EcTopMvContent />
            <section className="l-main_container">
              <EcTopNewArrivalContent />
              <EcTopRankingContent />
              <section className="p-ecTop_collection">
                <h3 className="p-ecTop_common--title">Collection</h3>
                <div className="p-ecTop_collection--banner">
                  <a href='/samplesite/ec/comingsoon'>
                    <img src="/assets/img/ec/top/banner_collection.jpg" alt="collections" />
                  </a>
                </div>
              </section>
              <EcTopTopicsContent />
              <section className="p-ecTop_brand">
                <h3 className="p-ecTop_common--title">Brands</h3>
                <ul className="p-ecTop_brand--list">
                  <li className="p-ecTop_brand--list_item">
                    <div className="p-ecTop_brand--list_item--img">
                      <img src="/assets/img/ec/top/brandlogo01.jpg" alt="brand_name1" />
                      <p className="p-ecTop_brand--list_item--brandname">waterfalls</p>
                    </div>
                  </li>
                  <li className="p-ecTop_brand--list_item">
                  <div className="p-ecTop_brand--list_item--img">
                      <img src="/assets/img/ec/top/brandlogo02.jpg" alt="brand_name2" />
                      <p className="p-ecTop_brand--list_item--brandname">shootingstars</p>
                    </div>
                  </li>
                  <li className="p-ecTop_brand--list_item">
                  <div className="p-ecTop_brand--list_item--img">
                      <img src="/assets/img/ec/top/brandlogo03.jpg" alt="brand_name3" />
                      <p className="p-ecTop_brand--list_item--brandname">from the cutting</p>
                    </div>
                  </li>
                </ul>
              </section>
            </section>
          </main>
          <SFooterContent />
        </div>
      </Fragment>
    );
  };
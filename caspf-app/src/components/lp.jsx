import '../sass/style.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment, useState  } from "react";
import { LpMenuBtn } from "./parts/lpMenubtn";
import { LpBulletBtn } from "./parts/lpBulletBtn";
import { LpMv } from "./parts/lpMv";
const titleText = 'CASPF | A Portfolio site';
const descriptionText = 'CASPF\'s portfolio site ';

export const Home = () => {
  const LpMenuBtnClick = () => {
    document.getElementById('p-lp_header').classList.toggle('is-headerOpen');
  }
  const LpWorkBtnOn = () => {
    document.getElementById('section2').classList.add('is-btnHover');
    document.getElementById('section3').classList.add('is-btnHover');
  }
  const LpWorkBtnOff = () => {
    document.getElementById('section2').classList.remove('is-btnHover');
    document.getElementById('section3').classList.remove('is-btnHover');
  }
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
        <div className="app p-lp">
          <header className="p-lp_header" id="p-lp_header">
              <div className="p-lp_header--container">
                <div className="p-lp_header--logo">
                  <img src="/assets/img/common/logo_caspf.svg" alt="caspf"></img>
                </div>
                <LpMenuBtn />
              </div>
              <div className="p-lp_header--menu">
                <ul className="p-lp_header--menu_list">
                  <li className="p-lp_header--menu_list--item" onClick={LpMenuBtnClick}><a href="#section2">WORKS1</a></li>
                  <li className="p-lp_header--menu_list--item" onClick={LpMenuBtnClick}><a href="#section3">WORKS2</a></li>
                  <li className="p-lp_header--menu_list--item" onClick={LpMenuBtnClick}><a href="#section4">WORKS3</a></li>
                  <li className="p-lp_header--menu_list--item" onClick={LpMenuBtnClick}><a href="#section5">ABOUT</a></li>
                </ul>
              </div>
          </header>
          <main>
            <div className="p-lp_container">
              <h1 className="p-lp_gtitle">CASPF portfolio site</h1>
              <section className="p-lp_sec p-lp_mv" id="section1">
                <LpMv />
              </section>
              <section className="p-lp_sec p-lp_works" id="section2">
                <h2 className="p-lp_ctitle">WORKS</h2>
                <div className="p-lp_works--content">
                    <a href="/samplesite/ec" 
                      onMouseEnter={LpWorkBtnOn}
                      onMouseLeave={LpWorkBtnOff}
                    >
                      Visit Sample EC Site
                    </a>
                </div>
              </section>
              <section className="p-lp_sec p-lp_works demo" id="section3">
                <div className="p-lp_works--content">
                    <a href="https://demo.caspf.info/" 
                      onMouseEnter={LpWorkBtnOn}
                      onMouseLeave={LpWorkBtnOff}
                    >
                      Visit Sample Demo Site
                    </a>
                </div>
              </section>
              <section className="p-lp_sec p-lp_other" id="section4">
                <h3 className="p-lp_ctitle">OTHER WORKS</h3>
                <div className="p-lp_other--inner">
                  <ul className="p-lp_other--list">
                    <li className="p-lp_other--list_item">
                      <a href="https://atelier-plantsplanet.com/app_information/" target="_blank">
                        <div className="p-lp_other--list_item--iframe">
                          <iframe src="/animation/portfolio_app.html" frameBorder="0"></iframe>
                        </div>
                        <p className="p-lp_other--list_item--title">ECサイト（インテリア・生活雑貨）</p>
                      </a>
                    </li>
                    <li className="p-lp_other--list_item">
                      <a href="http://atelier-plantsplanet.com/app_information/lp_haird/" target="_blank">
                        <img src="/assets/img/lp/bnr_haird_l.jpg" alt="lp" />				
                        <p className="p-lp_other--list_item--title">ブランドLP（ファッションアクセサリ）</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="p-lp_sec p-lp_about" id="section5">
              <h3 className="p-lp_ctitle">ABOUT</h3>
              <div className="p-lp_about--inner">
                <dl>
                  <dt>担当領域：</dt>
                  <dd>デザイン、フロントエンド</dd>
                  <dt>言語：</dt>
                  <dd>HTML, CSS/SASS, Javascript, TypeScript, PHP, perl</dd>
                  <dt>環境/フレームワーク：</dt>
                  <dd>WordPress, React, Vue, jQuery, smarty, Lalabel, Gulp</dd>
                  <dt>経歴：</dt>
                  <dd>ECサイトの新規構築、運用、リニューアル等を担当。そのほか不動産、フィットネス、教育、エステティックサロン等のサイト制作経験あり。</dd>
                </dl>
              </div>
              </section>
            </div>
            <LpBulletBtn />
          </main>
          <footer className="p-lp_footer">
            <p className="p-lp_footer--copyright">&copy;caspf</p>
          </footer>
        </div>
      </Fragment>
    );
};
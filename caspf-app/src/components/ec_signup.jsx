import '../sass/style.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from "react";
import { SHeaderContent } from "./parts/sHeader";
import { SFooterContent } from "./parts/sFooter";
import { EcBreadcrumb } from './parts/ecBreadcrumb';
import { EcFormBirthSelect } from './parts/ecFormBirthSelect';
const titleText = '新規会員登録 | CASPF New Clothing | Sample page of CASPF Portfolio';
const descriptionText = 'Sample page of CASPF portfolio site';
const pageName = "新規会員登録";
export const EcSignupPage = () => {
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
          <main className="p-ecSignup">
            <section className="l-main_container">
              <EcBreadcrumb pagename={pageName} />
              <div className="p-ecSignup_content">
                <h1 className="p-ecSignup_content--title">新規会員登録</h1>
                <p className="p-ecSignup_content--lead">
                  ご登録完了後、ご入力いただいたメールアドレスに確認メールをお送り致します。
                </p>
                <form className="c-form">
                  <dl>
                    <dt>お名前</dt>
                    <dd>
                      <input name="" type="text" placeholder="山田"></input>
                      <input name="" type="text" placeholder="太郎"></input>
                    </dd>
                    <dt>お名前カナ</dt>
                    <dd>
                      <input name="" type="text" placeholder="ヤマダ"></input>
                      <input name="" type="text" placeholder="タロウ"></input>
                    </dd>
                    <dt>メールアドレス</dt>
                    <dd>
                      <input name="" type="email" placeholder="your-mail-address@yourmail.com"></input>
                    </dd>
                    <dt>パスワード</dt>
                    <dd>
                      <input name="" type="password" placeholder="半角英数字8文字以上"></input>
                    </dd>
                    <dt>パスワード（確認用）</dt>
                    <dd>
                      <input name="" type="password" placeholder="半角英数字8文字以上"></input>
                    </dd>
                    <dt>性別</dt>
                    <dd>
                      <input type="radio" name="gen" value="male" id="gen1" /><label htmlFor="gen1">男性</label>
                      <input type="radio" name="gen" value="female" id="gen2" /><label htmlFor="gen2">女性</label>
                      <input type="radio" name="gen" value="noanswer" id="gen3" /><label htmlFor="gen3">無回答</label>
                    </dd>
                    <dt>生年月日</dt>
                    <dd>
                      <EcFormBirthSelect />
                    </dd>
                  </dl>
                  <h2 className="p-ecSignup_content--subtitle">会員規約</h2>
                  <div className="p-ecSignup_content--terms">
                    <h5 className="p-ecSignup_content--terms_title">1.利用規約</h5>
                    <p className="p-ecSignup_content--terms_text">
                      ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。
                    </p>
                    <h5 className="p-ecSignup_content--terms_title">2.規約項目</h5>
                    <p className="p-ecSignup_content--terms_text">
                      ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。ここに規約テキストが入ります。
                    </p>
                  </div>
                  <div className="c-btn_area">
                    <a href="#" className='c-btn_more'>同意して会員登録する</a> 
                  </div>
                </form>
              </div>
            </section>
          </main>
          <SFooterContent />
        </div>
      </Fragment>
    );
  };
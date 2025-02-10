import { Fragment } from "react";
import { EcTopicsCell } from "./ecTopicsCell";
export const EcTopTopicsContent = () => {
    const topicsItems = [
        {imgFile: "img_topics01.jpg",title: "【＃OOTD】人気コーデ着こなしスナップ",excerpt: "人気ショップスタッフが薦める、イチ押しのコーディネートを紹介！"},
        {imgFile: "img_topics02.jpg",title: "今シーズン注目のアイウェア特集",excerpt: "目元の印象がガラリと変わる！さりげなく垢抜けを演出できる今年注目のアイテムを揃えました"},
        {imgFile: "img_topics03.jpg",title: "週末どこ行く？おでかけコーデ特集",excerpt: "日帰り、1泊、長期旅行…押さえておきたい着回しのポイントと激売れマストバイな旅行グッズも大公開！"},
        {imgFile: "img_topics01.jpg",title: "トピックスコンテンツタイトル４",excerpt: "テストテスト"},
        {imgFile: "img_topics02.jpg",title: "トピックスコンテンツタイトル５",excerpt: "テストテストテスト"},
        {imgFile: "img_topics03.jpg",title: "トピックスコンテンツタイトル６",excerpt: ""}
    ];
    return (
    <Fragment>
        <section className="p-ecTop_topics">
            <h3 className="p-ecTop_common--title">Topics</h3>
            <div className="p-ecTop_topics--list">
            {topicsItems.map((value, index) => {
                return (
                    <div className="c-topicCell" key={index}>
                    <EcTopicsCell
                        imgFile={topicsItems[index].imgFile}
                        title={topicsItems[index].title}
                        excerpt={topicsItems[index].excerpt}
                    />
                    </div>
                    )
                })
            }
            </div>
            <div className="c-btn_area">
                <a href="/samplesite/ec/comingsoon" className="c-btn_more">トピックスをもっと見る</a>
            </div>
        </section>
    </Fragment>
    );
};
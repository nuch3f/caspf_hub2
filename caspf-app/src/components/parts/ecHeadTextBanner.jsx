import { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
export const EcHeaderTextBanner = () => {

    return (
    <Fragment>
        <div className="l-main_textBanner">
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            modules={[Autoplay]}
            className="l-main_textBanner--list"
            >
                <SwiperSlide className="l-main_textBanner--list_item">新規会員特典！&yen;1,000クーポンプレゼント中！</SwiperSlide>
                <SwiperSlide className="l-main_textBanner--list_item">お近くの店舗で受け取りサービス好評受付中！</SwiperSlide>
                <SwiperSlide className="l-main_textBanner--list_item">20xx秋冬Collection予約開始しました</SwiperSlide>
            </Swiper>
        </div>
        
    </Fragment>
    );
};
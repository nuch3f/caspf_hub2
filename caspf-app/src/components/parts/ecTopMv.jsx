import { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
export const EcTopMvContent = () => {

    return (
    <Fragment>
        <section className="p-ecTop_Mv">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={true}
                className="p-ecTop_Mv--list"
            >
                <SwiperSlide className="p-ecTop_Mv--list_item">
                    <picture>
                        <source media="(min-width: 768px)" srcset="/assets/img/ec/top/mv/bnr_mv01.jpg" />
                        <source media="(max-width: 767px)" srcset="/assets/img/ec/top/mv/bnr_mv01sp.jpg" />
                        <img src="/assets/img/ec/top/mv/bnr_mv01.jpg" alt="caspf sample" />
                    </picture>
                </SwiperSlide>
                <SwiperSlide className="p-ecTop_Mv--list_item">
                    <picture>
                        <source media="(min-width: 768px)" srcset="/assets/img/ec/top/mv/bnr_mv02.jpg" />
                        <source media="(max-width: 767px)" srcset="/assets/img/ec/top/mv/bnr_mv02sp.jpg" />
                        <img src="/assets/img/ec/top/mv/bnr_mv02.jpg" alt="caspf sample" />
                    </picture>
                </SwiperSlide>
                <SwiperSlide className="p-ecTop_Mv--list_item">
                    <picture>
                        <source media="(min-width: 768px)" srcset="/assets/img/ec/top/mv/bnr_mv03.jpg" />
                        <source media="(max-width: 767px)" srcset="/assets/img/ec/top/mv/bnr_mv03sp.jpg" />
                        <img src="/assets/img/ec/top/mv/bnr_mv03.jpg" alt="caspf sample" />
                    </picture>
                </SwiperSlide>
            </Swiper>
        </section>
    </Fragment>
    );
};
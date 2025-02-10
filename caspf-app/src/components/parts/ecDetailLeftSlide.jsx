
import { useRef, useState } from "react";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
export const EcDetailLeftSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Fragment>
            <div className="p-ecDetail_left--slider">
                <Swiper
                    style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="p-ecDetail_left--slider_list"
                >
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img01.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img02.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img03.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img04.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img05.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img06.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img07.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img08.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img09.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_list--item">
                    <img src="/assets/img/ec/detail/img10.jpg" alt="caspf sample" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    //onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={10}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="p-ecDetail_left--slider_thumblist"
                >
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img01.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img02.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img03.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img04.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img05.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img06.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img07.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img08.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img09.jpg" alt="caspf sample" />
                    </SwiperSlide>
                    <SwiperSlide className="p-ecDetail_left--slider_thumblist--item">
                    <img src="/assets/img/ec/detail/img10.jpg" alt="caspf sample" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fragment>
    );
};
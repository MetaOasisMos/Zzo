import {useDraggable} from "react-use-draggable-scroll";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from "swiper";


const Scrollers = ({scroller_images, reverse = false}) => {

    return (
        <>
            <Swiper
                slidesPerView={6}
                autoplay={{delay: 0, disableOnInteraction: false, reverseDirection: reverse}}
                loop={true}
                spaceBetween={20}
                speed={3500}
                noSwiping={true}
                modules={[Autoplay]}
                className={"mySwiper my-3 swiper-sm"}
            >
                {scroller_images.map((slide) => {
                    return (
                        <SwiperSlide>
                            <img src={slide} alt={'offer-img'}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
        ;
}

export default Scrollers;
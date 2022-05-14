import {useDraggable} from "react-use-draggable-scroll";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay} from "swiper";


const Scrollers = ({scroller_images, delay}) => {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                autoplay={{delay: delay}}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className={"mySwiper my-3 swiper-sm"}
            >
                {scroller_images.map((slide) => {
                    return (
                        <SwiperSlide>
                            <div>
                                <div>
                                    <img src={slide} alt={'offer-img'}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            {/*    <div className={'scroller'}*/}
            {/*     ref={ref}   {...events}>*/}
            {/*    {scroller_images.map((item) => {*/}
            {/*        return (<img src={item} className={'scroller-img'}/>)*/}
            {/*    })}*/}
            {/*</div>*/}
        </>
    );
}

export default Scrollers;
// import {useDraggable} from "react-use-draggable-scroll";
// import {useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// import {Swiper, SwiperSlide} from "swiper/react";
// import "swiper/swiper.scss";

import "swiper/swiper.scss"; // core Swiper
// import "swiper/modules/navigation/navigation.scss"; // Navigation module
// import "swiper/modules/pagination/pagination.scss"; // Pagination module
// import "swiper/css/pagination";
import { Autoplay } from "swiper";

const Scrollers = ({ scroller_images, reverse = false }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      loopedSlides={6}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      loop={true}
      spaceBetween={20}
      speed={3500}
      noSwiping={true}
      modules={[Autoplay]}
      className={"mySwiper my-3 swiper-sm"}
    >
      {scroller_images.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={slide} alt={"offer-img"} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Scrollers;

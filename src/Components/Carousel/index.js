import React from "react";
import Scrollers from "../Scrollers";
import slider1 from "../../assets/images/carousel-img/01.png";
import slider2 from "../../assets/images/carousel-img/02.png";
import slider3 from "../../assets/images/carousel-img/03.png";
import slider4 from "../../assets/images/carousel-img/04.png";
import slider5 from "../../assets/images/carousel-img/05.png";
import slider6 from "../../assets/images/carousel-img/06.png";
import slider7 from "../../assets/images/carousel-img/07.png";
import slider8 from "../../assets/images/carousel-img/08.png";
import slider9 from "../../assets/images/carousel-img/09.png";
import slider10 from "../../assets/images/carousel-img/10.png";
import slider11 from "../../assets/images/carousel-img/11.png";
import slider12 from "../../assets/images/carousel-img/12.png";
import slider13 from "../../assets/images/carousel-img/13.png";
import slider14 from "../../assets/images/carousel-img/14.png";
import slider15 from "../../assets/images/carousel-img/15.png";
import slider16 from "../../assets/images/carousel-img/16.png";
import slider17 from "../../assets/images/carousel-img/17.png";
import slider18 from "../../assets/images/carousel-img/18.png";
import slider19 from "../../assets/images/carousel-img/19.png";
import slider20 from "../../assets/images/carousel-img/20.png";
import slider21 from "../../assets/images/carousel-img/21.png";
import slider22 from "../../assets/images/carousel-img/22.png";
import slider23 from "../../assets/images/carousel-img/23.png";
import slider24 from "../../assets/images/carousel-img/24.png";
import slider25 from "../../assets/images/carousel-img/25.png";
import slider26 from "../../assets/images/carousel-img/26.png";
import slider27 from "../../assets/images/carousel-img/27.png";
import slider28 from "../../assets/images/carousel-img/28.png";
import slider29 from "../../assets/images/carousel-img/29.png";
import slider30 from "../../assets/images/carousel-img/30.png";

export default function Carousel() {
  return (
    <>
      {/* Three scrollers for gallery*/}
      <div className={"mb-20"}>
        <Scrollers
          scroller_images={[
            slider1,
            slider2,
            slider3,
            slider4,
            slider5,
            slider6,
            slider7,
            slider8,
            slider9,
            slider10,
       
          ]}
          reverse={true}
        />
      </div>
      <div className={"mb-20"}>
        <Scrollers
          scroller_images={[
            slider11,
            slider12,
            slider13,
            slider14,
            slider15,
            slider16,
            slider17,
            slider18,
            slider19,
            slider20,
          ]}
        />
      </div>
      <div className={"mb-20"}>
        <Scrollers
          scroller_images={[
            slider21,
            slider22,
            slider23,
            slider24,
            slider25,
            slider26,
            slider27,
            slider28,
            slider29,
            slider30,
          ]}
          reverse={true}
        />
      </div>
    </>
  );
}

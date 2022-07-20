import { Parallax } from "react-scroll-parallax";
import zzoppers from "../../assets/images/zzoppers-img.png";

import "./style.scss";

const Meet = () => {
  return (
    <div className={"meet-component"}>
      <div className="container">
        <div style={{ margin: "auto", textAlign: "center" }}>
          <div className={"meet-text-1"}>LET'S</div>
          <div className={"meet-text-2"}>MEET 2929</div>
          <Parallax scale={[0.6, 1]}>
            <img src={zzoppers} className="zzoppers-img" />
          </Parallax>
          <div className={"meet-text-3"}>
            There are 10 unique animal characters in Zzoopers Genesis
          </div>
          <div className={"meet-meta-text"}>
            Tiger, Elephant, Panda, Unicorn, Cheetah, Deer, Fox, Monkey,
            Penguin, and Rabbit.
            <br /> Each Zzoopers has its own unique appearance, personality and
            storyline in different metaverses.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;

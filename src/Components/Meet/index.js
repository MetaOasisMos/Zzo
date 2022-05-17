import zzoppers from "../../assets/images/zzoppers-img.png";

import "./style.scss";

const Meet = () => {
  return (
    <div className={"meet-component"}>
      <div className="container">
        <div style={{ margin: "auto", textAlign: "center" }}>
          <div className={"meet-text-1"}>LET'S</div>
          <div className={"meet-text-2"}>MEET 5555</div>
          <img src={zzoppers} className="zzoppers-img" />
          <div className={"meet-text-3"}>
            There are 10 unique animal characters in the Zzoopers.
          </div>
          <div className={"meet-meta-text"}>
            Tiger, Elephant, Panda, Unicorn, Leopard, Elk, Fox, Monkey, Penguin,
            and Rabbit.
            <br /> Each Zzoopers has its own unique appearance, personality and
            storyline in different metaverses.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;

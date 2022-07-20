// import hero_img from "../../assets/images/hero image.svg";
import hero_img_sm from "../../assets/images/hero image sm.svg";
import "./style.scss";

const Hero = () => {
  return (
    <div className={"hero"}>
      <div className="container">
        <div className="hero-content">
          <div className="left">
            <div className="subtitle">What is</div>
            <div className="title">Zzoopers Genesis?</div>
            <div className="desc">
              Zzoopers Genesis is a collection of 2929 unique animal avatars
              with different species and personalities. They are born on the
              Ethereum blockchain and ready to cross and explore the many
              metaverses!
            </div>
          </div>
          <img className="right" src={hero_img_sm} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

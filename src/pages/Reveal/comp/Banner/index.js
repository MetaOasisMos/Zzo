import ImgBanner from "../../../../assets/images/reveal/reveal-banner-img.png";
import IconArrow from "../../../../assets/images/link-right.svg";
import "./style.scss";

export default () => {
  return (
    <div className="reveal-banner">
      <div className="container">
        <div>
          <div className="title">
            <div className="title-gradient">Time to Reveal</div>
            Your Zzoopers Genesis
          </div>
          <div className="date">July 25th - August 10th</div>
          <div className="desc">
            Zzoopers Genesis is a 3D PFP collection of 5555 unique animal
            avatars with different species and personalities. Now it's time to
            MEET them! Are you ready to embark on the cross-metaverse journey
            together with them?
          </div>
          <a className="btn-go-reveal hover-up">
            Go to Reveal <img src={IconArrow} />
          </a>
        </div>
        <img src={ImgBanner} className="img-banner" />
      </div>
    </div>
  );
};

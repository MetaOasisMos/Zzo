import ImgBanner from "../../../../assets/images/reveal/reveal-banner-img.png";
import IconArrow from "../../../../assets/images/link-right.svg";
import "./style.scss";

export default () => {
  return (
    <div className="open-box-banner">
      <div className="container">
        <div className="left">
          <div className="title-1">1st Round of the Revelation</div>
          <div className="title-2">July 25th - August 10th</div>
          <div className="title-3">Fox & Unicon</div>
          <div className="title-4">Zzoopers Genesis revealed till now</div>
          <div className="title-5">
            <span className="current">323</span>/555
          </div>
          <div className="title-6">
            There are 5 rounds to reveal Zzoopers Genesis. At each round of
            reveal, 2 out of the 10 animal characters will go live. You can
            choose to claim, or wait. Better be hurry when it's your favorite
            character's turn.
          </div>
        </div>
        <img src={ImgBanner} className="img-banner" />
      </div>

      <div className="container">
        
        
        
        </div>


    </div>
  );
};

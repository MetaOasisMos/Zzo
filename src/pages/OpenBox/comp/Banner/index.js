import ImgBanner from "../../../../assets/images/reveal/reveal-banner-img.png";
import Avatar0 from "../../../../assets/images/open-box/0.png";
import Avatar1 from "../../../../assets/images/open-box/1.png";
import "./style.scss";

const rounds = [
  {
    avatar: Avatar0,
    title: "Goldthwaite",
    desc: "Be a lion at home and a fox abroad.",
  },
  {
    avatar: Avatar1,
    title: "Driscoll",
    desc: "A unicorn is a horse with a point of view.",
  },
];

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
        <div className="current-round">
          {rounds.map((item, index) => (
            <div className="round-item" key={index}>
              <img src={item.avatar} className="avatar" />
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

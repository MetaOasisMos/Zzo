import { useState } from "react";
import RevealModal from "../RevealModal";
import ImgBlindBox from "../../../../assets/images/reveal/blindbox.png";
import "./style.scss";

const boxList = [
  {
    img: ImgBlindBox,
    id: "#100",
    title: "Mystery Box",
  },
  {
    img: ImgBlindBox,
    id: "#102",
    title: "Mystery Box",
  },
  {
    img: ImgBlindBox,
    id: "#103",
    title: "Mystery Box",
  },
  {
    img: ImgBlindBox,
    id: "#104",
    title: "Mystery Box",
  },
  {
    img: ImgBlindBox,
    id: "#105",
    title: "Mystery Box",
  },

  {
    img: ImgBlindBox,
    id: "#106",
    title: "Mystery Box",
  },
];

export default () => {
  const [revealModalVisible, setRevealModalVisible] = useState(false);

  return (
    <div className="blind-boxes">
      <div className="container">
        <div className="boxes-list">
          {boxList.map((item) => (
            <div key={item.id} className="boxes-item">
              <img src={item.img} className="balance-img" />
              <div className="meta-info">
                <div className="id">{item.id}</div>
                <div className="title">{item.title}</div>
                <a
                  className="btn-reveal"
                  onClick={() => setRevealModalVisible(true)}
                >
                  Reveal Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {revealModalVisible && (
        <RevealModal onClose={() => setRevealModalVisible(false)} />
      )}
    </div>
  );
};

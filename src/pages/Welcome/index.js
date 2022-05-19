import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { ReactComponent as WelcomeBg } from "../../assets/images/welcome-bg.svg";
import welcome_text from "../../assets/images/welcome-text.png";
import enter_btn from "../../assets/images/enter-btn.png";
import IconArrowLeft from "../../assets/images/arrow-left.svg";
import IconArrowRight from "../../assets/images/arrow-right.svg";
import IconClose from "../../assets/images/close.svg";
import IconClickMe from "../../assets/images/click-me.gif";
import "./style.scss";

const zooList = [
  {
    id: "10",
    category: "Zzoopers",
    title: "Estill",
    desc: `Dear you, Deer me.`,
  },
  {
    id: "9",
    category: "Zzoopers",
    title: "Bomer",
    desc: `"Who Says Elements Can't Dance?"`,
  },
  {
    id: "8",
    category: "Zzoopers",
    title: "Goldthwaite",
    desc: `Be a lion at home and a fox abroad`,
  },
  {
    id: "7",
    category: "Zzoopers",
    title: "Tigre",
    desc: `I've got the moves like tiger!`,
  },
  {
    id: "6",
    category: "Zzoopers",
    title: "Dony",
    desc: `Always be yourself unless you can be a penguin`,
  },
  {
    id: "5",
    category: "Zzoopers",
    title: "Milius",
    desc: `Everyone knows the monkey, but the monkey knows no one`,
  },
  {
    id: "4",
    category: "Zzoopers",
    title: "Reynoso",
    desc: `Fast but not furious `,
  },
  {
    id: "3",
    category: "Zzoopers",
    title: "Driscoll",
    desc: `A unicorn is a horse with a point of view`,
  },
  {
    id: "2",
    category: "Zzoopers",
    title: "Bila",
    desc: `A rabbit aims for the moon`,
  },
  {
    id: "1",
    category: "Zzoopers",
    title: "Yutema",
    desc: `Proof that you can eat just bamboo and still be fat`,
  },
];

export default function WelcomePage({ enter_clicked }) {
  const [activeIndex, setActiveIndex] = useState("");
  const [activeItem, setActiveItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const showItem = (e) => {
    const fillname = e.target.getAttribute("fill");
    const number = /(\d+)/.exec(fillname)[0];
    zooList.forEach((item, index) => {
      if (item.id === number) {
        setActiveIndex(index);
        setActiveItem(item);
        setModalVisible(true);
      }
    });
  };

  const showItemDirect = (id) => {
    zooList.forEach((item, index) => {
      if (item.id === id) {
        setActiveIndex(index);
        setActiveItem(item);
        setModalVisible(true);
      }
    });
  };

  const closeModal = () => {
    setModalVisible(false);

    setActiveIndex("");
    setActiveItem({});
  };

  const goPrev = () => {
    setActiveItem(zooList[activeIndex]);
    setActiveIndex((prev) =>
      activeIndex === 0 ? zooList.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveItem(zooList[activeIndex]);
    setActiveIndex((prev) => (prev === zooList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={"welcome-page"}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <WelcomeBg onClick={showItem} className="welcome-bg" />
        <img src={welcome_text} className="welcome-text" />
        <img
          src={IconClickMe}
          className="click-me"
          onClick={() => showItemDirect("4")}
        />
        <img
          src={enter_btn}
          className="enter-btn hover-move"
          onClick={enter_clicked}
        />
      </div>
      {modalVisible && (
        <Modal open={true} onClose={closeModal}>
          <div className={"modal-body zoo-modal"}>
            <img src={IconClose} className="icon-close" onClick={closeModal} />
            <video
              src={`/zoo-videos/${activeItem.id}.mp4`}
              autoPlay={true}
              loop={true}
              muted={true}
              style={{ width: "294px", height: "294px", borderRadius: "16px" }}
            />

            <div className="category">{activeItem.category}</div>

            <div className="title">{activeItem.title}</div>
            <div className="desc">{activeItem.desc}</div>

            <div className="actions">
              <img
                src={IconArrowLeft}
                className="icon-arrow"
                onClick={goPrev}
              />
              <img
                src={IconArrowRight}
                className="icon-arrow"
                onClick={goNext}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

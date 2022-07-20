import { useState } from "react";
import ImgBlindBox from "../../../../assets/images/reveal/blindbox.png";
import clsx from "clsx";
import "./style.scss";

const tabs = ["My Zzoopers", "My Points"];
const filters = ["All", "Mystery box", "Revealed"];

const balanceList = [
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
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  return (
    <div className="reveal-balances">
      <div className="container">
        <div className="balances-header">
          <div className="balances-header-left">
            {tabs.map((item) => (
              <a
                className={clsx(activeTab === item && "active")}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="balances-header-right">
            {filters.map((item, index) => (
              <a
                onClick={() => setActiveFilter(item)}
                className={clsx(
                  "filter-btn",
                  activeFilter === item && "active"
                )}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        {activeTab === tabs[0] && (
          <div className="balances-list">
            {balanceList.map((item) => (
              <div key={item.id} className="balances-item">
                <img src={item.img} className="balance-img" />
                <div className="meta-info">
                  <div className="id">{item.id}</div>
                  <div className="title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === tabs[1] && (
          <div className="balances-coming">Coming Soon</div>
        )}
      </div>
    </div>
  );
};

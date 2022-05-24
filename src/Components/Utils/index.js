import { useState } from "react";
import clsx from "clsx";
import "./style.scss";
import exciting_experience_image from "../../assets/images/exciting experience image.png";
import nftairdropleftimg from "../../assets/images/nftairdropleftimg.png";
import nftairdroprightimg from "../../assets/images/nftairdroprightimg.png";
import stakingandharvestingimg from "../../assets/images/hello.gif";
import PhysicalZzoopersAirdropImg from "../../assets/images/PhysicalZzoopersAirdropImg.png";

import utilicon1 from "../../assets/images/utils-icon-1.svg";
import utilicon2 from "../../assets/images/utils-icon-2.svg";
import utilicon3 from "../../assets/images/utils-icon-3.svg";
import utilicon4 from "../../assets/images/utils-icon-4.svg";

const Utils = () => {
  const options = [
    "Cross-metaverse Experience",
    "Future Drops",
    "Have Fun and Earn",
    "Physical Zzoopers",
  ];

  const options_sm = [
    {
      text: "Cross-metaverse Experience",
      icon: utilicon1,
      body: "Which metaverse would you like to explore? The Sandbox, NFT Worlds, Decentraland, Worldwide Webb, Arcade land,…? Name it! Buckle up and LFG!",
    },
    {
      text: "Future Drops",
      icon: utilicon4,
      body: "How to travel to different metaverses? Holding your Zzoopers is all you need to do! Exclusive airdrops will facilitate your cross-metaverse journeys. ",
    },
    {
      text: "Have Fun and Earn",
      icon: utilicon3,
      body: "What happens if you hold more than one Zzoopers? Different Zzoopers may have different chemistry ganged together. Collect more and hold on to unravel all the fun behind.",
    },
    {
      text: "Physical Zzoopers",
      icon: utilicon2,
      body: "Some Zzoopers may drop to you from the metaverse to the real world. Be ready to meet these creatures physically in the near future! ",
    },
  ];

  const [selected, setSelected] = useState("Cross-metaverse Experience");

  return (
    <div className={"utils-container"}>
      <div className="container utils-container-lg">
        <div className="content">
          <div className="left">
            <p className={"main-title"}>Unlock Unlimited Utilities</p>
            {options.map((option) => {
              return (
                <p
                  onClick={() => {
                    setSelected(option);
                  }}
                  className={clsx(
                    "option",
                    selected === option && "selected-option"
                  )}
                >
                  {option}
                </p>
              );
            })}
          </div>
          <div className="right">
            <div style={{ display: "flex" }}>
              <div className={"side-bar-container"}>
                {selected === "Cross-metaverse Experience" && (
                  <>
                    {/* <img
                      src={exciting_experience_image}
                      style={{ width: "100%" }}
                    /> */}
                    <video
                      src="/utils-video.mp4"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      controls={false}
                      style={{ width: "100%" }}
                    />
                    <p className={"side-bar-para"}>
                      Which metaverse would you like to explore? The Sandbox,
                      NFT Worlds, Decentraland, Worldwide Webb, Arcade land,…?
                      Name it! Buckle up and LFG!
                    </p>
                  </>
                )}
                {selected === "Future Drops" && (
                  <>
                    <div style={{ display: "flex" }}>
                      <img
                        src={nftairdropleftimg}
                        className={"nftleftimg"}
                        style={{ margin: "0 auto 0 0" }}
                      />
                      <img
                        src={nftairdroprightimg}
                        className={"nftrightimg"}
                        style={{ margin: "0 0 0 auto" }}
                      />
                    </div>
                    <p className={"side-bar-para"}>
                      How to travel to different metaverses? Holding your
                      Zzoopers is all you need to do! Exclusive airdrops will
                      facilitate your cross-metaverse journeys.
                    </p>
                  </>
                )}
                {selected === "Have Fun and Earn" && (
                  <>
                    <img
                      src={stakingandharvestingimg}
                      style={{ width: "100%" }}
                    />
                    <p className={"side-bar-para"}>
                      What happens if you hold more than one Zzoopers? Different
                      Zzoopers may have different chemistry ganged together.
                      Collect more and hold on to unravel all the fun behind.
                    </p>
                  </>
                )}
                {selected === "Physical Zzoopers" && (
                  <>
                    <img
                      src={PhysicalZzoopersAirdropImg}
                      style={{ width: "100%" }}
                    />
                    <p className={"side-bar-para"}>
                      Some Zzoopers may drop to you from the metaverse to the
                      real world. Be ready to meet these creatures physically in
                      the near future!
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container utils-container-sm">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <p className={"utils-heading main-title"}>
              Unlock Unlimited Utilities
            </p>
            {options_sm.map((option) => {
              return (
                <div>
                  <div style={{ display: "flex" }}>
                    <img src={option.icon} className={"option-icon"} />
                    <p className={"option-text"}>{option.text}</p>
                  </div>
                  <p className={"option-body"}>{option.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utils;

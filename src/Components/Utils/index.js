import { useState, useRef } from "react";
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
    "Have Fun and Earn",
    "Future Drops",
    "Exclusive Merch Access",
  ];

  const videoRef = useRef(null);

  const options_sm = [
    {
      text: "Cross-metaverse Experience",
      icon: utilicon1,
      body: "Which metaverse would you like to explore? The Sandbox, NFT Worlds, Decentraland, Worldwide Webb, Arcade land,…? Name it! Buckle up and LFG!",
    },
    {
      text: "Have Fun and Earn",
      icon: utilicon3,
      body: "What happens if you hold more than one Zzoopers? Different Zzoopers may have different chemistry between them. There may be surprising outcomes when you pair different Zzoopers together. Collect more and hold on to unravel all the fun behind.",
    },
    {
      text: "Future Drops",
      icon: utilicon4,
      body: "Minting your Zzoopers is only the beginning of a great journey. Holders of Zzoopers will be entitled to exclusive airdrops as we embark on cross-metaverse journeys together.",
    },
    {
      text: "Exclusive Merch Access",
      icon: utilicon2,
      body: "Some Zzoopers may drop to you from the metaverse to the real world. Be ready to meet these creatures physically in the near future! More cool merchs will be developed with the inputs from our great community!",
    },
  ];

  const [selected, setSelected] = useState("Cross-metaverse Experience");

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className={"utils-container"}>
      <div className="container utils-container-lg">
        <div className="content">
          <div className="left">
            <p className={"main-title"}>Unlock Unlimited Utilities</p>
            {options.map((option, index) => {
              return (
                <p
                  key={index}
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
                      poster="/utils-video-poster.png"
                      muted={true}
                      loop={true}
                      controls={false}
                      ref={videoRef}
                      onClick={togglePlay}
                      style={{ width: "100%", cursor: "pointer" }}
                    />
                    <div className="tag">Cross-metaverse Experience</div>
                    <p className={"side-bar-para"}>
                      Which metaverse would you like to explore? <br />
                      The Sandbox, NFT Worlds, Decentraland, Worldwide Webb,
                      Arcade land,…?
                    </p>
                    <div className="slogan">Name it! Buckle up and LFG!</div>
                  </>
                )}
                {selected === "Have Fun and Earn" && (
                  <>
                    <video
                      src="/have-fun.mp4"
                      // poster="/utils-video-poster.png"
                      muted={true}
                      autoPlay={true}
                      loop={true}
                      controls={false}
                      ref={videoRef}
                      onClick={togglePlay}
                      style={{ width: "100%", cursor: "pointer" }}
                    />
                    <div className="tag">Have Fun and Earn</div>
                    <p className={"side-bar-para"}>
                      What happens if you hold more than one Zzoopers? Different
                      Zzoopers may have different chemistry between them. There
                      may be surprising outcomes when you pair different
                      Zzoopers together. Collect more and hold on to unravel all
                      the fun behind.
                    </p>
                  </>
                )}
                {selected === "Future Drops" && (
                  <>
                    {/* <div style={{ display: "flex" }}>
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
                    </div> */}
                    <video
                      src="/future-drops.mp4"
                      // poster="/utils-video-poster.png"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      controls={false}
                      ref={videoRef}
                      onClick={togglePlay}
                      style={{ width: "100%", cursor: "pointer" }}
                    />
                    <div>
                      <div className="tag">Future Drops</div>
                      <p className={"side-bar-para"}>
                        Minting your Zzoopers is only the beginning of a great
                        journey. Holders of Zzoopers will be entitled to
                        exclusive airdrops as we embark on cross-metaverse
                        journeys together.
                      </p>
                    </div>
                  </>
                )}

                {selected === "Exclusive Merch Access" && (
                  <>
                    <img
                      src={PhysicalZzoopersAirdropImg}
                      style={{ width: "100%" }}
                    />
                    <div className="tag">Physical Zzoopers</div>
                    <p className={"side-bar-para"}>
                      Some Zzoopers may drop to you from the metaverse to the
                      real world. Be ready to meet these creatures physically in
                      the near future! More cool merchs will be developed with
                      the inputs from our great community!
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
            {options_sm.map((option, index) => {
              return (
                <div key={index}>
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

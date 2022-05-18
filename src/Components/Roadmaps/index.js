import roadmapicon1 from "../../assets/images/roadmap-icon1.svg";
import roadmapicon2 from "../../assets/images/roadmap-icon2.svg";
import roadmapicon3 from "../../assets/images/roadmap-icon3.svg";
import roadmapicon4 from "../../assets/images/roadmap-icon4.svg";
import "./style.scss";

const RoadMap = () => {
  return (
    <div className={"roadmap-container"}>
      <div className="container">
        <p className={"roadmap-zzoopers-text small-title"}>ZZOOPERS</p>
        <p className={"roadmap-heading"}>Roadmap</p>
        <p className={"roadmap-metatext"}>
          The future we envision and the landscape we are to explore.
        </p>

        <div className={"row mt-5"}>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 road-map-container">
            <div style={{ display: "flex" }}>
              <div className={"roadmap-index-container"}>
                <p className={"roadmap-index-text"}>1</p>
              </div>
              <div style={{ color: "white" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img className={"roadmap-icon"} src={roadmapicon1} />
                  <p className={"road-map-name"}>
                    Mint and Reveal - May to June 2022
                  </p>
                </div>
                <p className={"road-map-text"}>
                  Mint event for Zzoopers Evo and the revelation of Zzoopers
                  Genesis.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 road-map-container">
            <div style={{ display: "flex" }}>
              <div className={"roadmap-index-container"}>
                <p className={"roadmap-index-text"}>2</p>
              </div>
              <div style={{ color: "white" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img className={"roadmap-icon"} src={roadmapicon2} />
                  <p className={"road-map-name"}>
                    Have Fun and Earn – Q2 to Q3 2022
                  </p>
                </div>
                <p className={"road-map-text"}>
                  Launch of various games to have fun and earn with Zzoopers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 road-map-container">
            <div style={{ display: "flex" }}>
              <div className={"roadmap-index-container"}>
                <p className={"roadmap-index-text"}>3</p>
              </div>
              <div style={{ color: "white" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img className={"roadmap-icon"} src={roadmapicon3} />
                  <p className={"road-map-name"}>
                    Exclusive Airdrops – Q3 2022
                  </p>
                </div>
                <p className={"road-map-text"}>
                  Airdrops of utility NFTs interoperable in leading metaverses.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 road-map-container">
            <div style={{ display: "flex" }}>
              <div className={"roadmap-index-container"}>
                <p className={"roadmap-index-text"}>4</p>
              </div>
              <div style={{ color: "white" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img className={"roadmap-icon"} src={roadmapicon4} />
                  <p className={"road-map-name"}>
                    Journey to Different Metaverses – Q3 2022
                  </p>
                </div>
                <p className={"road-map-text"}>
                  Experiences built in different metaverses open to the Zzoopers
                  holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;

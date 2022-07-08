import { animalsMapping } from "../../config";

import Countdown from "../../Components/SpiritCountdown";
import "./style.scss";

export default function Spirit() {
  return (
    <div>
      <div className="spirit-preview-page">
        {Object.keys(animalsMapping).map((key) => (
          <div className="safe-area" style={{ marginBottom: "300px" }}>
            <img src={`/animals/${key}.png`} className="result-avatar" />
            <div className="result-title">You are the {key} in Web 3.0</div>
            <div className="result-desc">
              <div
                dangerouslySetInnerHTML={{
                  __html: animalsMapping[key].desc1,
                }}
              />
              <div
                className="highlight"
                dangerouslySetInnerHTML={{
                  __html: animalsMapping[key].desc2,
                }}
              />
            </div>
            <div className="countdown-wrapper">
                <div className="title">
                  KuCoin NFT Marketplace
                  <br />
                  Windvane's first NFT Launchpad project
                </div>
                <div className="desc">"Zzoopers Genesis" Coming Soon</div>

                <Countdown
                  endTime={1657623600}
                  // onComplete={() => setPhase2Started(true)}
                />

                <a href="/" className="btn-view-more" target="_blank">
                  View more
                </a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

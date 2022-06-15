import { animalsMapping } from "../../config";


import config from "../../config";
import "./style.scss";


export default function Spirit() {
  return (
    <div>
      <div className="spirit-preview-page">
        {Object.keys(animalsMapping).map((key) => (
          <div className="safe-area" style={{marginBottom: '64px'}}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

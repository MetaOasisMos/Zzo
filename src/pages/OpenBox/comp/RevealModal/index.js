import React, { useState } from "react";
import ImgBlindBox from "../../../../assets/images/reveal/blindbox.png";
import ImgLoading from "../../../../assets/images/open-box/loading.svg";

import Modal from "@mui/material/Modal";
import "./style.scss";

export default ({ onClose }) => {
  const [step, setStep] = useState(0);

  const doReveal = async () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 3000);
  };
  return (
    <Modal open={true} onClose={onClose}>
      <div className={"modal-body reveal-modal"}>
        <div className="left">
          <img src={ImgBlindBox} className="img-blind-box" />
        </div>
        <div className="right">
          {step === 0 && (
            <div className="step-0">
              <div>
                <div className="title">Ready to reveal</div>
                <div className="desc">
                  Zzoopers Evo are used to redeem Zzoopers Genesis. 1 Zzoopers
                  Evo = 1 Random Zzoopers Genesis.
                  <br />
                  <br />
                  Click "Reveal Now" below to meet your exclusive Zzoopers
                  Genesis.
                </div>
              </div>
              <div className="actions">
                <a className="btn-trans hover-move" onClick={onClose}>
                  Cancel
                </a>
                <a className="btn-blue hover-move" onClick={doReveal}>
                  Reveal Now
                </a>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="step-1">
              <img src={ImgLoading} className="img-loading" />
              <div>
                <div className="title">Revealing</div>
                <div className="desc">
                  Please don't close the window.
                  <br />
                  <br />
                  The redemption is about to be completed. May you could meet
                  your favorite character!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

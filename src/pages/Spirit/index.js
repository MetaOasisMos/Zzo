// import Header from "../../Components/Header";
// import Footer from "../../Components/Footer";
import { useEffect, useState, useContext } from "react";
import IconUnknown from "../../assets/images/spirit/unknown.gif";
import IconAvatar from "../../assets/images/spirit/avatar.png";
import IconZzoopers from "../../assets/images/spirit/zzoopers.svg";
import IconWalkingTiger from "../../assets/images/spirit/walking-tiger.gif";
import IconKucoin from "../../assets/images/spirit/kucoin.svg";
import IconCopied from "../../assets/images/copied-icon.svg";
import { Web3Context } from "../../context/Web3Context";
import Modal from "@mui/material/Modal";
import { animalsMapping } from "../../config";
import { getAnimal } from "../../lib/graph";

import clsx from "clsx";

import Icon0 from "../../assets/images/spirit/animals/0.png";
import Icon1 from "../../assets/images/spirit/animals/1.png";
import Icon2 from "../../assets/images/spirit/animals/2.png";
import Icon3 from "../../assets/images/spirit/animals/3.png";
import Icon4 from "../../assets/images/spirit/animals/4.png";
import Icon5 from "../../assets/images/spirit/animals/5.png";
import Icon6 from "../../assets/images/spirit/animals/6.png";
import Icon7 from "../../assets/images/spirit/animals/7.png";
import Icon8 from "../../assets/images/spirit/animals/8.png";
import Icon9 from "../../assets/images/spirit/animals/9.png";

import config from "../../config";
import "./style.scss";

const collectionList = [
  {
    icon: Icon0,
    num: 1,
  },
  {
    icon: Icon1,
    num: 3,
  },
  {
    icon: Icon2,
    num: 2,
  },
  {
    icon: Icon3,
    num: 0,
  },
  {
    icon: Icon4,
    num: 0,
  },
  {
    icon: Icon5,
    num: 0,
  },
  {
    icon: Icon6,
    num: 0,
  },
  {
    icon: Icon7,
    num: 0,
  },
  {
    icon: Icon8,
    num: 0,
  },
  {
    icon: Icon9,
    num: 0,
  },
];

const invitationList = [
  {
    address: "0x2a...2e2b",
    icon: Icon0,
    date: "2022.06.23 02:23:21",
  },
  {
    address: "0x2a...2e2b",
    icon: Icon1,
    date: "2022.06.23 02:23:21",
  },
  {
    address: "0x2a...2e2b",
    icon: Icon2,
    date: "2022.06.23 02:23:21",
  },
  {
    address: "0x2a...2e2b",
    icon: Icon3,
    date: "2022.06.23 02:23:21",
  },
  {
    address: "0x2a...2e2b",
    icon: Icon4,
    date: "2022.06.23 02:23:21",
  },
  {
    address: "0x2a...2e2b",
    icon: Icon5,
    date: "2022.06.23 02:23:21",
  },
];

export default function Spirit() {
  const { account, connectWallet } = useContext(Web3Context);
  const [step, setStep] = useState(0);
  const [qualified, setQualified] = useState(false);
  const [animal, setAnimal] = useState("");
  const [ruleModalVisible, setRuleModalVisible] = useState(false);
  const [copyModalVisible, setCopyModalVisible] = useState(false);

  const doCopy = () => {
    const copied = document.createElement("input");
    copied.setAttribute(
      "value",
      `A 5s TEST helps you match your Spirit Animal in the Web3 world! Together with your friends and get the chance to enjoy the big rewards! https://www.zzoopers.xyz/spirit?src=${account}`
    );
    document.body.appendChild(copied);
    copied.select();
    document.execCommand("copy");
    document.body.removeChild(copied);

    setCopyModalVisible(true);
  };

  const doAnalyze = async () => {
    setStep(1);
    setAnimal(await getAnimal(account));
    setStep(2);
  };

  return (
    <div>
      {/* <Header logoOnly={true} /> */}
      <div className="spirit-page">
        {step === 0 && (
          <div className="safe-area area-first">
            <img src={IconUnknown} className="icon-unknown" />

            <div className="sponsors">
              <a href={config.socialLinks.zzopers} target="_blank">
                <img src={IconZzoopers} />
              </a>
              <a href={config.socialLinks.kucoin} target="_blank">
                <img src={IconKucoin} />
              </a>
            </div>

            <div className="spirit-title">
              What's Your Spirit Animal in Web 3.0?
            </div>
            <div className="spirit-desc">
              Spirit animal refers to a spirit which helps guide or protect a
              person on a journey and whose characteristics that person shares
              or embodies. It is also metaphor, often humorous, for someone or
              something a person relates to or admires.
            </div>
            {account ? (
              <a className="btn-yellow btn-discover" onClick={doAnalyze}>
                Discover Now
              </a>
            ) : (
              <a className="btn-yellow btn-discover" onClick={connectWallet}>
                Connect Wallet
              </a>
            )}

            <div className="connect-hint">
              *Your authorization is required to connect the wallet and retrieve
              your on-chain behavior, we will not touch your personal private
              key and protect your privacy. If you mind this behavior, Please
              close this link.
            </div>
          </div>
        )}

        {step === 1 && (
          <>
            <div className="safe-area">
              <div className="zzoopers-title">Zzoopers</div>
              <img src={IconWalkingTiger} className="walking-tiger" />
              <div className="analysing-title">Analysing...</div>
              <div className="analysing-desc">
                You're not ready yet. Maybe you should meditate first.
              </div>
            </div>
            <div className="barrage-area">
              <div className="barrage-item item-1">
                <div className="barrage-tip">
                  "What's your favorite natural element?"
                </div>
              </div>
              <div className="barrage-item item-2">
                <div className="barrage-tip">
                  "When you bought your first NFT?"
                </div>
              </div>
              <div className="barrage-item item-3">
                <div className="barrage-tip">
                  "Which community did you join first in the metaverse?"
                </div>
              </div>
              <div className="barrage-item item-4">
                <div className="barrage-tip">
                  "What was the last project you were introduced to by a
                  friend?"
                </div>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="step-2">
            <div className="safe-area">
              <img src={`/animals/${animal}.png`} className="result-avatar" />
              <div className="result-title">
                You are the {animal} in Web 3.0
              </div>
              <div className="result-desc">
                <div
                  dangerouslySetInnerHTML={{
                    __html: animalsMapping[animal].desc1,
                  }}
                />
                <div
                  className="highlight"
                  dangerouslySetInnerHTML={{
                    __html: animalsMapping[animal].desc2,
                  }}
                />
              </div>
            </div>

            <div className="free-chance">
              <div className="safe-area">
                {qualified ? (
                  <div className="qualified-title">You get free mint!!!</div>
                ) : (
                  <div className="free-chance-title">
                    Congratulations you get a chance to Free Mint
                  </div>
                )}

                <div className="free-chance-desc">
                  Invite your friends to participate in the test, together with
                  your friends to collect{" "}
                  <span className="highlight">10 spirit animals</span> and you
                  will have a chance to get a free mint.
                  {/* <a
                    className="btn-rule"
                    onClick={() => setRuleModalVisible(true)}
                  >
                    more rules
                  </a> */}
                </div>
              </div>
            </div>
            <div className="safe-area">
              <div className="actions-line">
                <a
                  className="btn-black"
                  href={config.socialLinks.discord}
                  target="_blank"
                >
                  Join our Discord
                </a>
                <a className="btn-yellow" onClick={doCopy}>
                  Invite friends
                </a>
              </div>

              <div className="my-collections">
                <div className="section-title">My collection</div>
                <div className="collection-list">
                  {collectionList.map((item, index) => (
                    <div className="collection-item-wrapper" key={index}>
                      <div
                        className={clsx(
                          "collection-item",
                          !item.num && "empty"
                        )}
                      >
                        <img src={item.icon} />
                        {item.num ? <div className="num">{item.num}</div> : ""}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-invitations">
                <div className="section-title">My invitations</div>
                <div className="invitation-list">
                  {invitationList.map((item) => (
                    <div className="invitation-item" key={item.address}>
                      <div>
                        <div className="address">{item.address}</div>
                        <div className="date">{item.date}</div>
                      </div>
                      <img src={item.icon} className="icon" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <Footer /> */}

      {copyModalVisible && (
        <Modal open={true} onClose={() => setCopyModalVisible(false)}>
          <div className={"modal-body copy-modal"}>
            <img src={IconCopied} className="icon-copied" />
            <div className="title">The invitation link has been copied</div>
            <div className="desc">
              Please send the link to your friends to get free mint!!!
            </div>
            <a
              className="btn-yellow"
              onClick={() => setCopyModalVisible(false)}
            >
              Get
            </a>
          </div>
        </Modal>
      )}

      {ruleModalVisible && (
        <Modal open={true} onClose={() => setRuleModalVisible(false)}>
          <div className={"modal-body rule-modal"}>
            <div className="title">Rules</div>
            <div className="rule-item">
              <div className="rule-title">Rule 1</div>
              <div className="rule-desc">
                Please send the link to your friends to get free mint!!! Please
                send the link to your friends to get free mint!!! Please send
                the link to your friends to get free mint!!!
              </div>
            </div>
            <div className="rule-item">
              <div className="rule-title">Rule 1</div>
              <div className="rule-desc">
                Please send the link to your friends to get free mint!!! Please
                send the link to your friends to get free mint!!! Please send
                the link to your friends to get free mint!!!
              </div>
            </div>
            <a
              className="btn-yellow"
              onClick={() => setRuleModalVisible(false)}
            >
              Get
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}

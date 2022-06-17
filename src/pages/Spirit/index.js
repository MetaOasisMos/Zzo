// import Header from "../../Components/Header";
// import Footer from "../../Components/Footer";
import { useEffect, useState, useContext } from "react";
import IconUnknown from "../../assets/images/spirit/unknown.gif";
import { useLocation } from "react-router-dom";
// import IconAvatar from "../../assets/images/spirit/avatar.png";
import IconMetaoasis from "../../assets/images/spirit/metaoasis.svg";
import IconWalkingTiger from "../../assets/images/spirit/walking-tiger.gif";
import IconKucoin from "../../assets/images/spirit/kucoin.svg";
import IconCopied from "../../assets/images/copied-icon.svg";
import { Web3Context } from "../../context/Web3Context";
import Modal from "@mui/material/Modal";
import axios from "axios";
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
import { setRef } from "@mui/material";

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

// https://u7x7ubqmf7.larksuite.com/docx/doxus1f9Lqxyuo9VRaOc1i4hDUb

export default function Spirit() {
  const location = useLocation();
  const { account, connectWallet, web3 } = useContext(Web3Context);
  const [step, setStep] = useState(0);
  const [qualified, setQualified] = useState(true);
  const [animal, setAnimal] = useState("");
  const [inviter, setInviter] = useState("");
  const [ruleModalVisible, setRuleModalVisible] = useState(false);
  const [copyModalVisible, setCopyModalVisible] = useState(false);
  // const [invitationList, setInvitationList] = useState([])
  // const [collectionList, setcollectionList] = useState([])

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

  const saveResult = async (signature) => {
    await axios.post(`${config.spiritRelationApi}/metaoasismos/api/v1`, {
      jsonrpc: "2.0",
      method: "newZzoopersAnimal",
      params: {
        owner: account,
        inviter,
        ownerSig: signature + "asdfawf",
      },
      id: 1,
    });
  };

  const doAnalyze = async () => {
    const msgParams = JSON.stringify({
      domain: {
        name: "ZzoopersAnimal",
      },
      message: {
        message:
          "To verify your Spirit Animal in Web3, sign below to make the on-chain analysis without exposing your private key.",
      },
      primaryType: "Owner",
      types: {
        Owner: [
          {
            name: "message",
            type: "string",
          },
        ],
        EIP712Domain: [{ name: "name", type: "string" }],
      },
    });
    await web3.currentProvider.sendAsync(
      {
        method: "eth_signTypedData_v4",
        params: [account, msgParams],
        from: account,
      },
      async (err, result) => {
        if (err) {
          console.dir(err);
          return;
        }
        if (result.error) {
          console.log(result.error.message);
          return;
        }
        const signature = result.result;
        console.log("Signature is", signature);

        setStep(1);
        setAnimal(await getAnimal(account));
        setStep(2);
        saveResult(signature);
      }
    );
  };

  const getReference = () => {
    const src = new URLSearchParams(location.search).get("src");
    console.log("reference addr:", src);
    setInviter(src);
  };

  // const getCollections = async () => {
  //   const res = await axios.post(`${config.spiritRelationApi}/metaoasismos/api/v1`, {
  //     jsonrpc: "2.0",
  //     method: "getZzoopersAnimal",
  //     params: account,
  //     id: 1,
  //   });
  //   console.log('collections', res)
  // };

  const getInvitations = async () => {
    const res = await axios.post(
      `${config.spiritRelationApi}/metaoasismos/api/v1`,
      {
        jsonrpc: "2.0",
        method: "getZzoopersAnimalInviteResult",
        params: account,
        id: 1,
      }
    );
    // setInvitationList(res.data)
    console.log("invitations", res);
  };

  useEffect(() => {
    getReference();
  }, []);

  useEffect(() => {
    if (!account) {
      return;
    }
    // getCollections();
    getInvitations();
  }, [account]);

  return (
    <div>
      {/* <Header logoOnly={true} /> */}
      <div className="spirit-page">
        {step === 0 && (
          <div className="safe-area area-first">
            <img src={IconUnknown} className="icon-unknown" />

            <div className="sponsors">
              <a href={config.socialLinks.official} target="_blank">
                <img src={IconMetaoasis} />
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
              *The test requires your authorization to have the on-chain
              records. Connect the wallet and make the signature to meet your
              spirit animal in Web3.
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
                  <>
                    <div className="qualified-title">
                      Congrats!
                      <br /> You are eligible to get full mint rebate!
                    </div>
                    <div className="free-chance-desc">
                      Join our Discord and follow our{" "}
                      <span className="highlight">#Announcement</span> channel.
                      Keep up with our latest news about rebate rewards!
                    </div>
                  </>
                ) : (
                  <>
                    <div className="free-chance-title">
                      Congratulations!
                      <br /> You get a rebate offer!
                    </div>

                    <div className="free-chance-desc">
                      Together with your friends to collect{" "}
                      <span className="highlight">10 spirit animals</span> and
                      you will be able to have rebate rewards.
                    </div>
                  </>
                )}
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
